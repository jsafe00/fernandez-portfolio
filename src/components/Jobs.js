import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

export const query = graphql`
  {
    allDataJson(sort: { fields: created_at, order: DESC }) {
      nodes {
        position
        company
        date
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allDataJson: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, description } = jobs[value]
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info about me
      </Link>
    </section>
  )
}

export default Jobs
