import logo from '../../assets/images/balai-fute-logo.png'
import Navbar from "./components/Navbar.tsx";

const Header = () => {
    return <header className="w-full h-28 flex items-center justify-around border border-b-1 border-gray-200 fixed top-0 bg-white z-50">
        <img src={logo} alt={"logo"} className="w-24"/>
        <Navbar/>
    </header>
}

export default Header
