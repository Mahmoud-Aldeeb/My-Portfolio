import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import Navbar from "@/components/NavbarServer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const currentTheme = cookieStore.get("theme")?.value || "dark";

  return (
    <html lang="en" className={currentTheme === "dark" ? "dark" : ""}>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        <Navbar currentTheme={currentTheme} />
        {children}
      </body>
    </html>
  );
}
