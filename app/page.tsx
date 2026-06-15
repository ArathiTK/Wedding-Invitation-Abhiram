import PageWrapper from "./components/PageWrapper";
import SaveTheDateSection from "./components/SaveTheDateSection";
import HeroSection from "./components/HeroSection";
import InvitationMessage from "./components/InvitationMessage";
import CeremonySection from "./components/CeremonySection";
import ReceptionSection from "./components/ReceptionSection";
import ParentsFamilySection from "./components/ParentsFamilySection";
import VenueMap from "./components/VenueMap";
import RSVPForm from "./components/RSVPForm";

export default function Page() {
  return (
    <PageWrapper>
      <main>
        <SaveTheDateSection />
        <HeroSection />
        <InvitationMessage />
        <CeremonySection />
        <ReceptionSection />
        <ParentsFamilySection />
        <VenueMap />
        <RSVPForm />
      </main>
    </PageWrapper>
  );
}
