import React from "react"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Home | Maricor Fernandez</title>
        </Helmet>
      <main>
        <Hero />
        <Jobs />
      </main>
    </>
  )
}

export default IndexPage
