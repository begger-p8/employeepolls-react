import { connect } from "react-redux"
import Author from "./Author"
import { handleAnswerQuestion } from "../actions/questions"
import { updateUsersAnswers } from "../actions/users"

const UnansweredQuestion = props => {
    const { poll, users, authedUser } = props
    const { id, author, optionOne, optionTwo, timestamp } = poll
    const avatar = users[author].avatarURL
    const name = users[author].name
    // sanitize timestamp
    const date = new Date(timestamp).toLocaleDateString("de-AT")

    const chooseOption = e => {
        const answer = e.target.value
        const qid = id

        props.dispatch(handleAnswerQuestion({ authedUser, qid, answer }))
        props.dispatch(updateUsersAnswers({ authedUser, qid, answer }))
    }

    return (
        <div className="card poll">
            <p className="poll-headline">Would you rather...</p>
            <div className="author-holder">
                <Author name={name} date={date} avatar={avatar} />
            </div>
            <div className="question-holder">
                <div className="radio-holder" onChange={chooseOption}>
                    <h3 className="radio-poll">
                        <input type="radio" name="options" value="optionOne" />
                        {optionOne.text}
                    </h3>
                    <h3 className="radio-poll">
                        <input type="radio" name="options" value="optionTwo" />
                        {optionTwo.text}
                    </h3>
                </div>
            </div>
        </div>
    )
}

// get userdata from store
const mapStateToProps = ({ users, authedUser }, { poll }) => {
    return {
        users,
        poll,
        authedUser,
    }
}

export default connect(mapStateToProps)(UnansweredQuestion)
