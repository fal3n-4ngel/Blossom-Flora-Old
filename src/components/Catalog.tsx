import React from "react";

type catalogProps = {
  url: string;
  name: string;
  description: string;
}

function Catalog(props: catalogProps) {
  return (
    <div className="relative group w-[400px] min-w-[400px] min-h-[400px] h-[400px] rounded-[30px] overflow-hidden">
      <img
        src={props.url}
        alt=""
        className="group-hover:scale-150 object-cover h-full w-full transition-all duration-500"
      />
      <div className="p-3 absolute left-0 right-0 mx-auto bottom-0 bg-white/70 group-hover:bg-black w-fulls text-center transition-all duration-500">
        <h2 className="opacity-100 group-hover:text-white text-xl font-semibold transition-all duration-500">{props.name}</h2>
        <p className="opacity-100 group-hover:text-white text-sm transition-all duration-500">{props.description}</p>
      </div>
    </div>
  );
}

export default Catalog;
