/**
 * Google Apps Script Web App backing the RSVP form.
 * Deploy as: Deploy > New deployment > Web app, execute as "Me", access "Anyone".
 * Paste the deployment /exec URL into NEXT_PUBLIC_GOOGLE_SHEET_URL.
 */
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const { name, guests, attendance, targetTab } = data;

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetTab || "Abhiram");
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: "Sheet tab not found" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  let wedding = "No";
  let reception = "No";
  let declined = "No";
  let eventLabel = "";

  switch (attendance) {
    case "both":
      wedding = "Yes";
      reception = "Yes";
      eventLabel = "Wedding & Reception";
      break;
    case "ceremony":
      wedding = "Yes";
      reception = "No";
      eventLabel = "Wedding only";
      break;
    case "reception":
      wedding = "No";
      reception = "Yes";
      eventLabel = "Reception only";
      break;
    case "decline":
      wedding = "No";
      reception = "No";
      declined = "Yes";
      eventLabel = "Declined";
      break;
    case "wedding-only":
      wedding = "Yes";
      reception = "--";
      eventLabel = "Wedding only";
      break;
    case "wedding-only-decline":
      wedding = "No";
      reception = "--";
      declined = "Yes";
      eventLabel = "Declined";
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

  try {
    sendNotificationEmail(name, guests, eventLabel);
  } catch (err) {
    console.error("Failed to send notification email: " + err);
  }

  return ContentService.createTextOutput(JSON.stringify({ success: true, message: "RSVP received! Thank you." }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendNotificationEmail(name, guests, eventLabel) {
  var body = [
    "New RSVP received:",
    "",
    "Name: " + name,
    "Number of guests: " + guests,
    "Attending: " + eventLabel
  ].join("\n");

  MailApp.sendEmail("tkabhiram36@gmail.com", "New RSVP: " + name, body);
}
