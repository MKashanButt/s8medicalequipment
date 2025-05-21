"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { PrimaryButton, SecondaryButton } from "./components/_button";
import { useEffect, useState } from "react";
import productsData from "@/public/data/products.json";

interface Product {
  id: string;
  name: string;
  image: string;
  keyBenefits: string[];
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <main className="w-full min-h-screen">
      <section className="w-full h-screen">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          {/* Hero Slide */}
          <SwiperSlide className="relative w-full h-full">
            <Image
              src="/images/main-slider-img-2.jpg"
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center px-4 gap-4 mt-8 text-center">
              <h1 className="text-white text-6xl md:text-5xl font-bold tracking-wider uppercase">
                Bringing Health to life
                <br />
                for the whole family
              </h1>
              <hr className="w-1/3 border-white h-2 bg-white rounded-lg mx-auto" />
              <p className="w-2/3 text-white mx-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                sunt vitae quos distinctio omnis nesciunt libero ut,
                exercitationem quam voluptate. Vitae eligendi ad possimus
                necessitatibus eaque tempore ut distinctio a voluptas ducimus?
              </p>
              <div className="flex gap-4 mx-auto">
                <PrimaryButton>View Services</PrimaryButton>
                <SecondaryButton>Learn More</SecondaryButton>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full">
            <Image
              src="/images/main-slider-img-1.jpg"
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center px-4 gap-4 mt-8">
              <h1 className="text-white text-6xl md:text-5xl font-bold tracking-wider uppercase">
                Bringing Health to life
                <br />
                for the whole family
              </h1>
              <hr className="w-1/3 border-white h-2 bg-white rounded-lg" />
              <p className="w-2/3 text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                sunt vitae quos distinctio omnis nesciunt libero ut,
                exercitationem quam voluptate. Vitae eligendi ad possimus
                necessitatibus eaque tempore ut distinctio a voluptas ducimus?
              </p>
              <div className="flex gap-4">
                <PrimaryButton>View Services</PrimaryButton>
                <SecondaryButton>Learn More</SecondaryButton>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="w-[80%] mx-auto border-4 border-[#65AD47] flex py-4 bg-white rounded-lg my-8">
        <div className="flex flex-col gap-4 w-1/3 px-4 border-r-2 border-[#65AD47]">
          <h1 className="text-[#65AD47] font-bold text-2xl">Opening Hours</h1>
          <ul className="divide-y-2 divide-[#65AD47]/50">
            <li className="flex items-center justify-between font-bold py-3">
              <p>Monday - Friday</p>
              <p>8.00-18.00</p>
            </li>
            <li className="flex items-center justify-between font-bold py-3">
              <p>Saturday</p>
              <p>9.00-17.00</p>
            </li>
            <li className="flex items-center justify-between font-bold py-3">
              <p>Sunday</p>
              <p>9.00-15.00</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-1/3 border-r-2 border-[#65AD47] px-4">
          <h1 className="text-[#65AD47] font-bold text-2xl">
            Doctors Timetable
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            deleniti! Vel qui labore hic enim similique quasi aspernatur soluta
            cumque?
          </p>
          <PrimaryButton>View Timetable</PrimaryButton>
        </div>
        <div className="flex flex-col gap-4 w-1/3 px-4">
          <h1 className="text-[#65AD47] font-bold text-2xl flex gap-2">
            Emergency Cases
          </h1>
          <p className="items-center text-4xl flex gap-4">
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
              <path d="M13 2a9 9 0 0 1 9 9" />
              <path d="M13 6a5 5 0 0 1 5 5" />
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            800 123 45 67
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit unde
            placeat mollitia delectus fugit voluptatibus optio quia eos esse
            ducimus?
          </p>
        </div>
      </section>
      <section className="w-[80%] py-4 flex flex-col gap-4 mx-auto">
        <h2 className="text-4xl">Services</h2>
        <hr className="h-1 bg-[#65AD47] full border-[#65AD47] rounded-lg" />
        <div className="flex gap-4">
          <div className="p-2 flex flex-col gap-4 w-1/2">
            <div className="w-28 rounded-md bg-[#65AD47] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-24 h-24"
              >
                <path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold tracking-wide">DME Equipments</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam porro tenetur maiores sapiente voluptatem maxime. Harum
              quo incidunt unde minima culpa voluptates? Rem enim nam itaque
              vitae maxime hic tempora atque animi mollitia officia alias, quae
              est odio optio voluptates.
            </p>
            <PrimaryButton>
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
          <div className="p-2 flex flex-col gap-4 w-1/2">
            <div className="w-28 rounded-md bg-[#65AD47] p-2">
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
                className="w-24 h-24"
              >
                <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
                <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                <path d="m2 13 6 6" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold tracking-wide">Caregivers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam porro tenetur maiores sapiente voluptatem maxime. Harum
              quo incidunt unde minima culpa voluptates? Rem enim nam itaque
              vitae maxime hic tempora atque animi mollitia officia alias, quae
              est odio optio voluptates.
            </p>
            <PrimaryButton>
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
        </div>
      </section>
      <section className="h-screen py-4 relative flex">
        <Image
          src="/images/fullwidth-img-1.jpeg"
          alt="doctor section image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-screen absolute left-0 top-0 z-0"
        />
        <div className="w-[80%] mx-auto flex items-center justify-between z-50 relative">
          <div className="flex flex-col gap-8 w-1/2">
            <Image
              src="/images/logo.png"
              alt="Company Logo S8Medical"
              width={200}
              height={100}
            />
            <h2 className="text-4xl font-bold">Welcome To Our Clinic!</h2>
            <p>
              We offer extensive medical procedures to outbound and inbound
              patients.
            </p>
            <p>
              Our major areas of specialization include oncology, orthopedics,
              cardiology, IVF Treatment, urology, neurosurgery,
              gastroenterology, plastic surgery and many other departments.
            </p>
            <SecondaryButton>Get In Touch</SecondaryButton>
          </div>
        </div>
      </section>
      <section className="w-[80%] py-4 flex flex-col gap-4 mx-auto">
        <h2 className="text-4xl">Products</h2>
        <hr className="h-1 bg-[#65AD47] full border-[#65AD47] rounded-lg" />
        <div className="grid grid-cols-3 gap-4">
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
              <PrimaryButton className="absolute top-4 right-4">
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
      <section className="flex gap-4 my-12">
        <div className="p-8 pl-24 bg-[#65AD47] w-full">
          <h2 className="text-4xl text-white text-center">
            Check Your Qualification
          </h2>
          <hr className="h-1 bg-white full border-white rounded-lg my-4" />
          <form action="" method="post" className="py-2 w-2/3 mx-auto">
            <div className="grid grid-cols-2 gap-4 pb-4">
              <div className="flex gap-4 items-center">
                <label htmlFor="first_name" className="w-1/3 text-white">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  className="w-2/3 bg-white border-2 border-[#65AD47] rounded-md p-2"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="last_name" className="w-1/3 text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  className="w-2/3 bg-white border-2 border-[#65AD47] rounded-md p-2"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="gender" className="w-1/3 text-white">
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  placeholder="Gender"
                  className="w-2/3 bg-white border-2 border-[#65AD47] rounded-md p-2"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="street_address" className="w-1/3 text-white">
                  Street Address
                </label>
                <input
                  type="text"
                  name="street_address"
                  id="street_address"
                  placeholder="Street Address"
                  className="w-2/3 bg-white border-2 border-[#65AD47] rounded-md p-2"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="city" className="w-1/3 text-white">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className="w-2/3 bg-white border-2 border-[#65AD47] rounded-md p-2"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="state" className="w-1/3 text-white">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State"
                  className="w-2/3 bg-white border-2 border-[#65AD47] rounded-md p-2"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="zip" className="w-1/3 text-white">
                  Zip
                </label>
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  placeholder="Zip"
                  className="w-2/3 bg-white border-2 border-[#65AD47] rounded-md p-2"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="phone_no" className="w-1/3 text-white">
                  Phone No
                </label>
                <input
                  type="text"
                  name="phone_no"
                  id="phone_no"
                  placeholder="Phone No"
                  className="w-2/3 bg-white border-2 border-[#65AD47] rounded-md p-2"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="dob" className="w-1/3 text-white">
                  Dob
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="w-2/3 bg-white border-2 border-[#65AD47] rounded-md p-2"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label
                  htmlFor="best_time_to_contact"
                  className="w-1/3 text-white"
                >
                  Best Time To Contact
                </label>
                <input
                  type="text"
                  name="best_time_to_contact"
                  id="best_time_to_contact"
                  placeholder="Best Time To Contact"
                  className="w-2/3 bg-white border-2 border-[#65AD47] rounded-md p-2"
                />
              </div>
            </div>
            <p className="flex gap-2 items-start text-white">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                className="my-1"
              />
              <span>
                By tapping the "Submit" button, I expressly endorse S8 Medical
                Equipment to call me or send me recorded messages or messages
                about their Supplies, or other Clinical things using electronic
                advancement to my telephone/cell number I entered already. I
                understand that I am not supposed to give my consent as a
                condition of any purchase.
              </span>
            </p>
            <SecondaryButton className="mt-4 mx-auto w-2/3 hover:bg-white hover:border-white hover:text-[#65AD47]">
              See If I Qualify
            </SecondaryButton>
          </form>
        </div>
      </section>
    </main>
  );
}
