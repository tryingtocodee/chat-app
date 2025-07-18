import {Routes , Route} from "react-router-dom"
import NavBar from "./components/navBar"
import HomePage from "./pages/homePage"
import SignupPage from "./pages/signupPage"
import LoginPage from "./pages/loginPage"
import SettingPage from "./pages/settingPage"
import ProfilePage from "./pages/profilePage"
import { useEffect } from "react"

export default function App(){

    useEffect(() => {

  },[])
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/settings" element={<SettingPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </div>
  )
}