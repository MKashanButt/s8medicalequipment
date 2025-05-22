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
      <section className="flex relative h-screen">
        <Image
          src="/images/products-hero.jpeg"
          className="absolute top-0 left-0 z-40"
          fill
          alt="About Us Section Hero Hospital Image"
        />
        <div className="flex gap-4 flex-col bg-black/50 z-40 w-full h-full items-center justify-center text-white text-center pt-28 select-none">
          <h1 className="text-6xl font-bold tracking-wide">
            Examine Precision. Discover Innovation.
          </h1>
          <p className="w-[80%] mx-auto">
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
            <SecondaryButton className="px-12 mt-4">Learn More</SecondaryButton>
          </Link>
        </div>
      </section>
      <section className="w-[80%] mx-auto border-b-2 border-[#65AD47]">
        <h2 className="text-4xl font-bold tracking-wide py-4 border-b-2 border-[#65AD47]">
          Trending Products
        </h2>
        <div className="grid grid-cols-4 gap-8 my-4">
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/products/wheelchairs.jpg"
              width={200}
              height={200}
              quality={100}
              style={{ objectFit: "contain" }}
              alt="wheelchairs product image"
              className="z-40"
            />
            <h4 className="z-60 text-2xl tracking-wide font-bold tracking-wide">
              Wheelchairs
            </h4>
            <p className="text-center">
              Designed to be independent, comfortable, and mobile. Sturdy,
              lightweight, and designed for daily use.
            </p>
            <PrimaryButton className="w-full mt-4">Learn More</PrimaryButton>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/products/knee-braces.jpg"
              width={200}
              height={200}
              quality={100}
              style={{ objectFit: "contain" }}
              alt="wheelchairs product image"
              className="z-40"
            />
            <h4 className="z-60 text-2xl tracking-wide font-bold tracking-wide">
              Knee Braces
            </h4>
            <p className="text-center">
              Whether you're recuperating or continuing to be active, keep your
              joints stable, supported, and protected.
            </p>
            <PrimaryButton className="w-full mt-4">Learn More</PrimaryButton>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/products/cgm-monitors.jpg"
              width={230}
              height={230}
              quality={100}
              style={{ objectFit: "contain" }}
              alt="wheelchairs product image"
              className="z-40"
            />
            <h4 className="z-60 text-2xl tracking-wide font-bold tracking-wide">
              CGM Monitors
            </h4>
            <p className="text-center">
              Accurately monitor blood glucose levels in real time. Improve your
              diabetes treatment by using more intelligent monitoring.
            </p>
            <PrimaryButton className="w-full mt-4">Learn More</PrimaryButton>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/products/tense-unit.jpg"
              width={160}
              height={160}
              quality={100}
              style={{ objectFit: "contain" }}
              alt="wheelchairs product image"
              className="z-40"
            />
            <h4 className="z-60 text-2xl tracking-wide font-bold tracking-wide">
              Tense Unit
            </h4>
            <p className="text-center">
              At your fingers is portable pain alleviation. Use scientifically
              proven technology to address both acute and chronic pain.
            </p>
            <PrimaryButton className="w-full mt-4">Learn More</PrimaryButton>
          </div>
        </div>
      </section>
      <section className="w-[80%] mx-auto border-b-2 border-[#65AD47]">
        <h2 className="text-4xl font-bold tracking-wide py-4 border-b-2 border-[#65AD47]">
          Product Listing
        </h2>
        <div className="grid grid-cols-4 gap-4 py-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-2 border rounded-lg p-4 shadow hover:shadow-lg transition relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-fit mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {product.keyBenefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <PrimaryButton className="absolute top-2 right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
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
      <section className="w-[80%] mx-auto border-b-1 border-[#65AD47]">
        <h2 className="text-4xl font-bold tracking-wide py-4 border-b-2 border-[#65AD47]">
          Reviews
        </h2>
        <div className="grid grid-cols-4 gap-4 py-4">
          <div className="px-2 py-4 shadow-sm rounded-lg text-center">
            <Image
              src="/images/review-icon.png"
              alt="review-icon"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h4 className="flex gap-2 items-center justify-center text-2xl font-bold tracking-wide">
              Emily R
            </h4>
            <p className="text-xs my-2">Freedom in Motion</p>
            <p className="text-sm">
              The transition to this wheelchair completely altered day-to-day
              living. It folds up easily for travel and is smooth and light.
            </p>
          </div>
          <div className="px-2 py-4 shadow-sm rounded-lg text-center">
            <Image
              src="/images/review-icon.png"
              alt="review-icon"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h4 className="flex gap-2 items-center justify-center text-2xl font-bold tracking-wide">
              David M
            </h4>
            <p className="text-xs my-2">Knee Brace That Actually Works</p>
            <p className="text-sm">
              Over the years, I've tried a dozen different knee braces. This one
              supported me well without making me feel heavy. It holds up.
            </p>
          </div>
          <div className="px-2 py-4 shadow-sm rounded-lg text-center">
            <Image
              src="/images/review-icon.png"
              alt="review-icon"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h4 className="flex gap-2 items-center justify-center text-2xl font-bold tracking-wide">
              Sara T
            </h4>
            <p className="text-xs my-2">Game-Changer for Diabetes</p>
            <p className="text-sm">
              The CGM monitor has been a life saver. I can steer clear of
              hazardous increases thanks to real-time tracking, and the
              smartphone warnings are also useful.
            </p>
          </div>
          <div className="px-2 py-4 shadow-sm rounded-lg text-center">
            <Image
              src="/images/review-icon.png"
              alt="review-icon"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h4 className="flex gap-2 items-center justify-center text-2xl font-bold tracking-wide">
              Marcus A
            </h4>
            <p className="text-xs my-2">Pain Relief in My Pocket</p>
            <p className="text-sm">
              Compared to certain medications, the TENS machine is more
              effective at managing my back pain. It is easy to use, small, and
              rechargeable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
