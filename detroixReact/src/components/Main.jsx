import detroixLogo from '../assets/detroixLogo.png'

function Main() {

    return (
        <main role="main">
            <div className="row">
                <div className="col-6">
                    <img src={detroixLogo} alt="" />
                </div>
                <div className="col-6 d-flex align-content-center flex-wrap">
                    <button className='headingBtns'>Home</button>
                    <button className='headingBtns'>About</button>
                    <button className='headingBtns'>Services</button>
                    <button className='headingBtns'>FAQS</button>
                    <button className='headingBtns'>Contact</button>
                </div>
            </div>
        </main>
    )
}

export default Main