import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <article className="h-screen flex justify-center items-center">
      <div className="bg-background rounded-2xl shadow-lg border border-front border-opacity-20 p-6 flex flex-col items-center gap-y-2 w-[30vw] relative">
        <div
          className="-z-10 absolute-cover scale-90 bg-primary blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="-z-1 absolute-cover scale-90 bg-secondary animate-pulse blur-3xl" />
        <h1 className="text-primary text-7xl font-semibold">404</h1>
        <h2 className="text-front text-3xl font-black font-lato">
          Page Not Found
        </h2>
        <p className="text-center text-sm my-3 text-front text-opacity-70">
          We were not able to find the page you were looking for
        </p>
        <Link to="/" className="btn-1">
          Back to Homepage
        </Link>
      </div>
    </article>
  );
}
