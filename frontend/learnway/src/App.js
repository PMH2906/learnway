import React from "react";
import Home from "./component/page/MainPage/Home";
import MyPage from "./component/page/MyPage/MyPage";
import Intro from "./component/page/Front/Intro";
import Login from "./component/page/Front/LoginPage/Login";
import Logout from "./component/page/Front/Logout";
import Signup from "./component/page/Front/SignupPage/SignUp";
import FindPassword from "./component/page/Front/FindPassword"
import Loading from "./component/page/Loading/LoadingPage"
import RandomMatch from "./component/page/Loading/RandomMatch"
import Test from "./component/VideoChat/TestPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>

                <Route path="/test" element={<Test/>}></Route>

                <Route path="/loading" element={<Loading />}></Route>
                <Route path="/intro" element={<Intro />}></Route>
                <Route path="/mypage" element={<MyPage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/find_password" element={<FindPassword />}></Route>
                <Route path="/loading/match" element={<RandomMatch />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
