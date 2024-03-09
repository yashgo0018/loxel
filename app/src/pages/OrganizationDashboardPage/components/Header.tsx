import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="h-[30vh] mb-[20vh] relative flex flex-col p-page">
      <img
        src={dummyOrganization.imgUrl}
        alt={dummyOrganization.name}
        className="w-full h-full blur-3xl rounded-b-xl opacity-70"
      />

      <div className="translate-y-1/2 absolute bottom-0 flex items-center">
        <img
          className="border border-background rounded-full object-cover aspect-square w-[15vw]"
          src={dummyOrganization.imgUrl}
          alt={dummyOrganization.name}
        />

        <div className="pl-10 flex flex-col items-start gap-y-5">
          <h1 className="font-bold text-4xl truncate max-w-full">
            {dummyOrganization.name}
          </h1>

          <Link to={dummyOrganization.website} className="font-light">
            Website : <u>{dummyOrganization.website}</u>
          </Link>

          <p>Loxel Participant since 29 Dec 2022</p>
        </div>
      </div>
    </section>
  );
}

const dummyOrganization = {
  name: "Aptos | Production Blockchain",
  imgUrl:
    "https://img.capital.com/imgs/articles/1200x627x1/shutterstock_2201047041.jpg",
  website: "https://aptosfoundation.org/",
};
