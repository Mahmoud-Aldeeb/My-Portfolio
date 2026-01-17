import About from "@/components/About";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const currentTheme = cookieStore.get("theme")?.value || "light";

  return (
    <>
      <Header />
      <About />
      <Services currentTheme={currentTheme} />
      <Work currentTheme={currentTheme} />
      <Contact currentTheme={currentTheme} />
      <Footer currentTheme={currentTheme} />
    </>
  );
}
