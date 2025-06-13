"use client"
import Image from "next/image";
import Banner from "./HomeComponents/Banner";
import ChairCollection from "./HomeComponents/ChairCollection";
import FeaturedProduct from "./HomeComponents/FeaturedProduct";
import NewCollection from "./HomeComponents/NewCollection";
import BestSelling from "./HomeComponents/BestSelling";
import CustomerReview from "./common/CustomerReview";
import NewsLatter from "./HomeComponents/NewsLatter";

export default function Home() {
  return (
    <>
      <section className="max-w-full overflow-hidden">
        <Banner />
        <ChairCollection />
        <FeaturedProduct />
        <NewCollection />
        <BestSelling />
        <CustomerReview />
        <NewsLatter />
      </section>
    </>
  );
}
