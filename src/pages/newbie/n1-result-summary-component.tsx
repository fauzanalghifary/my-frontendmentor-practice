import { Hanken_Grotesk } from "@next/font/google";
import Card from "@/components/newbie/n1/Card";
import reaction from "@/../public/n1/images/icon-reaction.svg";
import memory from "@/../public/n1/images/icon-memory.svg";
import verbal from "@/../public/n1/images/icon-verbal.svg";
import visual from "@/../public/n1/images/icon-visual.svg";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hankenGrotesk",
  weight: ["500", "700", "800"],
});

const ResultSummaryComponent = () => {
  return (
    <main
      className={`${hankenGrotesk.className} font-hankenGrotesk flex h-screen w-screen flex-col items-center justify-start bg-n1VeryLightBlue md:justify-center`}
    >
      <section
        className={`${hankenGrotesk.className} flex h-screen w-screen flex-col items-center justify-start bg-white md:h-[512px] md:w-[738px] md:flex-row md:justify-center md:rounded-4xl`}
      >
        {/* LEFT CONTAINER */}
        <div className="mb-6 flex h-full w-full flex-col items-center justify-center rounded-b-4xl bg-gradient-to-b from-n1LightSlateBlue to-n1LightRoyalBlue px-14 pt-4 pb-10 text-white md:mb-0 md:max-w-sm md:rounded-4xl md:pb-0">
          <h3 className="mb-12 text-lg text-n1LightLavender md:mb-24 md:text-2xl">
            Your Result
          </h3>
          {/* CIRCLE CONTAINER */}
          <div className="relative mb-11 py-0 text-center md:mb-20">
            <h2 className="relative z-30 text-[56px] font-extrabold md:text-7xl">
              76
            </h2>
            <h4 className="relative z-30 text-n1LightLavender md:text-lg">
              of 100
            </h4>
            <div className="absolute top-1/2 left-1/2 z-10 h-36 w-36 -translate-y-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-b from-n1VioletBlue to-n1PersianBlue md:mb-20 md:h-52 md:w-52"></div>
          </div>
          <h3 className="mb-2 text-2xl md:mb-3">Great</h3>
          <p className="text-center text-n1LightLavender">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
        {/* RIGHT CONTAINER */}
        <div className="flex h-full w-full flex-col items-start justify-start space-y-6 bg-white px-8 md:max-w-sm md:rounded-4xl md:px-10 md:pt-7">
          <h3 className="text-lg font-bold">Summary</h3>
          <div className="w-full space-y-4">
            <Card
              text="Reaction"
              image={reaction}
              bg="bg-n1LightRed"
              textColor="text-n1LightRed100"
            />
            <Card
              text="Memory"
              image={memory}
              bg="bg-n1OrangeyYellow"
              textColor="text-n1OrangeyYellow100"
            />
            <Card
              text="Verbal"
              image={verbal}
              bg="bg-n1GreenTeal"
              textColor="text-n1GreenTeal100"
            />
            <Card
              text="Visual"
              image={visual}
              bg="bg-n1CobaltBlue"
              textColor="text-n1CobaltBlue100"
            />
          </div>
          <button className="w-full rounded-[128px] bg-n1DarkNavy py-4 text-lg font-bold text-white">
            Continue
          </button>
        </div>
      </section>
    </main>
  );
};

export default ResultSummaryComponent;
