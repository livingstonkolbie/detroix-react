import detroixLogo from '../assets/detroixLogo.png'

function Hero() {

    return (
        
        <div className="row">
            <div className="col-6">
                <img src={detroixLogo} alt="detroix logo" />
            </div>
            <div className="col-6 d-flex align-content-center flex-wrap">
                <button className='headingBtns'>Home</button>
                <button className='headingBtns'>About</button>
                <button className='headingBtns'>Services</button>
                <button className='headingBtns'>FAQS</button>
                <button className='headingBtns'>Contact</button>
            </div>
        </div>      

    )
}

export default Hero