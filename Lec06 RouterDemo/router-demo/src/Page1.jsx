import { useNavigate } from "react-router-dom"

export default function Page1(props) {
    const navigate = useNavigate();

    const btnGo2P4WD = () => {

        let userData = {
            id: 1,
            name: 'avi'
        };

        navigate('/page4', { state: userData });
    }

    return (
        <div>
            <h3>Page1</h3>
            <button onClick={() => navigate('/page2')} >go to page2</button>
            <button onClick={btnGo2P4WD} >go to page4 with data</button>
        </div>
    )
}
