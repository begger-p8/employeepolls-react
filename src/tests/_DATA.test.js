import { _saveQuestion, _saveQuestionAnswer, _getInitialData } from "../utils/_DATA"

describe("_getInitialData", () => {
    it("return all users and questions", async () => {
        const { users, questions } = await _getInitialData()
        const userCount = Object.keys(users).length
        const questionCount = Object.keys(questions).length
        expect(userCount === 4 && questionCount === 6).toBeTruthy()
    })
})

describe("_saveQuestion", () => {
    it("saved question is returned and all expected fields are populated when correctly formatted data is passed", async () => {
        const mockQuestion = {
            author: "Jon Doe",
            optionOneText: "This is option one",
            optionTwoText: "This is option two",
        }

        const actual = await _saveQuestion(mockQuestion)
        const { author, optionOne, optionTwo } = actual
        const text1 = optionOne.text
        const text2 = optionTwo.text

        expect(author).toBe("Jon Doe")
        expect(text1).toBe("This is option one")
        expect(text2).toBe("This is option two")
    })

    it("error is returned if incorrect data is passed to the function", async () => {
        const mockQuestion = {
            author: null,
            optionOneText: null,
        }
        await expect(_saveQuestion(mockQuestion)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author")
    })
})

describe("_saveQuestionAnswer", () => {
    it("true is returned when correctly formatted data is passed to the function", async () => {
        const mockAnswer = {
            authedUser: "sarahedo",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne",
        }
        const response = await _saveQuestionAnswer(mockAnswer)
        expect(response).toBeTruthy()
    })
    it("error is returned if incorrect data is passed to the function", async () => {
        const mockAnswer = {
            authedUser: null,
            qid: null,
            answer: null,
        }
        await expect(_saveQuestionAnswer(mockAnswer)).rejects.toEqual("Please provide authedUser, qid, and answer")
    })
})
