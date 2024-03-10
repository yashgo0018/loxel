export default function Hero() {
  return (
    <section className="h-screen pt-32 flex flex-col items-center relative">
      <img
        alt="pyramid"
        src="/images/pyramid.png"
        className="w-1/3 animate-[hero-pyramid-float_8000ms_infinite]"
      />
      <div className="overflow-hidden absolute top-1/4 -translate-y-1/2 z-1 text-primary mix-blend-difference font-black text-[13vw] left-1/2 -translate-x-1/2">
        <p className="opacity-0">A</p>
        <div className="animate-[hero-text_25000ms_infinite] after:animate-[hero-text_25000ms_infinite]" />
      </div>

      <div className="text-primary mt-14 text-xl text-center">
        Loxel Brings it all together
        <br />
        Streamline your customer loyalty / rewards system today!
      </div>

      <p className="text-sm mt-8 text-center text-front/60">
        Loxel seamlessly onboards your users to Web3
        <br />
        Leverage the power of AI to reward your most valuable consumers
      </p>
    </section>
  );
}
