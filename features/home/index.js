import HomeHero from "./components/HomeHero";
import HomeWelcome from "./components/HomeWelcome";
import HomeServices from "./components/HomeServices";
import StepsSection from "@/shared/components/common/StepsSection";
import { homeProcessSteps } from "./data";
import WhyChooseUs from "@/shared/components/common/WhyChooseUs";
import HomeRestore from "./components/HomeRestore";
import HomeReviews from "./components/HomeReviews";
import HomeFaq from "./components/HomeFaq";
import HomeServiceArea from "./components/HomeServiceArea";
import ContactCta from "@/shared/components/common/ContactCta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWelcome />
      <HomeServices />
      <StepsSection
        id="home-steps-heading"
        eyebrow="How We Work"
        title="From a few photos to a finished piece"
        intro="Four steps. All you need to start is a message."
        steps={homeProcessSteps}
        images={[
          { src: "/images/blog/post-1-cover.jpg", alt: "Living room with a sofa, armchair and wooden coffee table" },
          { src: "/images/blog/post-3-cover.jpg", alt: "Wooden dining table with chairs in a bright room" },
        ]}
        cta={{ label: "Contact Us", href: "/contact" }}
      />
      <WhyChooseUs />
      <HomeRestore />
      <HomeReviews />
      <HomeFaq />
      <HomeServiceArea />
      <ContactCta />
    </>
  );
}
