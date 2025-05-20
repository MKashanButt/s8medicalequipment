import Image from "next/image";

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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            sapiente, beatae debitis perspiciatis quia ut cumque eius, eos
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
          <p className="mb-4">
            4096 N Highland St, Arlington VA 32101, USA info@profimed.com 800
            1234 56 78
          </p>
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
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
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
