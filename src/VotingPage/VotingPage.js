import React from "react"
import "./VotingPage.css"

const VotingPage = ({books}) => {
  return(
    <div>
      <h1 className="app-name">Judge A Book</h1>
      <section className="cover-section">
        <div>This will be a cover img</div>
        <div className="vote-buttons">
          <button>👍</button>
          <button>👎</button>
        </div>
      </section>
    </div>
  )
}

export default VotingPage