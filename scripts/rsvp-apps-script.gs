/**
 * Google Apps Script Web App backing the RSVP form.
 * Deploy as: Deploy > New deployment > Web app, execute as "Me", access "Anyone".
 * Paste the deployment /exec URL into NEXT_PUBLIC_GOOGLE_SHEET_URL.
 */
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const { name, guests, attendance, targetTab } = data;

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetTab || "ABHIRAM");
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: "Sheet tab not found" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  let wedding = "No";
  let reception = "No";
  let declined = "No";

  switch (attendance) {
    case "both":
      wedding = "Yes";
      reception = "Yes";
      break;
    case "ceremony":
      wedding = "Yes";
      break;
    case "reception":
      reception = "Yes";
      break;
    case "decline":
      declined = "Yes";
      break;
  }

  const lastRow = sheet.getLastRow();
  const sn = lastRow; // header occupies row 1, so row count equals next serial number

  sheet.appendRow([
    sn,
    new Date(),
    name,
    guests,
    wedding,
    reception,
    declined,
  ]);

  sendNotificationEmail(name, guests, wedding, reception, declined);

  return ContentService.createTextOutput(JSON.stringify({ success: true, message: "RSVP received! Thank you." }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendNotificationEmail(name, guests, wedding, reception, declined) {
  const events = declined === "Yes"
    ? "Declined"
    : [wedding === "Yes" ? "Wedding" : null, reception === "Yes" ? "Reception" : null]
        .filter(Boolean)
        .join(" & ");

  const body = [
    "New RSVP received:",
    "",
    "Name: " + name,
    "Number of guests: " + guests,
    "Attending: " + events,
  ].join("\n");

  MailApp.sendEmail("tkabhiram36@gmail.com", "New RSVP: " + name, body);
}
