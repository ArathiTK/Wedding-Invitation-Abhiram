import PageWrapper from "./components/PageWrapper";
import SnapIntro from "./components/SnapIntro";
import SaveTheDateSection from "./components/SaveTheDateSection";
import VideoBgSection from "./components/VideoBgSection";
import InvitationMessage from "./components/InvitationMessage";
import EventsSection from "./components/EventsSection";
import RSVPForm from "./components/RSVPForm";

export default function Page() {
  return (
    <PageWrapper>
      <main>
        <SnapIntro>
          <SaveTheDateSection />
          <VideoBgSection />
          <InvitationMessage />
        </SnapIntro>
        <EventsSection />
        <RSVPForm />
      </main>
    </PageWrapper>
  );
}
