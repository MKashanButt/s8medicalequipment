import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../components/_button";

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
      <section className="w-[80%] mx-auto py-4">
        <h2 className="text-4xl text-center mb-4">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="w-[80%] mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          temporibus quis hic voluptate velit nemo dignissimos quasi eligendi
          necessitatibus, voluptatibus ullam perferendis omnis aut odio quam nam
          provident perspiciatis dolores!
        </p>
      </section>
      <section className="w-[80%] py-4 flex gap-4 mx-auto">
        <div className="w-[40%] mx-auto border-b-2 border-[#65AD47]">
          <hr className="h-1 bg-[#65AD47] full border-[#65AD47] rounded-lg" />
          <h2 className="text-4xl font-bold tracking-wide py-4">
            Trending Products
          </h2>
          <hr className="h-1 bg-[#65AD47] full border-[#65AD47] rounded-lg" />
          <div className="grid grid-cols-2 gap-8 my-4">
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                ratione esse quos minima dolorem, optio ducimus nostrum labore
                reiciendis. Facilis.
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                ratione esse quos minima dolorem, optio ducimus nostrum labore
                reiciendis. Facilis.
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                ratione esse quos minima dolorem, optio ducimus nostrum labore
                reiciendis. Facilis.
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                ratione esse quos minima dolorem, optio ducimus nostrum labore
                reiciendis. Facilis.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam porro tenetur maiores sapiente voluptatem maxime.
                Harum quo incidunt unde minima culpa voluptates? Rem enim nam
                itaque vitae maxime hic tempora atque animi mollitia officia
                alias, quae est odio optio voluptates.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam porro tenetur maiores sapiente voluptatem maxime.
                Harum quo incidunt unde minima culpa voluptates? Rem enim nam
                itaque vitae maxime hic tempora atque animi mollitia officia
                alias, quae est odio optio voluptates.
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
              Lorem Ipsum
            </h4>
            <p className="text-xs my-2">Title</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              illum voluptatibus aut beatae impedit hic cumque quibusdam
              exercitationem deleniti debitis?
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
              Lorem Ipsum
            </h4>
            <p className="text-xs my-2">Title</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              illum voluptatibus aut beatae impedit hic cumque quibusdam
              exercitationem deleniti debitis?
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
              Lorem Ipsum
            </h4>
            <p className="text-xs my-2">Title</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              illum voluptatibus aut beatae impedit hic cumque quibusdam
              exercitationem deleniti debitis?
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
              Lorem Ipsum
            </h4>
            <p className="text-xs my-2">Title</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              illum voluptatibus aut beatae impedit hic cumque quibusdam
              exercitationem deleniti debitis?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
