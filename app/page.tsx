import PageWrapper from "./components/PageWrapper";
import SaveTheDateSection from "./components/SaveTheDateSection";
import InvitationMessage from "./components/InvitationMessage";
import CountdownTimerSection from "./components/CountdownTimerSection";
import EventsSection from "./components/EventsSection";
import RSVPForm from "./components/RSVPForm";

export default function Page() {
  return (
    <PageWrapper>
      <main>
        <SaveTheDateSection />
        <InvitationMessage />
        <CountdownTimerSection />
        <EventsSection />
<RSVPForm />
      </main>
    </PageWrapper>
  );
}
