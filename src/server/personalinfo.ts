"use server";

import { PersonalFormType } from "@/lib/types";
export const postPersonalData = async (data: FormData) => {
  try {
    const res = await fetch("http://127.0.0.1:8000/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log("Response from server:", result);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
