import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return <header className="hero">
    <section className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>I'm Maricor Fernandez</h1>
          <h4>Credit Analyst & Accountant</h4>
          <Link to="/contact" className="btn">
            contact me
          </Link>
        </div>
      </article>
      <StaticImage src="../assets/images/analyst.svg" 
        alt="portfolio"
        className="hero-img"
        placeholder="blurred"
      />
    </section>
  </header>
}

export default Hero
