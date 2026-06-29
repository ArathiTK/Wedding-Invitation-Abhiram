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
        {/* Wrapper gives the sticky story section 100dvh of pinning room while invitation slides over */}
        <div style={{ height: "200dvh", position: "relative" }}>
          <VideoBgSection />
        </div>
        <InvitationMessage />
        <EventsSection />
        <RSVPForm />
      </main>
    </PageWrapper>
  );
}
