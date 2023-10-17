import { connect } from "react-redux"
import Author from "./Author"

const AnsweredQuestion = props => {
    const { poll, authedUser, users } = props
    const { author, optionOne, optionTwo, timestamp } = poll
    const avatar = users[author].avatarURL
    const name = users[author].name
    // sanitize timestamp
    const date = new Date(timestamp).toLocaleDateString("de-AT")

    const optionOneNum = optionOne.votes.length
    const optionTwoNum = optionTwo.votes.length
    const optionsSum = optionOneNum + optionTwoNum
    const userChoseOptionOne = optionOne.votes.includes(authedUser)

    return (
        <div className="card poll">
            <p className="poll-headline">Would you rather...</p>
            <div className="author-holder">
                <Author name={name} date={date} avatar={avatar} />
            </div>
            <div className="question-holder">
                <h3 className="radio-poll is-fake">{optionOne.text}</h3>
                <h3 className="radio-poll is-fake">{optionTwo.text}</h3>
            </div>
            <div className="result-holder">
                <p>
                    Submitted choice: <b>{userChoseOptionOne ? optionOne.text : optionTwo.text}</b>
                </p>
                <p className="result-percentage">
                    Option 1:{" "}
                    <b>
                        {optionOneNum} Votes ({Math.round((optionOneNum / optionsSum) * 100)}%)
                    </b>
                    <br />
                    Option 2:{" "}
                    <b>
                        {optionTwoNum} Votes ({Math.round((optionTwoNum / optionsSum) * 100)}%)
                    </b>
                </p>
            </div>
        </div>
    )
}

// get poll and userdata from store
const mapStateToProps = ({ authedUser, users }, { poll }) => {
    return { authedUser, poll, users }
}

export default connect(mapStateToProps)(AnsweredQuestion)
