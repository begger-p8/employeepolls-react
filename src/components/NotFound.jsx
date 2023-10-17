import { useNavigate } from "react-router-dom"

const NotFound = ({ page }) => {
    const navigate = useNavigate()
    const redirectHome = () => {
        navigate("/")
    }

    return (
        <div className="not-found">
            <div className="container">
                <h1>404</h1>
                <p className="not-found-text">This page does not exist! Unknown page: {page}</p>
                <button className="button" onClick={redirectHome}>
                    Back to Homepage
                </button>
            </div>
        </div>
    )
}

export default NotFound
