import HeroSection from "@/components/sections/HeroSection";
import QuickNavSection from "@/components/sections/QuickNavSection";
import PrabhupadaSection from "@/components/sections/PrabhupadaSection";
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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SavannaDivider className="h-[8.333vw] min-h-8 sm:h-24" />
      <QuickNavSection />
      <PrabhupadaSection />
      <FestivalHighlightSection />
      <ProjectsSection />
      <StatsSection />
      <SavannaDivider className="h-[8.333vw] min-h-8 sm:h-24" />
      <TestimonialsSection />
      <FestivalCalendarSection />
      <LeadershipSection />
      <DonationSection />
      <GallerySection />
      <GuestHouseSection />
    </>
  );
}
