import { connect } from "react-redux"
import { Link } from "react-router-dom"
import User from "./User"

const Navbar = props => {
    return (
        <div className="navbar">
            <ul className="blank-list nav-items">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/add"} className="nav-link">
                        Add Poll
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/leaderboard"} className="nav-link">
                        Leaderboard
                    </Link>
                </li>
            </ul>
            {!props.loading && <User />}{" "}
        </div>
    )
}

// get user from store
const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
})

export default connect(mapStateToProps)(Navbar)
