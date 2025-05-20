"use client";

import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../components/_button";
import productData from "@/public/data/products.json";
import { useEffect, useState } from "react";

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
      <section className="flex relative h-screen">
        <Image
          src="/images/about-img1.jpeg"
          className="absolute top-0 left-0 z-40"
          fill
          alt="About Us Section Hero Hospital Image"
        />
        <div className="flex gap-4 flex-col bg-black/50 z-40 w-full h-full items-center justify-center text-white text-center pt-28 select-none">
          <h1 className="text-6xl font-bold tracking-wide">
            One of the Top State Hospitals
          </h1>
          <p className="w-[80%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            numquam, dicta impedit commodi earum quibusdam natus. Numquam est
            minima nisi sint repellendus vero doloribus, tempora nam omnis
            obcaecati, laudantium cum, dolor odio? Dignissimos at excepturi
            deleniti nobis, neque dolorem inventore consequatur. Exercitationem
            asperiores, blanditiis aperiam iusto officia voluptatum molestiae
            optio.
          </p>
          <SecondaryButton className="px-12 mt-4">Learn More</SecondaryButton>
        </div>
      </section>
      <section className="flex gap-4 w-[80%] mx-auto">
        <div className="w-[60%]">
          <div className="flex py-4 justify-between items-center border-b-2 border-[#65AD47] mb-4">
            <h2 className="text-2xl font-bold tracking-wide">
              Why Choose S8 Medical Equipment
            </h2>
            <div className="w-[100px] flex items-center justify-between gap-1">
              <div className="py-2">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="py-2">
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
              <div className="py-2">
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
            </div>
          </div>
          <p className="font-bold text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo atque
            molestias enim repellat dolores voluptatum, similique in asperiores
            doloribus animi provident illum ducimus accusantium dolorum iusto!
            Omnis numquam consequuntur odio impedit fugit maiores sunt,
            cupiditate cum laudantium amet quos itaque ab, nam beatae incidunt
            eveniet ratione soluta quis, tenetur hic.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ullam
            nihil esse eveniet provident quia cupiditate fugit laborum numquam
            enim, ut nobis reiciendis quod natus in. Maxime ipsam quam facilis
            iusto tempore perspiciatis nihil harum, dolorem eius incidunt neque
            illo quia non aspernatur, officia cupiditate minima! Maiores autem
            dolorem error?
          </p>
          <div className="grid grid-cols-2 gap-2 my-8">
            <div className="relative h-52 flex items-end justify-center">
              <Image
                src="/images/about-us-hospital.jpeg"
                fill
                style={{ objectFit: "cover" }}
                alt="About Us Sub Images"
                className="w-full h-full absolute top-0 left-0 z-40"
              />
              <div className="w-full h-full bg-black/40 z-50 absolute"></div>
              <h3 className="z-60 text-2xl text-white font-bold tracking-wide p-2">
                Hospital Ward
              </h3>
            </div>
            <div className="relative h-52 flex items-end justify-center">
              <Image
                src="/images/about-us-nurses.jpeg"
                fill
                style={{ objectFit: "cover" }}
                alt="About Us Sub Images"
                className="w-full h-full absolute top-0 left-0 z-40"
              />
              <div className="w-full h-full bg-black/40 z-50 absolute"></div>
              <h3 className="z-60 text-2xl text-white font-bold tracking-wide p-2">
                Qualified Staff
              </h3>
            </div>
            <div className="relative h-52 flex items-end justify-center">
              <Image
                src="/images/about-us-surgery.png"
                fill
                style={{ objectFit: "cover" }}
                alt="About Us Sub Images"
                className="w-full h-full absolute top-0 left-0 z-40"
              />
              <div className="w-full h-full bg-black/40 z-50 absolute"></div>
              <h3 className="z-60 text-2xl text-white font-bold tracking-wide p-2">
                Surgery Department
              </h3>
            </div>
            <div className="relative h-52 flex items-end justify-center">
              <Image
                src="/images/about-us-ct.jpeg"
                fill
                style={{ objectFit: "cover" }}
                alt="About Us Sub Images"
                className="w-full h-full absolute top-0 left-0 z-40"
              />
              <div className="w-full h-full bg-black/40 z-50 absolute"></div>
              <h3 className="z-60 text-2xl text-white font-bold tracking-wide p-2">
                CT Scan
              </h3>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <h2 className="text-2xl font-bold tracking-wide py-2">
              Insurances We Accept
            </h2>
            <hr className="w-full h-1 bg-[#65AD47] border border-[#65AD47] rounded-lg" />
            <div className="grid grid-cols-4 items-center gap-4">
              <Image
                src="/images/aetna-insurance.png"
                alt="Aetna Insurance"
                style={{ objectFit: "cover" }}
                className="relative"
                width={500}
                height={500}
              />
              <Image
                src="/images/bcbs-insurance.png"
                alt="BCBS Insurance"
                style={{ objectFit: "cover" }}
                className="relative"
                width={500}
                height={500}
              />
              <Image
                src="/images/cigna-insurance.jpg"
                alt="Cigna Insurance"
                style={{ objectFit: "cover" }}
                className="relative"
                width={500}
                height={500}
              />
              <Image
                src="/images/clover-insurance.png"
                alt="Clover Insurance"
                style={{ objectFit: "cover" }}
                className="relative"
                width={500}
                height={500}
              />
              <Image
                src="/images/humana-insurance.jpg"
                alt="Humana Insurance"
                style={{ objectFit: "cover" }}
                className="relative"
                width={500}
                height={500}
              />
              <Image
                src="/images/medicare-insurance.png"
                alt="Medicare Insurance"
                style={{ objectFit: "cover" }}
                className="relative"
                width={500}
                height={500}
              />
              <Image
                src="/images/uhc-insurance.jpg"
                alt="UHC Insurance"
                style={{ objectFit: "cover" }}
                className="relative"
                width={500}
                height={500}
              />
              <Image
                src="/images/wellcare-insurance.png"
                alt="Welcare Insurance"
                style={{ objectFit: "cover" }}
                className="relative"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex gap-4 flex-col my-8">
            <h2 className="text-2xl font-bold tracking-wide py-2">
              Quality and Safety
            </h2>
            <hr className="w-full h-1 bg-[#65AD47] border border-[#65AD47] rounded-lg" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt qui
              labore quidem nobis reprehenderit assumenda, voluptatem sit
              asperiores inventore alias nulla at iure est porro laboriosam
              blanditiis distinctio provident vero quo cum quod quos? Aut
              tenetur et, harum ut dolore provident fugiat blanditiis iusto
              vitae? Obcaecati labore impedit officiis asperiores?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus, quibusdam minima repudiandae at laborum hic minus
              obcaecati possimus vel, sint animi sapiente mollitia adipisci
              voluptatum facilis. Corporis vitae voluptate nisi repellendus!
              Nemo, quia sed reprehenderit corrupti repudiandae pariatur,
              asperiores sint optio deserunt at accusantium mollitia aliquam
              quaerat facere, corporis dolore.
            </p>
          </div>
        </div>
        <div className="w-[40%] py-2">
          <div className="p-2 border-t-8 border-[#65AD47]">
            <h3 className="text-3xl font-bold tracking-wide mb-4">Products</h3>
            <div className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-2 border rounded-lg p-4 shadow hover:shadow-lg transition relative"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-30 object-fit mb-4 rounded"
                  />
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <PrimaryButton className="absolute top-2 right-2">
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
          <div className="p-2 border-t-8 border-[#65AD47] mt-8">
            <h3 className="text-3xl font-bold tracking-wide mb-4">Services</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-2 flex flex-col gap-4">
                <div className="w-20 rounded-md bg-[#65AD47] p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16"
                  >
                    <path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold tracking-wide">
                  DME Equipments
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam porro tenetur maiores sapiente voluptatem maxime.
                  Harum quo incidunt unde minima culpa voluptates? Rem enim nam
                  itaque vitae maxime hic tempora atque animi mollitia officia
                  alias, quae est odio optio voluptates.
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
              <div className="p-2 flex flex-col gap-4">
                <div className="w-20 rounded-md bg-[#65AD47] p-2">
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
                    className="w-16 h-16"
                  >
                    <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
                    <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 13 6 6" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold tracking-wide">Caregivers</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam porro tenetur maiores sapiente voluptatem maxime.
                  Harum quo incidunt unde minima culpa voluptates? Rem enim nam
                  itaque vitae maxime hic tempora atque animi mollitia officia
                  alias, quae est odio optio voluptates.
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
          </div>
        </div>
      </section>
    </main>
  );
}
