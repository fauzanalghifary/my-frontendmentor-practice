import Image from "next/image";

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
        <Image src={image} alt="reaction-icon" />
        <h3 className={`${textColor}`}>{text}</h3>
      </div>
      <h2 className="text-n1DarkNavy">
        <span className="font-bold">80</span> / 100
      </h2>
    </div>
  );
};

export default Card;
