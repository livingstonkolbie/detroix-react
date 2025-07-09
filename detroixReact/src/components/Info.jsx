import gear from '../assets/gear.png'
import bubble from '../assets/bubble.png'
import ninth from '../assets/09.png'
import seventeenth from '../assets/17.png'
import twentyfirst from '../assets/21.png'

function Info() {

    return (
        <div className="row info pt-5">
            <div className="col-4">
                <h1>SERVICES</h1>
                <div className='row'>
                    <div className="col-2">
                        <img src={gear} alt="icon for a gear gogwheel" />
                    </div>
                    <div className="col-10">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-2">
                        <img src={gear} alt="icon for a gear gogwheel" />
                    </div>
                    <div className="col-10">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-2">
                        <img src={gear} alt="icon for a gear gogwheel" />
                    </div>
                    <div className="col-10">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-2">
                        <img src={gear} alt="icon for a gear gogwheel" />
                    </div>
                    <div className="col-10">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-2">
                        <img src={gear} alt="icon for a gear gogwheel" />
                    </div>
                    <div className="col-10">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-2">
                        <img src={gear} alt="icon for a gear gogwheel" />
                    </div>
                    <div className="col-10">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-2">
                        <img src={gear} alt="icon for a gear gogwheel" />
                    </div>
                    <div className="col-10">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-2">
                        <img src={gear} alt="icon for a gear gogwheel" />
                    </div>
                    <div className="col-10">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <h1>OPPORTUNITIES</h1>
                <div className="row">
                    <div className="col-2">
                        <img src={bubble} alt="icon of a speech bubble" />
                    </div>
                    <div className="col-10">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, facere nihil commodi veritatis repellat quod.</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-2">
                        <img src={bubble} alt="icon of a speech bubble" />
                    </div>
                    <div className="col-10">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, facere nihil commodi veritatis repellat quod.</p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <h1>NEWS</h1>
                <div className="row news">
                    <div className="col-3">
                        <img src={twentyfirst} alt="calendar date 21st" />
                    </div>
                    <div className="col-9">
                        <h5>Lorem ipsum dolor sit amet.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eligendi.</p>
                    </div>
                </div>
                <div className="row news">
                    <div className="col-3">
                        <img src={ninth} alt="calendar date 21st" />
                    </div>
                    <div className="col-9">
                        <h5>Lorem ipsum dolor sit amet.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eligendi.</p>
                    </div>
                </div>
                <div className="row news">
                    <div className="col-3">
                        <img src={seventeenth} alt="calendar date 21st" />
                    </div>
                    <div className="col-9">
                        <h5>Lorem ipsum dolor sit amet.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eligendi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info