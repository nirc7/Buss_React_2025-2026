import { useLocation  } from "react-router-dom"

export default function Page4(props) {
    const { state } = useLocation();
    let userData = state;

    return (
        <div>
            <h3>Page4</h3>
            id = {userData.id} <br />
            name= {userData.name}
        </div>
    )
}
