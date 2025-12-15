import { Link, Outlet } from "react-router-dom";

export default function Root(props) {
    let num=7;
    return (
        <div>
            <Link to={'page1'}>Page1</Link> |
            <Link to={'page2'}>Page2</Link> |
            <Link to={'page3/' + num}>Page3</Link> | <br />

            <h3>Root</h3>
            START OUTLET
            <Outlet />
            END OUTLET


        </div>
    )
}
