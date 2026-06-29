import PageWrapper from "./components/PageWrapper";
import SaveTheDateSection from "./components/SaveTheDateSection";
import VideoBgSection from "./components/VideoBgSection";
import InvitationMessage from "./components/InvitationMessage";
import EventsSection from "./components/EventsSection";
import RSVPForm from "./components/RSVPForm";

export default function Page() {
  return (
    <PageWrapper>
      <main>
        <SaveTheDateSection />
        <VideoBgSection />
        <InvitationMessage />
        <EventsSection />
<RSVPForm />
      </main>
    </PageWrapper>
  );
}
