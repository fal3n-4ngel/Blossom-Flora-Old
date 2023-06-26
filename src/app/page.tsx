"use client";
import Slider from "@/components/Slider";
import Catalog from "../components/Catalog";
import Thumbnails from "@/components/Thumbnails";

export default function Home() {
  return (
    <main className=" ">
      <nav className="flex w-full flex-col p-10 justify-between bg-slate-100 rounded-[10px]">
        <div className="flex w-full text-6xl text-center items-center justify-center font-caslon">
          Blossom Flora
        </div>
        <div className="flex w-full text-2xl font-thin items-center text-center justify-center gap-4 mt-3 ">
          <div className="hover:font-medium hover:cursor-pointer transition-all">HOME</div>
          <div className="hover:font-medium hover:cursor-pointer transition-all">SHOP</div>
          <div className="hover:font-medium hover:cursor-pointer transition-all">SERVICES</div>
          <div className="hover:font-medium hover:cursor-pointer transition-all">CONTACT US</div>
        </div>
      </nav>
      <Slider />


      <section id="catalog" className="mt-12">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-semibold">Best Sellers</h1>
          <div className="font-light my-5 text-sm">VIEW ALL</div>
          <div className=" flex w-full  my-10 justify-center gap-10 flex-wrap">
            <Catalog
              url="/pexels-enes-çelik-7748484.jpg"
              name="Item name"
              description="Here comes the description"
            />
            <Catalog
              url="/pexels-enes-çelik-7748484.jpg"
              name="Item name"
              description="Here comes the description"
            />
            <Catalog
              url="/pexels-enes-çelik-7748484.jpg"
              name="Item name"
              description="Here comes the description"
            />
            <Catalog
              url="/pexels-enes-çelik-7748484.jpg"
              name="Item name"
              description="Here comes the description"
            />
          </div>
        </div>
      </section>
      <section id="about" className="w-full">
        <div>dhf</div>
        <div className="flex justify-center w-[50%] h-full items-center">
          <Thumbnails/>
        </div>
      </section>
    </main>
  );
}
