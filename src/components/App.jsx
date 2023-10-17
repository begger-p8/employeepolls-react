import { handleInitialData } from "../actions/shared"
import { Fragment, useEffect } from "react"
import { connect } from "react-redux"
import { LoadingBar } from "react-redux-loading-bar"
import { Routes, Route } from "react-router-dom"
import "../styles/app.css"
import Login from "./Login"
import NotFound from "./NotFound"
import Navbar from "./Navbar"
import AddPoll from "./AddPoll"
import PollDetails from "./PollDetails"
import Leaderboard from "./Leaderboard"
import Dashboard from "./Dashboard"

const App = props => {
    // redux loading
    const { isLoading } = props
    useEffect(() => {
        props.dispatch(handleInitialData())
    }, [isLoading])

    return (
        <Fragment>
            <LoadingBar />
            <div className="main">
                <Navbar />
                {/* user needs to log in */}
                {isLoading === true ? (
                    <Login />
                ) : (
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route path="/questions/:id" element={<PollDetails />} />
                        <Route path="/add" element={<AddPoll />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="*" element={<NotFound page="page" />} />
                    </Routes>
                )}
            </div>
        </Fragment>
    )
}

// get user from store
const mapStateToProps = ({ authedUser }) => ({
    isLoading: authedUser === null,
})

export default connect(mapStateToProps)(App)
