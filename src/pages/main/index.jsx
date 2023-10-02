import { Outlet } from "react-router-dom";
import NavBar from "../../layout/navbar";
import Footer from "../../layout/footer";

export default function Main() {

    return (
        <div>
            <NavBar />
            <div style={{minHeight:"100vh"}}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}