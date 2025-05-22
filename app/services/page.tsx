import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../components/_button";
import Link from "next/link";

export default function Services() {
  return (
    <main>
      <section className="flex relative h-screen">
        <Image
          src="/images/services-hero.jpeg"
          className="absolute top-0 left-0 z-40"
          fill
          alt="About Us Section Hero Hospital Image"
        />
        <div className="flex gap-4 flex-col bg-black/50 z-40 w-full h-full items-center justify-center text-white text-center pt-28 select-none">
          <h1 className="text-6xl font-bold tracking-wide">
            Comprehensive Medical Solutions
          </h1>
          <p className="w-[80%] mx-auto">
            At S8 Medical Equipments, we offer complete healthcare solutions
            rather than simply equipment supply. We are your go-to source for
            high-quality service, from equipment setup and consulting to
            training, upkeep, and post-purchase assistance. We guarantee smooth
            integration and dependable performance at every stage, whether for
            clinics, hospitals, or home care agencies.
          </p>
          <SecondaryButton className="px-12 mt-4">Learn More</SecondaryButton>
        </div>
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
          <h1 className="text-[#65AD47] font-bold text-2xl">About Us</h1>
          <p>
            From product selection and procurement to installation, training,
            and continuing technical support, we offer complete end-to-end
            solutions that address every phase of the healthcare equipment
            lifecycle. Our seamless service structure is designed to guarantee
            optimum efficiency and less downtime.
          </p>
          <Link href="/about-us">
            <PrimaryButton>Learn More</PrimaryButton>
          </Link>
        </div>
        <div className="flex flex-col gap-4 w-1/3 px-4">
          <h1 className="text-[#65AD47] font-bold text-2xl flex gap-2">
            Emergency Cases
          </h1>
          <p className="items-center text-3xl flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-8"
            >
              <path d="M13 2a9 9 0 0 1 9 9" />
              <path d="M13 6a5 5 0 0 1 5 5" />
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            +1 (510)-573-1931
          </p>
          <p>
            We are only a phone call away if you need medical equipment
            immediately. Call S8 Medical Equipments at +1 (510)-573-1931, 24/7,
            for prompt assistance and dependable support whenever you need it.
          </p>
        </div>
      </section>
      <section className="h-screen py-4 relative flex">
        <Image
          src="/images/services-banner.jpg"
          alt="doctor section image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-screen absolute left-0 top-0 z-0"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black/60 z-index-40"></div>
        <div className="w-[80%] mx-auto flex items-center justify-between z-50 relative text-white">
          <div className="flex flex-col gap-8 w-1/2">
            <Image
              src="/images/logo.png"
              alt="Company Logo S8Medical"
              width={200}
              height={100}
            />
            <h2 className="text-4xl font-bold">
              Welcome To Our S8 Medical Equipment!
            </h2>
            <p>
              We at S8 Medical Equipments provide a broad range of medical
              solutions designed to satisfy the demands of contemporary
              healthcare. Our services are based on safety, performance, and
              long-term dependability, and range from premium Durable Medical
              Equipment (DME) and caregiver support tools to cutting-edge
              diagnostic instruments and clinic-grade machinery.
            </p>
            <p>
              Our staff provides professional advice, seamless assistance, and
              equipment that is trusted by experts across the country,
              regardless of whether you are a hospital, clinic, or home-care
              provider. We empower, train, and assist in addition to providing.
            </p>
            <SecondaryButton>Get In Touch</SecondaryButton>
          </div>
        </div>
      </section>
      <section className="w-[80%] mx-auto py-4">
        <h2 className="text-4xl text-center mb-4 font-bold tracking-wide">
          The professionals trust it. Innovation Drives Us
        </h2>
        <p className="w-[80%] mx-auto text-center">
          Discover our most sought-after medical devices and vital healthcare
          offerings, all of which are made to provide accuracy, dependability,
          and assistance when it counts most. We can assist you with improving
          your clinic or increasing the scope of treatment you can provide.
        </p>
      </section>
      <section className="w-[80%] py-4 flex gap-4 mx-auto">
        <div className="w-[40%] mx-auto border-b-2 border-[#65AD47]">
          <hr className="h-1 bg-[#65AD47] full border-[#65AD47] rounded-lg" />
          <h2 className="text-center text-4xl font-bold tracking-wide py-4">
            Trending Products
          </h2>
          <hr className="h-1 bg-[#65AD47] full border-[#65AD47] rounded-lg" />
          <div className="grid grid-cols-1 gap-8 my-4">
            <div className="relative flex flex-col items-center justify-center">
              <Image
                src="/products/wheelchairs.jpg"
                width={100}
                height={100}
                quality={100}
                style={{ objectFit: "contain" }}
                alt="wheelchairs product image"
                className="z-40"
              />
              <h4 className="z-60 text-lg tracking-wide font-bold tracking-wide">
                Wheelchairs
              </h4>
              <p className="text-center text-sm">
                Designed to be independent, comfortable, and mobile. Sturdy,
                lightweight, and designed for daily use.
              </p>
              <PrimaryButton className="w-full mt-4">Learn More</PrimaryButton>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <Image
                src="/products/knee-braces.jpg"
                width={100}
                height={100}
                quality={100}
                style={{ objectFit: "contain" }}
                alt="wheelchairs product image"
                className="z-40"
              />
              <h4 className="z-60 text-lg tracking-wide font-bold tracking-wide">
                Knee Braces
              </h4>
              <p className="text-center text-sm">
                Whether you're recuperating or continuing to be active, keep
                your joints stable, supported, and protected.
              </p>
              <PrimaryButton className="w-full mt-4">Learn More</PrimaryButton>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <Image
                src="/products/cgm-monitors.jpg"
                width={130}
                height={130}
                quality={100}
                style={{ objectFit: "contain" }}
                alt="wheelchairs product image"
                className="z-40"
              />
              <h4 className="z-60 text-lg tracking-wide font-bold tracking-wide">
                CGM Monitors
              </h4>
              <p className="text-center text-sm">
                Accurately monitor blood glucose levels in real time. Improve
                your diabetes treatment by using more intelligent monitoring.
              </p>
              <PrimaryButton className="w-full mt-4">Learn More</PrimaryButton>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <Image
                src="/products/tense-unit.jpg"
                width={90}
                height={90}
                quality={100}
                style={{ objectFit: "contain" }}
                alt="wheelchairs product image"
                className="z-40"
              />
              <h4 className="z-60 text-lg tracking-wide font-bold tracking-wide">
                Tense Unit
              </h4>
              <p className="text-center text-sm">
                At your fingers is portable pain alleviation. Use scientifically
                proven technology to address both acute and chronic pain.
              </p>
              <PrimaryButton className="w-full mt-4">Learn More</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="w-[60%]">
          <hr className="h-1 bg-[#65AD47] full border-[#65AD47] rounded-lg" />
          <div className="flex flex-col gap-4 flex flex-col">
            <div className="p-2 flex flex-col gap-4">
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
              <h2 className="text-4xl font-bold tracking-wide">
                DME Equipments
              </h2>
              <p>
                In order to assist patients' long-term care, rehabilitation, and
                enhanced quality of life at home or in clinical settings, S8
                Medical Equipments offers a wide selection of Durable Medical
                Equipment (DME).
              </p>
              <p>
                We guarantee that every product satisfies stringent safety
                regulations and is supported by knowledgeable support and
                maintenance services, whether for individual patients or
                healthcare facilities. You can rely on S8 to provide equipment
                that works when it counts most.
              </p>
              <PrimaryButton className="mt-3">
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
                Whether for individual patients or medical institutions, we
                promise that every product meets strict safety standards and is
                backed by competent support and maintenance services.
              </p>
              <p>
                From ergonomic lifting aids and mobility tools to monitoring
                systems and daily living support products, our caregiver-focused
                solutions are designed to reduce strain, enhance safety, and
                improve the overall caregiving experience. We’re here to empower
                those who care for others.
              </p>
              <PrimaryButton className="mt-3">
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
