"use client";

import { FormEvent } from "react";
import { SecondaryButton } from "./_button";

type PopupDialogProps = {
  id: string;
  onClose: () => void;
};

export default function PopupForm({ id, onClose }: PopupDialogProps) {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: Record<string, any> = {};

    formData.forEach((value, key) => {
      if (key !== "consent") {
        data[key] = value;
      }
    });

    try {
      const res = await fetch(
        "https://healthmedneeds.com/api/s8-medical-equipment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();
      console.log(result);
      console.log("Submitting:", data);

      if (result.success) {
        alert("Form submitted successfully!");
        onClose();
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Network error occurred.");
    }
  };
  return (
    <div
      className="hidden w-full h-screen fixed z-100 top-0 left-0 bg-black/60 flex items-center justify-center"
      id={id}
    >
      <div className="relative bg-[#65AD47] p-2 rounded-sm w-[60%]">
        <button
          className="absolute right-4 top-4 py-1 px-3 cursor-pointer rounded-2xl bg-white"
          onClick={onClose}
        >
          X
        </button>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="py-2 w-full md:w-2/3 mx-auto"
        >
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl text-white text-center">
            Check Your Qualification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
            {/* Form Fields */}
            {[
              { id: "fname", label: "First Name", type: "text" },
              { id: "lname", label: "Last Name", type: "text" },
              { id: "zip_code", label: "Zip Code", type: "text" },
              { id: "phone", label: "Phone", type: "text" },
              { id: "dob", label: "DOB", type: "date" },
              { id: "message", label: "Message", type: "text" },
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
