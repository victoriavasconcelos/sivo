import { Outlet } from "react-router-dom";
import NavBar from "../../layout/navbar";

export default function Home() {

    return (
        <div>
            <NavBar />
            <div>
                <Outlet />
            </div>
            
        </div>
    )
}