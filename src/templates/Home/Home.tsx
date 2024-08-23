import Banner from "@/components/home/Banner/Banner";
import BestBrands from "@/components/home/BestBrands/BestBrands";
import BestSelling from "@/components/home/BestSelling/BestSelling";
import Categories from "@/components/home/Categories/Categories";
import Hero from "@/components/home/Hero/Hero";

export default function HomeTemplate() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSelling />
      <Banner />
      <BestBrands />
    </>
  );
}
