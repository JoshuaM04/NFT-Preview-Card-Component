// @ts-ignore
import nftImage from "./assets/images/image-equilibrium.jpg";
// @ts-ignore
import iconClock from "./assets/images/icon-clock.svg";
// @ts-ignore
import iconEthereum from "./assets/images/icon-ethereum.svg";
// @ts-ignore
import imgAvatar from "./assets/images/image-avatar.png";

export default function App() {
  return (
    <div className="[ parent__container ] [ min-h-screen ] [ p-5 ] [ flex flex-col justify-center items-center ] [ bg-slate-900 ] [ text-slate-500 ]"> 
      <main className="[ bg-slate-800 ] [ rounded-lg ] [ grid grid-cols-1 auto-rows-min gap-5 ] [ p-5 ] [ w-[335px] h-[576px] ] [ ring-20 ring-gray-900 ] [ shadow-2xl/100 ]">
        <section>
          <div className="img__container">
            <img src={nftImage} className="rounded-md hover:cursor-pointer" aria-hidden="true" />
          </div>
        </section>
        <section className="grid gap-5">
          <h1 className="[ text-xl text-white hover:text-cyan-300 ] [ font-bold ]"><a href="#">Equilibrium #3429</a></h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </section>
        <section className="flex justify-between">
          <div className="flex items-center gap-2">
            <img src={iconEthereum} className="h-4" aria-hidden="true" />
            <p className="[ text-cyan-300 ] [ font-medium ]">0.041 ETH</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={iconClock} className="h-4" aria-hidden="true" />
            <p>3 days left</p>
          </div>
        </section>
        <hr />
        <section>
          <div className="flex items-center gap-4">
            <img src={imgAvatar} className="[ h-10 ] [ border-2 border-slate-300 rounded-[50%] ]" aria-hidden="true" />
            <p>Creation of <a href="#" className="text-white hover:text-cyan-300">Jules Wyvern</a></p>
          </div>
        </section>
      </main>

      <footer className="[ attribution ] [ fixed bottom-0 ] [ m-5 ] [ text-center text-white ] [ font-light ]">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge"><span className="[ text-blue-500 ] [ font-medium ]">Frontend Mentor</span></a></p> 
        <p>Coded by <a href="#"><span className="[ text-blue-500 ] [ font-medium ]">Joshua Martinez</span></a></p>
      </footer>
    </div>
  )
}