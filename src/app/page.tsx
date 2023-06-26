import Image from "next/image";
import Carousal from "../../components/carousal";
import Slider from "../../components/Slider";

export default function Home() {
  return (
    <main className="  ">
      <nav className="w-full p-10 flex flex-row justify-between bg-slate-100">
        <div className="text-2xl font-semibold">Blossom Flora</div>
        <div className="flex flex-row gap-7">
          <div className="text-xl">Something</div>
          <div className="text-xl">Something</div>
          <div className="text-xl">Something</div>
          <div className="text-xl">Something</div>
        </div>
      </nav>

      <section id="landing" className=" min-w-full h-[100%]">
        <Carousal/>
        <Slider />


        <div className="flex items-center">
          
        </div>
      </section>
    </main>
  );
}
