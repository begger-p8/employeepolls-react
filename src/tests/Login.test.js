import * as React from "react"
import Login from "../components/Login"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../store"

describe("Login", () => {
    it("render userselect", async () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        )
        const selectElement = screen.getByTestId("test-userselect")
        expect(selectElement).toBeInTheDocument()
    })
})
