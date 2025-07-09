import puzzle from '../assets/puzzle.png'
import plant from '../assets/plant.png'
import maze from '../assets/maze.png'


function About() {

    return (
        <div className="row about pb-5">
            <div className="col-4 smart">
                <h1>SMART</h1>
                <img src={puzzle} alt="image of puzzle pieces" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur exercitationem optio porro quisquam, nihil ea.</p>
                <button>MORE</button>
            </div>
            <div className="col-4 strong">
                <h1>STRONG</h1>
                <img src={plant} alt="image of a hand holding a tiny plant sprouting out of dirt" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur exercitationem optio porro quisquam, nihil ea.</p>
                <button>MORE</button>
            </div>
            <div className="col-4 stable">
                <h1>STABLE</h1>
                <img src={maze} alt="image of a maze" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur exercitationem optio porro quisquam, nihil ea.</p>
                <button>MORE</button>
            </div>
        </div>
    )
}

export default About