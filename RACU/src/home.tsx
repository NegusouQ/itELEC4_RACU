import './home.css'
import logo from '../src/assets/images/RACU.png'

function Home () {
    return <>
        <div className="home-main-container">
            <div className="greeting">
                <div className="text-greeting">
                    <h1 className='greeting-text' style={{ lineHeight:'0' }}>Welcome to RACU,</h1>
                    <h3> where every gamer's voice levels up the gaming experience!</h3>
                </div>
                <img className='logo-home' src={ logo } alt="" />
            </div>
        </div>
    </>
}

export default Home;