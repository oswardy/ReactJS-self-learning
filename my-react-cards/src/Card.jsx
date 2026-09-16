import OswardPic from './assets/Osw_Resume_Profile.jpeg'
import RandomPic from './assets/Reze.png'


function Card(){
        
    return(
        <>
            <div className="card">
                <img className="card-img" src={OswardPic} alt="Profile Picture"></img>
                <h2 className="card-title">Osward Yong</h2> 
                <p className="card-text">I am learning react because I want to try different things other than c# backend</p> 
            </div>

            <div className="card">
                <img className="card-img" src={RandomPic} alt="Profile Picture"></img>
                <h2 className="card-title">Random Anime Character</h2> 
                <p className="card-text">I am learning react because I want to try different things other than c# backend</p> 
            </div>
        
        </>
        
        
    );
}

export default Card