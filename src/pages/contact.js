import React from "react"
const contact = () => {
  return (
    <>
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
