import Link from "next/link";

const Newbie = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black">
      <Link
        className="text-cyan-300"
        href="/newbie/n1-result-summary-component"
      >
        Result Summary Component
      </Link>
      <Link
        className="text-cyan-300"
        href="/newbie/n2-product-preview-card-component"
      >
        Product Preview Card Component
      </Link>
      <Link
        className="text-cyan-300"
        href="/newbie/n3-skilled-elearning-landing-page"
      >
        Skilled Elearning Landing Page
      </Link>
    </div>
  );
};

export default Newbie;
