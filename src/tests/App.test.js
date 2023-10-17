import * as React from "react"
import App from "../components/App"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Provider } from "react-redux"
import store from "../store"
import { BrowserRouter as Router } from "react-router-dom"

describe("App", () => {
    it("should render the app component", () => {
        const component = render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        )
        expect(component).toBeDefined()
        expect(component).toMatchSnapshot()
    })
})
