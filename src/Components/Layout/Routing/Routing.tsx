import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import App from "../../../App";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Page404 from "../../Pages/Page404/Page404";
import CatList from "../../Pages/CatList/CatList";
import UserList2 from "../../Pages/UserList2/UserList2";
import UserList from "../../Pages/UserList/UserList";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<App/>}/>
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="catList" element={<CatList/>}/>
                <Route path="userList" element={<UserList/>}/>
                <Route path="catList" element={<UserList2/>}/>

                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );

                
}

export default Routing;
