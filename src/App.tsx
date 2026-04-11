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
    <div className="parent-container min-h-screen p-5 flex flex-col justify-center items-center bg-slate-900 text-slate-500"> 
      <main className="bg-slate-800 rounded-lg grid grid-cols-1 auto-rows-min gap-5 p-5">
        <section>
          <div className="img-container">
            <img src={nftImage} className="rounded-md" aria-hidden="true" />
          </div>
        </section>
        <section className="grid gap-5">
          <h1 className="text-xl text-white font-bold">Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </section>
        <section className="flex justify-between">
          <div className="flex gap-2 items-center">
            <img src={iconEthereum} className="h-4" aria-hidden="true" />
            <p className="text-cyan-300 font-medium">0.041 ETH</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={iconClock} className="h-4" aria-hidden="true" />
            <p>3 days left</p>
          </div>
        </section>
        <hr />
        <section>
          <div className="flex gap-4 items-center">
            <img src={imgAvatar} className="h-10 border-2 border-slate-300 rounded-[50%]" aria-hidden="true" />
            <p>Creation of <span className="text-white">Jules Wyvern</span></p>
          </div>
        </section>
      </main>

      <footer className="attribution fixed bottom-0 m-5 text-center text-white font-light">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge"><span className="text-blue-500 font-medium">Frontend Mentor</span></a></p> 
        <p>Coded by <a href="#"><span className="text-blue-500 font-medium">Joshua Martinez</span></a></p>
      </footer>
    </div>
  )
}