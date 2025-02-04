import { Outlet } from "react-router";
import Nav from "../Common/Nav";
import Footer from "../Common/Footer";
import '../../index.css' 


const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;