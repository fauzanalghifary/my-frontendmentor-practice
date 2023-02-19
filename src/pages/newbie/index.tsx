import Link from "next/link";

const Newbie = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Link className="text-cyan-300" href="/newbie/result-summary-component">
        Result Summary Component
      </Link>
    </div>
  );
};

export default Newbie;
