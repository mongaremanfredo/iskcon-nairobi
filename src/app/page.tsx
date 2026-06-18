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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickNavSection />
      <FestivalHighlightSection />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <FestivalCalendarSection />
      <LeadershipSection />
      <DonationSection />
      <GallerySection />
      <GuestHouseSection />
    </>
  );
}
