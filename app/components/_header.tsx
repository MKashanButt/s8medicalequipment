import Image from "next/image";
import { PrimaryButton } from "./_button";

export default function Header() {
  return (
    <section className="absolute w-full top-0 left-0 z-10 bg-black/10">
      <div className="bg-[#65AD47] p-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center divide-x-2">
              <div className="w-[400px] text-white text-sm p-2 w-1/2">
                <p className="flex gap-2">
                  <b>Location:</b> 3155 Kearney St #170 Fremont, CA 94538
                </p>
              </div>
              <div className="w-[650px] text-white text-sm p-2 flex justify-between border-r-2">
                <p className="w-[250px] flex gap-2">
                  <b>Contact us:</b> +1 234 567 890
                </p>
                <p className="w-[300px] flex gap-2">
                  <b>Email:</b> info@s8medicalequipmentllc.com
                </p>
              </div>
            </div>
            <div className="w-[150px] flex items-center gap-1">
              <div className="p-2">
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
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="p-2">
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
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div className="p-2">
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
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <header className="flex w-full justify-between items-center py-4 text-white">
          <Image
            src="/images/logo.png"
            width={200}
            height={50}
            alt="company logo s8-medical-equipment"
          />
          <nav>
            <ul className="flex space-x-5 items-center">
              <li className="border-b-2 border-transparent hover:border-[#65AD47] p-2 cursor-pointer transition transition-ease-out">
                Home
              </li>
              <li className="border-b-2 border-transparent hover:border-[#65AD47] p-2 cursor-pointer transition transition-ease-out">
                Products
              </li>
              <li className="border-b-2 border-transparent hover:border-[#65AD47] p-2 cursor-pointer transition transition-ease-out">
                Services
              </li>
              <li className="border-b-2 border-transparent hover:border-[#65AD47] p-2 cursor-pointer transition transition-ease-out">
                News
              </li>
              <li className="border-b-2 border-transparent hover:border-[#65AD47] p-2 cursor-pointer transition transition-ease-out">
                About Us
              </li>
              <li>
                <PrimaryButton>Contact Us</PrimaryButton>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div></div>
    </section>
  );
}
