import PageTitleBar from "@/shared/components/common/PageTitleBar";
import AboutIntro from "./components/AboutIntro";
import AboutBelief from "./components/AboutBelief";
import WhyChooseUs from "@/shared/components/common/WhyChooseUs";
import StepsSection from "@/shared/components/common/StepsSection";
import ContactCta from "@/shared/components/common/ContactCta";
import { processSteps } from "./data";
import "./index.css";

export default function AboutPage() {
  return (
    <>
      <PageTitleBar title="About Us" image="/images/banners/about.jpg" />
      <AboutIntro />
      <AboutBelief />
      <WhyChooseUs />
      <StepsSection
        id="about-steps-heading"
        eyebrow="Our Approach"
        title="How we approach every piece"
        intro="Every piece is different, so we look before we decide."
        steps={processSteps}
        images={[
          { src: "/images/blog/post-2-cover.jpg", alt: "Sofa and chairs with refreshed upholstery in a bright room" },
          { src: "/images/blog/post-4-cover.jpg", alt: "Sofa and wooden table in a living room" },
        ]}
      />
      <div className="about-cta">
        <ContactCta />
      </div>
    </>
  );
}
