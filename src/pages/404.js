import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h1>Page not found</h1>
          <Link to="/" className="btn">
            Back to home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
