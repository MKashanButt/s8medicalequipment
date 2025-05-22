import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="w-[80%] mx-auto flex justify-between py-4 border-b border-[#65AD47]">
        <form
          action=""
          method="POST"
          className="flex bg-white rounded-md border-2 border-[#65AD47]"
        >
          <input
            type="email"
            name="email"
            id="email"
            className="w-[200px] p-2"
            placeholder="Enter Your Email"
          />
          <button className="w-[50px] flex items-center justify-center">
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
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
          </button>
        </form>
        <div className="w-[150px] flex items-center gap-1">
          <Link
            href="https://www.linkedin.com/company/s8squadmedical/"
            target="__blank"
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
          </Link>
          <Link
            href="https://www.facebook.com/s8squadequipment"
            target="__blank"
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
        </div>
      </div>
      <div className="flex w-[80%] mx-auto py-8">
        <div className="w-1/4 p-2">
          <Image
            src="/images/logo.png"
            width={200}
            height={50}
            alt="company logo s8-medical-equipment"
          />
          <p>
            Devoted to improving healthcare using cutting-edge, dependable
            medical technologies. We empower experts globally.
          </p>
        </div>
        <div className="w-1/4 p-2">
          <h3 className="text-2xl font-bold tracking-wide">Services</h3>
          <hr className="border border-[#65AD47] bg-[#65AD47] rounded-lg h-1 my-2" />
          <ul className="list-disc ml-4">
            <li>DME Equipments</li>
            <li>Caregivers</li>
          </ul>
        </div>
        <div className="w-1/4 p-2">
          <h3 className="text-2xl font-bold tracking-wide">Head Office</h3>
          <hr className="border border-[#65AD47] bg-[#65AD47] rounded-lg h-1 my-2" />
          <p className="mb-4">3155 Kearney St Suite # 170 Fremont, CA 94538</p>
          <p>
            <b>Mon-Thu:</b> 9:30 – 21:00
          </p>
          <p>
            <b>Fri:</b> 6:00 – 21:00
          </p>
          <p>
            <b>Sat:</b> 10:00 – 15:00
          </p>
        </div>
        <div className="w-1/4 p-2">
          <h3 className="text-2xl font-bold tracking-wide">Head Office</h3>
          <hr className="border border-[#65AD47] bg-[#65AD47] rounded-lg h-1 my-2" />
          <ul className="list-disc ml-4">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/products">
              <li>Products</li>
            </Link>
            <Link href="/about-us">
              <li>About Us</li>
            </Link>
            {/* <Link href="/"> */}
            <li>Contact Us</li>
            {/* </Link> */}
          </ul>
        </div>
      </div>
      <div className="p-2 text-center text-white bg-[#65AD47]">
        <p>
          Copyright <b>©</b> S8Medical Equipment LLC
        </p>
      </div>
    </footer>
  );
}
