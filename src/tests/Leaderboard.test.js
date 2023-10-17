import * as React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Provider } from "react-redux"
import store from "../store"
import { BrowserRouter as Router } from "react-router-dom"
import Leaderboard from "../components/Leaderboard"

describe("Leaderboard", () => {
    it("should render the leaderboard component", () => {
        const component = render(
            <Provider store={store}>
                <Router>
                    <Leaderboard />
                </Router>
            </Provider>
        )
        expect(component).toBeDefined()
        expect(component).toMatchSnapshot()
    })
})