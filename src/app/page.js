import Hero from "@/app/component/Hero";
import Specialization from "./component/Specialization";
import Portfolio from "./component/Portfolio";
import CustomerReview from "./component/CustomerReview";
export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Specialization />
      <Portfolio />
      <CustomerReview />
    </div>
  );
}
