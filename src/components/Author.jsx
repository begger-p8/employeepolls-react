const Author = ({ name, date, avatar }) => {
    return (
        <div className="author">
            <img
                src={avatar}
                alt={`Avatar of ${name}`}
                width="50"
                height="50"
                className="profile-avatar"
            />
            <p className="author-info">
                Asked by <br />
                {name} <br />
                on {date}
            </p>
        </div>
    )
}

export default Author
