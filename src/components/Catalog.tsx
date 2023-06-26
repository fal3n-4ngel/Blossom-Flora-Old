import React from "react";

type catalogProps = {
  url: string;
  name: string;
  description: string;
}

function Catalog(props: catalogProps) {
  return (
    <div className="relative w-[400px] min-w-[400px] min-h-[400px] h-[400px] rounded-[30px] overflow-hidden">
      <img
        src={props.url}
        alt=""
        className="object-cover h-full w-full "
      />
      <div className="border-2 absolute left-0 right-0 mx-auto bottom-0 bg-white/70 w-full p-3 text-center">
        <h2 className="opacity-100 text-xl font-semibold">{props.name}</h2>
        <p className="opacity-100 text-sm">{props.description}</p>
      </div>
    </div>
  );
}

export default Catalog;
