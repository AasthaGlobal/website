import Navbar from "./components/Navbar/navbar";

export default function Home() {
  return (
    <main className="home">

      <Navbar />

      <section className="hero">

        <div className="glow glowPurple"></div>

        <div className="glow glowPink"></div>

        <div className="heroContent">

          <p className="eyebrow">
            AASTHA GLOBAL IT SOLUTIONS
          </p>

          <h1>
            Technology that
            <br />

            <span>
              moves your business
            </span>

            <br />

            <strong>
              forward.
            </strong>
          </h1>

          <p className="description">
            We deliver innovative IT solutions that help
            businesses grow, transform, and succeed in a
            digital world.
          </p>

          <div className="heroButtons">

            <a
              href="/services"
              className="primaryButton"
            >
              Explore Services
              <span>→</span>
            </a>

            <a
              href="/contact"
              className="secondaryButton"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}