import { useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Poll from "./Poll"

const Dashboard = props => {
    const { questionIds, questions, authedUser } = props

    let allQuestions = []
    for (let i = 0; i < questionIds.length; i++) {
        allQuestions.push(questions[questionIds[i]])
    }
    // split unanswered from answered questions
    const answeredQuestions = allQuestions.filter(q => q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser))
    const unansweredQuestions = allQuestions.filter(q => !q.optionOne.votes.includes(authedUser) && !q.optionTwo.votes.includes(authedUser))
    // manage what to be shown
    const [questionsToDisplay, setQuestionsToDisplay] = useState(unansweredQuestions)
    const [active, setActive] = useState(true)
    const showUnanswered = () => {
        setQuestionsToDisplay(unansweredQuestions)
        setActive(true)
    }
    const showAnswered = () => {
        setQuestionsToDisplay(answeredQuestions)
        setActive(false)
    }

    return (
        <div className="dashboard">
            <div className="container">
                <h1>Dashboard</h1>
                <div className="category-wrapper">
                    <div className="category-switch">
                        <button className={active ? "button is-active" : "button"} onClick={showUnanswered}>
                            Unanswered
                        </button>
                        <button className={!active ? "button is-active" : "button"} onClick={showAnswered}>
                            Answered
                        </button>
                    </div>
                </div>
                <ol className="blank-list">
                    {questionsToDisplay.length > 0 ? (
                        questionsToDisplay.map(q => (
                            <li key={q.id}>
                                <Link to={`/questions/${q.id}`} className="wrapper-link">
                                    <Poll id={q.id} />
                                </Link>
                            </li>
                        ))
                    ) : (
                        <div>There are no poll available at the moment!</div>
                    )}
                </ol>
            </div>
        </div>
    )
}

// get questions and user from store
const mapStateToProps = ({ questions, authedUser }) => ({
    // order questions by timestamp
    questionIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    authedUser,
    questions,
})

export default connect(mapStateToProps)(Dashboard)
