import React from "react"
import { Link } from "gatsby"
import Title from "../components/Title"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
        <StaticImage src="../assets/images/accountant.jpg" 
          alt="portfolio"
          className="about-img-svg"
          placeholder="blurred"
        />
        <article className="about-text">
        <Title title="About Me" />
        <p>Experienced Credit Analyst 
            with in-depth exposure in 
            external audit and financial 
            reporting.
        </p>
        <p>Board Topnotcher, CPA 
            Licensure Examination 2009
        </p>
        <Link to="/contact" className="btn">
            contact me
          </Link>
        </article>
        </div>
      </section>
    </>
  )
}

export default About
