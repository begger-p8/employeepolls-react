import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleLogin } from "../actions/shared"

const User = props => {
    const navigate = useNavigate()
    const { avatarURL, name } = props

    const logout = () => {
        props.dispatch(handleLogin(null))
        navigate("/")
    }

    return (
        <div className="nav-profile">
            <div className="profile-name" data-testid="test-username">{name}</div>
            <button className="button is-secondary" onClick={logout}>
                Logout
            </button>
        </div>
    )
}

// get userdata from store
const mapStateToProps = ({ authedUser, users }) => {
    const user = users[authedUser]
    const { avatarURL, name } = user
    return {
        avatarURL,
        name,
    }
}

export default connect(mapStateToProps)(User)
