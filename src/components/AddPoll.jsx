import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleSaveQuestion } from "../actions/questions"

const AddPoll = (props) => {
    const { authedUser, dispatch } = props
    const navigate = useNavigate()

    const initialQuestionObject = {
        author: authedUser,
        optionOneText: "",
        optionTwoText: "",
    }

    const [question, setQuestion] = useState(initialQuestionObject)
    const [disabled, setDisabled] = useState(true)

    const checkInput = () => {
        if (question.optionOneText !== "" && question.optionTwoText !== "") {
            setDisabled(false)
        }
    }

    useEffect(() => {
        checkInput()
    }, [question])

    const handlePollSubmit = (e) => {
        e.preventDefault()

        dispatch(handleSaveQuestion(question)).then(() => {
            setQuestion(initialQuestionObject)
            setDisabled(true)
            navigate("/")
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setQuestion({ ...question, [name]: value })
    }

    return (
        <div className="add-poll">
            <div className="container">
                <h1>Add poll</h1>
                <div className="card">
                    <form onSubmit={handlePollSubmit} className="add-poll-form">
                        <h3>Would you rather...</h3>
                        <label htmlFor="test-option-one">Option 1</label>
                        <input
                            id="test-option-one"
                            data-testid="test-option-one"
                            name="optionOneText"
                            value={question.optionOneText}
                            onChange={handleInputChange}
                            className="poll-input"
                            type="text"
                        />
                        <label htmlFor="test-option-two">Option 2</label>
                        <input
                            id="test-option-two"
                            data-testid="test-option-two"
                            name="optionTwoText"
                            value={question.optionTwoText}
                            onChange={handleInputChange}
                            className="poll-input"
                            type="text"
                        />
                        <div className="form-button-holder">
                            <button
                                data-testid="test-submit-button"
                                disabled={disabled}
                                className="button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

// get user from store
const mapStateToProps = ({ authedUser }) => {
    return { authedUser }
}

export default connect(mapStateToProps)(AddPoll)
