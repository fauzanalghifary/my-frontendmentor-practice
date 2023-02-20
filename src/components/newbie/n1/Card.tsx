import Image from "next/image";
import { hankenGroteskBold } from "@/../public/fonts";

interface CardProps {
  text: string;
  image: string;
  bg: string;
  textColor: string;
}

const Card = ({ text, image, bg, textColor }: CardProps) => {
  return (
    <div
      className={`${bg} flex flex-row items-center justify-between rounded-xl p-4`}
    >
      <div className="flex flex-row space-x-3">
        <Image width={20} height={20} src={image} alt="reaction-icon" />
        <h3 className={`${textColor}`}>{text}</h3>
      </div>
      <h2 className="text-n1DarkNavy">
        <span className={`${hankenGroteskBold.className}`}>80 </span>
        <span className="opacity-50">/100</span>
      </h2>
    </div>
  );
};

export default Card;
