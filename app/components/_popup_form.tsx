"use client";

import { SecondaryButton } from "./_button";

type PopupDialogProps = {
  id: string;
  onClose: () => void;
};

export default function PopupForm({ id, onClose }: PopupDialogProps) {
  return (
    <div
      className="hidden w-full h-screen absolute top-0 left-0 bg-black/60 flex items-center justify-center"
      id={id}
    >
      <div className="relative bg-[#65AD47] p-2 rounded-sm w-[60%]">
        <button
          className="absolute right-4 top-4 py-1 px-3 cursor-pointer rounded-2xl bg-white"
          onClick={onClose}
        >
          X
        </button>
        <form action="" method="post" className="py-2 w-full md:w-2/3 mx-auto">
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl text-white text-center">
            Check Your Qualification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
            {/* Form Fields */}
            {[
              { id: "first_name", label: "First Name", type: "text" },
              { id: "last_name", label: "Last Name", type: "text" },
              { id: "gender", label: "Gender", type: "text" },
              { id: "street_address", label: "Street Address", type: "text" },
              { id: "city", label: "City", type: "text" },
              { id: "state", label: "State", type: "text" },
              { id: "zip", label: "Zip", type: "text" },
              { id: "phone_no", label: "Phone No", type: "tel" },
              { id: "dob", label: "Date of Birth", type: "date" },
              {
                id: "best_time_to_contact",
                label: "Best Time To Contact",
                type: "text",
              },
            ].map((field) => (
              <div
                key={field.id}
                className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center"
              >
                <label
                  htmlFor={field.id}
                  className="w-full md:w-1/3 text-white text-sm md:text-base"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.id}
                  id={field.id}
                  placeholder={field.label}
                  className="w-full md:w-2/3 bg-white border-2 border-[#65AD47] rounded-md p-2 text-sm md:text-base"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-start text-white text-sm md:text-base">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              className="mt-1"
            />
            <span>
              By tapping the "Submit" button, I expressly endorse S8 Medical
              Equipment to call me or send me recorded messages or messages
              about their Supplies, or other Clinical things using electronic
              advancement to my telephone/cell number I entered already. I
              understand that I am not supposed to give my consent as a
              condition of any purchase.
            </span>
          </div>
          <div className="flex justify-center mt-6">
            <SecondaryButton className="w-full md:w-2/3 hover:bg-white hover:border-white hover:text-[#65AD47]">
              See If I Qualify
            </SecondaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}
