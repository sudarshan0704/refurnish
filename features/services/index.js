import PageTitleBar from "@/shared/components/common/PageTitleBar";
import ServicesList from "./components/ServicesList";

export default function ServicesPage() {
  return (
    <>
      <PageTitleBar title="Our Services" image="/images/banners/services.jpg" />
      <ServicesList />
    </>
  );
}
