import BannerSection from "@/sections/BannerSection";
import { bannerSectionData as bannerData } from "@/mockdata/mock";

export default function SchedulePage() {
  return (
    <>
      {bannerData && (
        <BannerSection
          heading={bannerData?.heading}
          description={bannerData?.description}
          image={bannerData?.image}
        />
      )}
      end of banner section
    </>
  );
}
