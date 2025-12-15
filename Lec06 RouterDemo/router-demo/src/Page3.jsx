import { Link, useParams } from "react-router-dom";

export default function Page3(props) {
    const { userId } = useParams();
    console.log(userId);

    return (
        <div>
            <h3>Page3</h3>
            <Link to={'/page1'}>Page1</Link> <br />
            userId = {userId}
        </div>
    )
}
