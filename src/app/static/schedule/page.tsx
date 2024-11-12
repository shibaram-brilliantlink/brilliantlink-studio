import BannerSection from "@/sections/BannerSection";
import { bannerSectionData as bannerData } from "@/mockdata/mock";
import ListCard from "@/sections/ListCard";

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
      <ListCard />
    </>
  );
}
