import * as React from "react"
import Navbar from "../components/Navbar"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Provider } from "react-redux"
import store from "../store"
import { MemoryRouter } from "react-router-dom"


describe("Navbar", () => {
    test("all routes are rendered in navbar", async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </MemoryRouter>
      );
  
      const homeLink = screen.getByText(/home/i);
      const newPollLink = screen.getByText(/add poll/i);
      const leaderboardLink = screen.getByText(/leaderboard/i);
  
      expect(homeLink).toBeInTheDocument();
      expect(newPollLink).toBeInTheDocument();
      expect(leaderboardLink).toBeInTheDocument();
    });
  });