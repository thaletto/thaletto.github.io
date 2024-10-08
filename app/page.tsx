import { acornSemiBold, acornRegular } from "@/lib/fonts/font";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import Skills from "@/components/Skills";
import Certification from "@/components/Certification/Certification";

export default function Home() {
  return (
    <main className="h-full mt-16">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center">
        <p
          className={
            acornSemiBold.className +
            " text-4xl font-bold md:text-7xl text-customGreen text-balance"
          }
        >
          Hi, I&apos;m Laxman.
        </p>
        <p
          className={
            acornRegular.className +
            " text-2xl md:text-4xl text-customGreen text-balance"
          }
        >
          A Software Developer.
        </p>
      </div>
      <AboutMe />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mx-4 sm:mx-8 mb-8 gap-6 mt-16">
        <Experience />
        <Education />
        <Skills />
        <Certification />
      </div>
    </main>
  );
}
