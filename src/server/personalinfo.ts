"use server";

import { PersonalFormType } from "@/lib/types";

export const postPersonalData = async (data: FormData) => {
  const response = await fetch("http://127.0.0.1:8000/form", {
    method: "POST",
    body: data,
  });
  const result = await response.json();
  console.log("result", result);
};
