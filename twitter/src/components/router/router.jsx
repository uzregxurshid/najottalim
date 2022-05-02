import {Navigate, Route, Routes} from "react-router-dom";
import Signup from "../../pages/signup/signup";
import SignCover from "../../pages/sign/signCover";
import Login from "../../pages/login/login";
import Profile from "../../pages/profile/profile";
import Feed from "../../pages/feed/feed";
const Router = () => {
    const RequireAuth = ({children}) => {
        if (localStorage.getItem('auth') !== '1') {
            return <Navigate to={"/login"}/>
        }
        return children;
    }
    const Logged = ({children})=>{
        if (localStorage.getItem('auth') !== '1') {
            return children
        }
        return <Navigate to={"/profile"}/>
    }

    return (
        <>
            <Routes>
                <Route path={"/"} element={<SignCover/>}/>
                <Route path={"/login"} element={
                    <Logged>
                        <Login/>
                    </Logged>
                }/>
                <Route path={"/signup"} element={<Signup/>}/>
                <Route path={"/profile"} element={
                    <RequireAuth>
                        <Profile/>
                    </RequireAuth>
                }/>
                <Route path={"/feed"} element={
                    <RequireAuth>
                        <Feed/>
                    </RequireAuth>
                }/>
                <Route path={"*"} element={<Login/>}/>
            </Routes>
        </>
    )
}
export default Router;