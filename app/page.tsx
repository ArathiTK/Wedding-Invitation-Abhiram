import PageWrapper from "./components/PageWrapper";
import SaveTheDateSection from "./components/SaveTheDateSection";
import InvitationMessage from "./components/InvitationMessage";
import EventsSection from "./components/EventsSection";
import ParentsFamilySection from "./components/ParentsFamilySection";
import RSVPForm from "./components/RSVPForm";

export default function Page() {
  return (
    <PageWrapper>
      <main>
        <SaveTheDateSection />
        <InvitationMessage />
        <EventsSection />
        <ParentsFamilySection />
        <RSVPForm />
      </main>
    </PageWrapper>
  );
}
