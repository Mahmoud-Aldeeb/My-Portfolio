"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setTheme(currentTheme) {
  const cookieStore = cookies();
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  cookieStore.set("theme", newTheme, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 365,
  });

  redirect("/");
}
