import React from "react"
import { Helmet } from "react-helmet"
const contact = () => {
  return (
    <>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Contact | Maricor Fernandez</title>
        </Helmet>
      <section class="contact-page">
        <article className="contact-form">
          <h3>contact me</h3>
          <form className="form contact-form" action="https://formspree.io/f/xzbyolrl"
                                method="POST">
            <div className="form-group">
              <input 
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
               /> 
              <input 
                type="text"
                name="email"
                placeholder="email"
                className="form-control"
               /> 
               <textarea name="message" rows="5" placeholder="message" className="form-control"></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
