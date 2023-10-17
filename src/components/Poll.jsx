import { connect } from "react-redux"
import UnansweredQuestion from "./UnansweredQuestion"
import AnsweredQuestion from "./AnsweredQuestion"

const Poll = props => {
    const { poll, authedUser } = props
    const { optionOne, optionTwo } = poll
    // differ between if unanswered answered
    const userChoseOptionOne = optionOne.votes.includes(authedUser)
    const userChoseOptionTwo = optionTwo.votes.includes(authedUser)
    const notAnsweredYet = !userChoseOptionOne && !userChoseOptionTwo
    // to separate components for unswered/unanswered
    return <div>{notAnsweredYet ? <UnansweredQuestion poll={poll} /> : <AnsweredQuestion poll={poll} />}</div>
}

// get user and questions from store
const mapStateToProps = ({ authedUser, questions }, { id }) => {
    const poll = questions[id]
    return { authedUser, poll }
}

export default connect(mapStateToProps)(Poll)
