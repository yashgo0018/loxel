import CommonFormInput from "../../common/Forms/CommonFormInput";
import Pass from "../../common/Pass";

export default function BuyPassPage() {
  return (
    <article className="py-24 h-screen flex items-center">
      <div className="absolute-cover bg-opacity-80 blur-2xl">
        <video
          src="/gradient.mp4"
          autoPlay
          loop
          muted
          className="absolute-cover object-cover blur-3xl"
        />
        <article className="bg-primary absolute-cover mix-blend-hue" />
      </div>
      <div className="border bg-background z-10 border-primary/20 p-8 rounded-lg w-1/4 flex flex-col gap-y-4 mx-auto">
        <p className="text-lg border-b pb-1 border-opacity-40 border-front">
          Pass - only for you
        </p>
        <Pass data={dummyPass} className="w-[20vw]" />
        <CommonFormInput name="name" placeholder="Enter your name" />
        <div className="flex justify-between">
          <p>Price: $20 </p>
          <button className="px-6 rounded-md py-1 border border-primary">
            Buy
          </button>
        </div>
      </div>
    </article>
  );
}

const dummyPass =   {
  passName: "Youtube Advanced",
  userName: "Riya Jain",
  colors: {
    primary: "#101010",
    secondary: "#b00b1f",
    text: { primary: "#ffffff", secondary: "#fefefe" },
  },
  textures: { primary: "america", secondary: "glass" },
  logo: {
    url: "https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg",
  },
  expiry: 1830066943000,
  usage: { total: 10, used: 6 },
} as const;
