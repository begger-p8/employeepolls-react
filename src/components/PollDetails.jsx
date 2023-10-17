import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import Poll from "./Poll"
import NotFound from "./NotFound"

const PollDetails = props => {
    const { idsArr } = props
    const { id } = useParams()

    return (
        <div className="poll-page">
            <div className="container">{idsArr.includes(id) ? <Poll id={id} /> : <NotFound page="poll" />}</div>
        </div>
    )
}

// get questions from store
const mapStateToProps = ({ questions }) => {
    const idsArr = Object.keys(questions)
    return {
        idsArr,
    }
}

export default connect(mapStateToProps)(PollDetails)
