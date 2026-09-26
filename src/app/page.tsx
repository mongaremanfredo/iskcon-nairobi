import HeroSection from "@/components/sections/HeroSection";
import QuickNavSection from "@/components/sections/QuickNavSection";
import FestivalHighlightSection from "@/components/sections/FestivalHighlightSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FestivalCalendarSection from "@/components/sections/FestivalCalendarSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import DonationSection from "@/components/sections/DonationSection";
import GallerySection from "@/components/sections/GallerySection";
import GuestHouseSection from "@/components/sections/GuestHouseSection";
import SavannaDivider from "@/components/ui/SavannaDivider";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "ISKCON Nairobi | Sri Sri Radha Bankebihari Temple",
  description:
    "Visit ISKCON Nairobi for daily darshan, kirtan, prasadam, spiritual education, festivals, cow protection, and service in East Africa.",
  path: "/",
  image: "/brand/og-image.jpg?v=20260825",
  imageAlt: "ISKCON Nairobi, Sri Sri Radha Bankebihari Temple",
});

export default function HomePage() {
  return (
    <>
      {/* Homepage narrative order:
          welcome -> routes into temple life -> featured festival -> service
          work -> impact -> founder/leadership vision -> community voices ->
          calendar -> donation -> visual world -> guest hospitality.
          Keep this sequence unless the whole landing-page story is being
          redesigned; section spacing is tuned around this rhythm. */}
      <HeroSection />
      <SavannaDivider className="h-[7vw] min-h-6 sm:h-24" />
      <QuickNavSection />
      <FestivalHighlightSection />
      <ProjectsSection />
      <StatsSection />
      <SavannaDivider className="h-[7vw] min-h-6 sm:h-24" />
      <LeadershipSection />
      <TestimonialsSection />
      <FestivalCalendarSection />
      <DonationSection />
      <GallerySection />
      <GuestHouseSection />
    </>
  );
}
