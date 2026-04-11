// @ts-ignore
import nftImage from "./assets/images/image-equilibrium.jpg";

export default function App() {
  return (
    <div className="parent-container min-h-screen p-5 flex flex-col justify-center items-center"> 
      <main>
        <section>
          <div className="img-container">
            <img src={nftImage} aria-hidden="true" />
          </div>
        </section>
        <section>
          Equilibrium #3429
          Our Equilibrium collection promotes balance and calm.
        </section>
        <section>
          0.041 ETH
          3 days left
        </section>
        <section>
          Creation of Jules Wyvern
        </section>
      </main>
      
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  )
}