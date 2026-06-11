import HeroSection from "./components/HeroSection";
import InvitationMessage from "./components/InvitationMessage";
import CeremonySection from "./components/CeremonySection";
import ReceptionSection from "./components/ReceptionSection";
import ParentsFamilySection from "./components/ParentsFamilySection";
import VenueMap from "./components/VenueMap";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <InvitationMessage />
      <CeremonySection />
      <ReceptionSection />
      <ParentsFamilySection />
      <VenueMap />
      <RSVPForm />
      <Footer />
    </main>
  );
}
