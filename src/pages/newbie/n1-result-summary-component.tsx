import {
  hankenGrotesk,
  hankenGroteskBold,
  hankenGroteskExtraBold,
} from "@/../public/fonts";
import Card from "@/components/newbie/n1/Card";

import data from "@/../public/newbie/n1/data.json";

const ResultSummaryComponent = () => {
  const classBg = [
    "bg-n1LightRed",
    "bg-n1OrangeyYellow",
    "bg-n1GreenTeal",
    "bg-n1CobaltBlue",
  ];

  const classText = [
    "text-n1LightRed100",
    "text-n1OrangeyYellow100",
    "text-n1GreenTeal100",
    "text-n1CobaltBlue100",
  ];

  return (
    <main
      className={`${hankenGrotesk.className} font-hankenGrotesk flex h-screen w-screen flex-col items-center justify-start bg-n1VeryLightBlue md:justify-center`}
    >
      <section className="flex h-screen w-screen flex-col items-center justify-start bg-white shadow-sm shadow-n1PersianBlue md:h-[512px] md:w-[738px] md:flex-row md:justify-center md:rounded-4xl">
        {/* LEFT CONTAINER */}
        <div className="mb-6 flex h-full w-full flex-col items-center justify-center rounded-b-4xl bg-gradient-to-b from-n1LightSlateBlue to-n1LightRoyalBlue px-14 pt-4 pb-10 text-white md:mb-0 md:max-w-sm md:rounded-4xl md:pb-0">
          <h3 className="mb-12 text-lg text-n1LightLavender md:mb-24 md:text-2xl">
            Your Result
          </h3>
          {/* CIRCLE CONTAINER */}
          <div className="relative mb-11 py-0 text-center md:mb-20">
            <h2
              className={`${hankenGroteskExtraBold.className} relative z-30 text-[56px] md:text-7xl`}
            >
              76
            </h2>
            <h4 className="relative z-30 text-n1LightLavender md:text-lg">
              of 100
            </h4>
            <div className="absolute top-1/2 left-1/2 z-10 h-36 w-36 -translate-y-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-b from-n1VioletBlue to-n1PersianBlue md:mb-20 md:h-52 md:w-52"></div>
          </div>
          <h3
            className={`${hankenGroteskBold.className} mb-2 text-2xl md:mb-3 md:text-3xl`}
          >
            Great
          </h3>
          <p className="text-center text-n1LightLavender">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
        {/* RIGHT CONTAINER */}
        <div className="mb-7 flex h-full w-full flex-col items-start justify-start gap-y-6 self-center bg-white px-8 md:mb-0 md:max-w-sm md:gap-y-0 md:rounded-4xl md:px-10 md:pt-7">
          <h3 className={`text-lg ${hankenGroteskBold.className} md:mb-7`}>
            Summary
          </h3>
          <div className="w-full space-y-4 md:mb-10">
            {data.map((item, i) => (
              <Card
                key={item.icon}
                text={item.category}
                image={item.icon}
                bg={classBg[i]}
                textColor={classText[i]}
              />
            ))}
          </div>
          <button className="w-full rounded-[128px] bg-n1DarkNavy py-4 text-lg font-bold text-white hover:bg-gradient-to-b hover:from-n1LightSlateBlue hover:to-n1LightRoyalBlue md:mb-11">
            Continue
          </button>
        </div>
      </section>
    </main>
  );
};

export default ResultSummaryComponent;
