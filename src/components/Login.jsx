import { connect } from "react-redux"
import { handleLogin } from "../actions/shared"

const Login = (props) => {
    const { users, userIds } = props

    let allUsers = []
    for (let i = 0; i < userIds.length; i++) {
        allUsers.push(users[userIds[i]])
    }
    const login = (e) => {
        props.dispatch(handleLogin(e.target.value))
    }

    return (
        <div className="container">
            <h1>Welcome to the employee poolls!</h1>
            <div className="card login-card">
                <h2>Login</h2>
                <select
                    data-testid="test-userselect"
                    name="login"
                    className="select"
                    onChange={(e) => login(e)}>
                    <option>Select a user</option>
                    {allUsers.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

// get users from store
const mapStateToProps = ({ users }) => {
    const userIds = Object.keys(users)

    return { users, userIds }
}

export default connect(mapStateToProps)(Login)
