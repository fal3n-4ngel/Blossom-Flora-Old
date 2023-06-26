import Catalog from "../components/Catalog";
import Carousal from "../components/carousal";

export default function Home() {
  return (
    <main className=" w-[90%] mx-auto ">
      <nav className="w-full p-10 flex flex-row justify-between bg-slate-100 rounded-[10px]">
        <div className="text-2xl font-semibold">Blossom Flora</div>
        <div className="flex flex-row gap-7">
          <div className="text-xl">Something</div>
          <div className="text-xl">Something</div>
          <div className="text-xl">Something</div>
          <div className="text-xl">Something</div>
        </div>
      </nav>

      <section id="landing" className=" min-w-full h-[100%] mt-5">
        <Carousal/>
        <div className="mt-20 w-[90%] gap-3 mx-auto flex items-center justify-center">
          <div>
            <div className="bg-black h-52 w-52 rounded-3xl object-cover overflow-hidden">
              <img
                className="hover:scale-125 transition-all duration-300"
                src="/pexels-brigita-korsakiene-7752204.jpg"
                alt="image slide 1"
              />
            </div>
            <div className="text-center text-2xl">Flower</div>
          </div>
          <div>
            <div className="bg-black h-52 w-52 rounded-3xl object-cover overflow-hidden">
              <img
                className="hover:scale-125 transition-all duration-300"
                src="/pexels-brigita-korsakiene-7752204.jpg"
                alt="image slide 1"
              />
            </div>
            <div className="text-center text-2xl">Flower</div>
          </div>
          <div>
            <div className="bg-black h-52 w-52 rounded-3xl object-cover overflow-hidden">
              <img
                className="hover:scale-125 transition-all duration-300"
                src="/pexels-brigita-korsakiene-7752204.jpg"
                alt="image slide 1"
              />
            </div>
            <div className="text-center text-2xl">Flower</div>
          </div>
          <div>
            <div className="bg-black h-52 w-52 rounded-3xl object-cover overflow-hidden">
              <img
                className="hover:scale-125 transition-all duration-300"
                src="/pexels-brigita-korsakiene-7752204.jpg"
                alt="image slide 1"
              />
            </div>
            <div className="text-center text-2xl">Flower</div>
          </div>
          <div>
            <div className="bg-black h-52 w-52 rounded-3xl object-cover overflow-hidden">
              <img
                className="hover:scale-125 transition-all duration-300"
                src="/pexels-brigita-korsakiene-7752204.jpg"
                alt="image slide 1"
              />
            </div>
            <div className="text-center text-2xl">Flower</div>
          </div>
          <div>
            <div className="bg-black h-52 w-52 rounded-3xl object-cover overflow-hidden">
              <img
                className="hover:scale-125 transition-all duration-300"
                src="/pexels-brigita-korsakiene-7752204.jpg"
                alt="image slide 1"
              />
            </div>
            <div className="text-center text-2xl">Flower</div>
          </div>
        </div>
      </section>
      <section id="catalog" className="mt-12">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-semibold">Item 1</h1>
          <p className="text-xl">Here comes a small description</p>
          <div className="w-full h-[100vh] mt-5 flex justify-center gap-10 flex-wrap">
            <Catalog url="/pexels-enes-çelik-7748484.jpg" name="Item name" description="Here comes the description"/>
            <Catalog url="/pexels-enes-çelik-7748484.jpg" name="Item name" description="Here comes the description"/>
            <Catalog url="/pexels-enes-çelik-7748484.jpg" name="Item name" description="Here comes the description"/>
          </div>
        </div>
      </section>
    </main>
  );
}
