import { Hanken_Grotesk } from "@next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const ResultSummaryComponent = () => {
  return <main className={`${hankenGrotesk.className}`}></main>;
};

export default ResultSummaryComponent;
