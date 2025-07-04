"use client"
import Image from "next/image";
import Banner from "./HomeComponents/Banner";
import ChairCollection from "./HomeComponents/ChairCollection";
import FeaturedProduct from "./HomeComponents/FeaturedProduct";
import NewCollection from "./HomeComponents/NewCollection";
import BestSelling from "./HomeComponents/BestSelling";
import CustomerReview from "./common/CustomerReview";
import NewsLatter from "./HomeComponents/NewsLatter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  let [sliderStaticPatch, setsliderStaticPatch] = useState("")
  let [sliderData, setsliderData,] = useState([])
  let [productType, setproductType] = useState(1)
  let [productImagePath, setProductImagePath] = useState('')
  let [productData, setProductData] = useState([])
  let [bestSellingData, setBestSellingData] = useState([]);
  let [bestSellingPath, setBestSellingPath] = useState("");
  let [testimonials, setTestimonials] = useState([]);
  let [testimonialsimagePath, settestimonialsImagePath] = useState('');


  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;

  let slidView = () => {
    axios.get(`${apiBaseUrl}home/slider`)
      .then((res) => res.data)
      .then((finalRes) => {

        setsliderStaticPatch(finalRes.staticPath)
        setsliderData(finalRes.data)

      })
  }

  useEffect(() => {
    slidView()
  }, [])

  let getProduct = () => {
    axios.get(`${apiBaseUrl}home/home-product`, {
      params: {
        productType
      }
    })
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes)
        setProductImagePath(finalRes.staticPath)
        setProductData(finalRes.data)
      })
  }


  useEffect(() => {
    getProduct()
  }, [productType])




  let getBestSellingProducts = () => {
    axios.get(`${apiBaseUrl}home/getBestsellProduct`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status === 1) {
          setBestSellingData(finalRes.data);
          setBestSellingPath(finalRes.staticPath);
          console.log("BestSelling", finalRes)
        }
      })
      .catch((err) => console.log("Error: ", err));
  };

  useEffect(() => {
    getBestSellingProducts();
  }, []);

  useEffect(() => {
    axios.get(`${apiBaseUrl}home/getTestimonials`)
      .then((res) => {
        if (res.data.status) {
          setTestimonials(res.data.data);
          settestimonialsImagePath(res.data.staticPath);
        }
      }).catch(err => {
        console.error("Error fetching testimonials", err);
      });
  }, []);


  return (
    <>
      <section className="max-w-full overflow-hidden">
        <Banner sliderData={sliderData} sliderStaticPatch={sliderStaticPatch} />
        <ChairCollection />
        <FeaturedProduct productImagePath={productImagePath} productData={productData} productType={productType} setproductType={setproductType} />
        <NewCollection />
        <BestSelling bestSellingData={bestSellingData} bestSellingPath={bestSellingPath} />
        <CustomerReview testimonials={testimonials} testimonialsimagePath={testimonialsimagePath}/>
        <NewsLatter />
      </section>
    </>
  );
}
