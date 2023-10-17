const LeaderboardUser = (props) => {
    const { avatar, name, countAnswered, countAsked, ranking } = props
    return (
        <tr className="leaderboard-user">
            <td>
                <b>{ranking}</b>
            </td>
            <td>
                <div className="board-user">
                    <img
                        className="profile-avatar"
                        src={avatar}
                        alt={`Avatar of ${name}`}
                        width="50"
                        height="50"
                    />
                    <p className="board-username">{name}</p>
                </div>
            </td>
            <td>{countAnswered}</td>
            <td>{countAsked}</td>
            <td>{countAsked + countAnswered}</td>
        </tr>
    )
}

export default LeaderboardUser
