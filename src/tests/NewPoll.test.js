import * as React from "react"
import AddPoll from "../components/AddPoll"
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../store"

describe("AddPoll", () => {
    it("remove disabled attribute from submit button when both inputs have an input value", async () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <AddPoll />
                </Provider>
            </MemoryRouter>
        )
        const inputOne = screen.getByTestId("test-option-one")
        const inputTwo = screen.getByTestId("test-option-two")
        const submitButton = screen.getByTestId("test-submit-button")
        // first, check if disabled
        expect(submitButton).toHaveAttribute("disabled")
        // change inputs
        fireEvent.change(inputOne, { target: { value: "first value" } })
        fireEvent.change(inputTwo, { target: { value: "second value" } })
        // then check if not disabled any more
        expect(submitButton).not.toHaveAttribute("disabled")
    })
})
