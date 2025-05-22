"use client";

import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../components/_button";
import productData from "@/public/data/products.json";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  image: string;
  keyBenefits: string[];
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="flex relative h-screen">
        <Image
          src="/images/products-hero.jpeg"
          className="absolute top-0 left-0 z-0 object-cover"
          fill
          priority
          alt="Medical products hero image"
        />
        <div className="flex flex-col gap-4 bg-black/50 z-10 w-full h-full items-center justify-center text-white text-center px-4 md:px-0 pt-20 md:pt-28 select-none">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide">
            Examine Precision. Discover Innovation.
          </h1>
          <p className="w-full md:w-[80%] mx-auto text-sm md:text-base">
            S8 Medical Equipments helps healthcare professionals at every level
            with anything from cutting-edge diagnostic systems and critical care
            solutions to routine clinical necessities and home-use gadgets. Our
            products are designed to fulfill strict specifications and produce
            reliable results, whether you're outfitting a major hospital, a solo
            office, or a home-care setting. With innovation at the heart of our
            business, we not only stay ahead of the curve but also contribute to
            its direction.
          </p>
          <Link href="/about-us">
            <SecondaryButton className="px-8 md:px-12 mt-4">
              Learn More
            </SecondaryButton>
          </Link>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto py-8 md:py-16 border-b-2 border-[#65AD47]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide py-4 border-b-2 border-[#65AD47]">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          {[
            {
              image: "/products/wheelchairs.jpg",
              title: "Wheelchairs",
              description:
                "Designed to be independent, comfortable, and mobile. Sturdy, lightweight, and designed for daily use.",
            },
            {
              image: "/products/knee-braces.jpg",
              title: "Knee Braces",
              description:
                "Whether you're recuperating or continuing to be active, keep your joints stable, supported, and protected.",
            },
            {
              image: "/products/cgm-monitors.jpg",
              title: "CGM Monitors",
              description:
                "Accurately monitor blood glucose levels in real time. Improve your diabetes treatment by using more intelligent monitoring.",
            },
            {
              image: "/products/tense-unit.jpg",
              title: "Tense Unit",
              description:
                "At your fingers is portable pain alleviation. Use scientifically proven technology to address both acute and chronic pain.",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 border rounded-lg hover:shadow-lg transition"
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <Image
                  src={product.image}
                  fill
                  style={{ objectFit: "contain" }}
                  alt={product.title}
                  className="z-10"
                />
              </div>
              <h4 className="text-xl md:text-2xl font-bold tracking-wide mt-6">
                {product.title}
              </h4>
              <p className="text-center text-sm md:text-base mt-2">
                {product.description}
              </p>
              <PrimaryButton className="w-full mt-6">Learn More</PrimaryButton>
            </div>
          ))}
        </div>
      </section>

      {/* Product Listing Section */}
      <section className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto py-8 md:py-16 border-b-2 border-[#65AD47]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide py-4 border-b-2 border-[#65AD47]">
          Product Listing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-4 border rounded-lg p-4 shadow hover:shadow-lg transition relative"
            >
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded"
                />
              </div>
              <h2 className="text-lg md:text-xl font-semibold">
                {product.name}
              </h2>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1">
                {product.keyBenefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <PrimaryButton className="absolute top-4 right-4 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M14 4.1 12 6" />
                  <path d="m5.1 8-2.9-.8" />
                  <path d="m6 12-1.9 2" />
                  <path d="M7.2 2.2 8 5.1" />
                  <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
                </svg>
              </PrimaryButton>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide py-4 border-b-2 border-[#65AD47]">
          Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {[
            {
              name: "Emily R",
              tagline: "Freedom in Motion",
              review:
                "The transition to this wheelchair completely altered day-to-day living. It folds up easily for travel and is smooth and light.",
            },
            {
              name: "David M",
              tagline: "Knee Brace That Actually Works",
              review:
                "Over the years, I've tried a dozen different knee braces. This one supported me well without making me feel heavy. It holds up.",
            },
            {
              name: "Sara T",
              tagline: "Game-Changer for Diabetes",
              review:
                "The CGM monitor has been a life saver. I can steer clear of hazardous increases thanks to real-time tracking, and the smartphone warnings are also useful.",
            },
            {
              name: "Marcus A",
              tagline: "Pain Relief in My Pocket",
              review:
                "Compared to certain medications, the TENS machine is more effective at managing my back pain. It is easy to use, small, and rechargeable.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="p-6 shadow-sm rounded-lg text-center hover:shadow-md transition"
            >
              <div className="relative w-16 h-16 mx-auto">
                <Image
                  src="/images/review-icon.png"
                  alt="Review icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-xl md:text-2xl font-bold tracking-wide mt-6">
                {review.name}
              </h4>
              <p className="text-xs md:text-sm my-2 text-[#65AD47] font-medium">
                {review.tagline}
              </p>
              <p className="text-sm md:text-base mt-4">{review.review}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
