"use client";

import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../components/_button";
import productData from "@/public/data/products.json";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toggleDialog } from "../utils/DialogHelper";

interface Product {
  id: string;
  name: string;
  image: string;
}

export default function AboutUs() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="flex relative h-screen">
        <Image
          src="/images/about-img1.jpeg"
          className="absolute top-0 left-0 z-40"
          fill
          alt="About Us Section Hero Hospital Image"
        />
        <div className="flex flex-col gap-4 bg-black/50 z-40 w-full h-full items-center justify-center text-white text-center pt-20 md:pt-28 px-4 select-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
            Driven by Purpose. Defined by Care.
          </h1>
          <p className="w-full md:w-[80%] mx-auto text-sm md:text-base">
            S8 Medical Equipments is a force for better healthcare, not just a
            supplier. Our dedication to quality, innovation, and human-centered
            solutions enables us to empower healthcare professionals worldwide.
            Everything we do, from our beginnings to our strategy, is based on
            the same goal: improving care with uncompromising technology.
          </p>
          <SecondaryButton
            className="px-8 md:px-12 mt-4"
            onClick={() => toggleDialog("popup")}
          >
            Learn More
          </SecondaryButton>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="flex flex-col lg:flex-row gap-8 w-full px-4 md:px-8 lg:w-[90%] xl:w-[80%] mx-auto py-8 border-b border-[#65AD47]">
        {/* Left Column - Main Content */}
        <div className="w-full lg:w-[60%]">
          {/* Why Choose Us Section */}
          <div className="flex flex-col sm:flex-row py-4 justify-between items-center border-b-2 border-[#65AD47] mb-4">
            <h2 className="text-2xl font-bold tracking-wide mb-4 sm:mb-0">
              Why Choose S8 Medical Equipment
            </h2>
            <div className="flex items-center gap-1">
              <Link
                href="https://www.facebook.com/s8squadequipment"
                target="_blank"
              >
                <div className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#65AD47"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/s8squadmedical/"
                target="_blank"
              >
                <div className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#65AD47"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          <p className="font-bold text-lg mb-4">
            Selecting the best medical equipment supplier is a commitment to the
            caliber of care you provide, not merely a purchasing choice. We at
            S8 Medical Equipments are aware of the responsibility that each
            product we provide entails. For this reason, we become more than
            just a provider; we become your reliable partner in providing
            high-quality medical care.
          </p>

          <p className="mb-8">
            We deliver dependable, long-lasting, and pressure-resistant
            equipment to hospitals, clinics, care facilities, and home-care
            providers with a portfolio that satisfies worldwide safety and
            performance requirements. However, our influence extends beyond the
            product. We make sure you're covered at every stage with our
            professional consulting, smooth installation, caregiver training,
            and continuing technical support.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {[
              {
                src: "/images/about-us-hospital.jpeg",
                title: "Hospital Ward",
              },
              {
                src: "/images/about-us-nurses.jpeg",
                title: "Qualified Staff",
              },
              {
                src: "/images/about-us-surgery.png",
                title: "Surgery Department",
              },
              {
                src: "/images/about-us-ct.jpeg",
                title: "CT Scan",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative h-48 sm:h-52 md:h-64 flex items-end justify-center"
              >
                <Image
                  src={item.src}
                  fill
                  style={{ objectFit: "cover" }}
                  alt={`About Us - ${item.title}`}
                  className="w-full h-full absolute top-0 left-0 z-0"
                />
                <div className="w-full h-full bg-black/40 z-10 absolute"></div>
                <h3 className="z-20 text-xl md:text-2xl text-white font-bold tracking-wide p-2">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Insurances Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-wide py-2">
              Insurances We Accept
            </h2>
            <hr className="w-full h-1 bg-[#65AD47] border border-[#65AD47] rounded-lg" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-4">
              {[
                "/images/aetna-insurance.png",
                "/images/bcbs-insurance.png",
                "/images/cigna-insurance.jpg",
                "/images/clover-insurance.png",
                "/images/humana-insurance.jpg",
                "/images/medicare-insurance.png",
                "/images/uhc-insurance.jpg",
                "/images/wellcare-insurance.png",
              ].map((src, index) => (
                <div key={index} className="relative h-16 w-full">
                  <Image
                    src={src}
                    alt={`Insurance ${index + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                    className="p-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quality and Safety Section */}
          <div className="flex flex-col gap-4 my-8">
            <h2 className="text-2xl font-bold tracking-wide py-2">
              Quality and Safety
            </h2>
            <hr className="w-full h-1 bg-[#65AD47] border border-[#65AD47] rounded-lg" />
            <p>
              Quality and safety are the cornerstones of S8 Medical Equipments,
              not just frills. To guarantee optimum performance in actual
              clinical settings, each of the devices we provide has undergone
              extensive testing, certification, and compliance with global
              healthcare standards. Because lives depend on what we offer, we
              only work with reliable manufacturers and strictly monitor the
              quality of our goods.
            </p>
            <p>
              However, we don't end with the product. Our dedication encompasses
              appropriate instruction, secure handling, and complete openness,
              equipping healthcare professionals with the knowledge and
              self-assurance to employ them.
            </p>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="w-full lg:w-[40%] py-2">
          {/* Products Section */}
          <div className="p-4 border-t-8 border-[#65AD47] bg-white rounded-lg shadow">
            <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
              Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-2 border rounded-lg p-4 shadow hover:shadow-lg transition relative"
                >
                  <div className="relative w-full h-40">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover mb-4 rounded"
                    />
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold mb-2">
                    {product.name}
                  </h2>
                  <PrimaryButton
                    className="absolute top-2 right-2 p-2"
                    onClick={() => toggleDialog("popup")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
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
          </div>

          {/* Services Section */}
          <div className="p-4 border-t-8 border-[#65AD47] bg-white rounded-lg shadow mt-8">
            <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">
              Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 flex flex-col gap-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 rounded-md bg-[#65AD47] p-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10"
                  >
                    <path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
                <h2 className="text-lg md:text-xl font-bold tracking-wide">
                  DME Equipments
                </h2>
                <p className="text-sm">
                  In order to assist patients' long-term care, rehabilitation,
                  and enhanced quality of life at home or in clinical settings,
                  S8 Medical Equipments offers a wide selection of Durable
                  Medical Equipment (DME).
                </p>
                <PrimaryButton
                  className="mt-2 w-full sm:w-auto"
                  onClick={() => toggleDialog("popup")}
                >
                  Learn More
                </PrimaryButton>
              </div>

              <div className="p-4 flex flex-col gap-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 rounded-md bg-[#65AD47] p-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10"
                  >
                    <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
                    <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 13 6 6" />
                  </svg>
                </div>
                <h2 className="text-lg md:text-xl font-bold tracking-wide">
                  Caregivers
                </h2>
                <p className="text-sm">
                  Whether for individual patients or medical institutions, we
                  promise that every product meets strict safety standards and
                  is backed by competent support and maintenance services.
                </p>
                <PrimaryButton
                  className="mt-2 w-full sm:w-auto"
                  onClick={() => toggleDialog("popup")}
                >
                  Learn More
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
