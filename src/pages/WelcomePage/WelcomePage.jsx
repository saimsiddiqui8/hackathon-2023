import "./style.css"
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"

const WelcomePage = () => {
    const navigate = useNavigate()
    const func = () => {
        navigate("/signIn")
    }
    return (
        <>
            <div id='welcomePage'>
                <div>
                    <img src={logo} alt="" />
                    <h1 className='head display-2 fw-bold'>SAYLANI WELFARE</h1>
                    <h3 className="para">ONLINE DISCOUNT STORE</h3>

                    <button className="btn btn-success btn-lg fw-bold mt-5" onClick={func}>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default WelcomePage