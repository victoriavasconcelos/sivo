import { Outlet } from "react-router-dom";
import NavBar from "../../layout/navbar";
import Footer from "../../layout/footer";

export default function Main() {

    return (
        <div>
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}