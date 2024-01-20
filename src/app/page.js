import Hero from "@/app/component/Hero";
import Specialization from "@/app/component/Specialization";
import Portfolio from "@/app/component/Portfolio";
import CustomerReview from "@/app/component/CustomerReview";
import Tryme from "@/app/component/Tryme";
import BuildTogether from "@/app/component/BuildTogether";
import FAQ from "@/app/component/FAQ";
export default function Home() {
  return (
    <div className=" bg-white">
      <Hero />
      <Specialization />
      <Portfolio />
      <CustomerReview />
      <Tryme />
      <FAQ />
      <BuildTogether />
    </div>
  );
}
