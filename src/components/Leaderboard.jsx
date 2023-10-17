import { connect } from "react-redux"
import LeaderboardUser from "./LeaderboardUser"

const Leaderboard = props => {
    const { users, userIds } = props
    const buildUserData = (user, countAnswered, countAsked, sum) => {
        return {
            ...user,
            countAnswered,
            countAsked,
            sum,
        }
    }

    let allUsers = []
    for (let i = 0; i < userIds.length; i++) {
        const user = users[userIds[i]]
        const { questions, answers } = user

        const countAsked = questions.length
        const countAnswered = Object.keys(answers).length
        const sum = countAnswered + countAsked
        const userData = buildUserData(user, countAnswered, countAsked, sum)
        allUsers.push(userData)
    }
    // order by sum
    const orderedUsers = allUsers.sort((a, b) => b.sum - a.sum)

    return (
        <div className="leaderboard">
            <div className="container">
                <h1>Leaderboard</h1>
                <div className="card">
                    <table className="leaderboard-table">
                        <thead>
                            <tr>
                                <th width="10%">Ranking</th>
                                <th width="40%">User</th>
                                <th width="20%">Answered</th>
                                <th width="20%">Asked</th>
                                <th width="10%">Sum</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderedUsers.map((user, i) => {
                                return (
                                    <LeaderboardUser
                                        key={user.id}
                                        avatar={user.avatarURL}
                                        name={user.name}
                                        countAnswered={user.countAnswered}
                                        countAsked={user.countAsked}
                                        ranking={i + 1}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

// get users from store
const mapStateToProps = ({ users }) => {
    const userIds = Object.keys(users)
    return { users, userIds }
}

export default connect(mapStateToProps)(Leaderboard)
