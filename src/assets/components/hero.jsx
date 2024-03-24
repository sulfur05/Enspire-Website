import { TypeAnimation } from 'react-type-animation';

const Video =()=>{
    return(
        <div>
        <div className="video">
        <video src="/videos/Enspire2.mp4" autoPlay muted height={646.6}loop>
            <p color="white">hello</p>
        </video>
        </div>
        <div className="mainContent">
            <div className="flexVertical">
                {/* <TypeAnimation
                    sequence={[
                        `IIITL's E-cell presents`
                    ]}
                    speed={20}
                    style={{fontSize: '30px', display: 'inline', textAlign: 'left', width: '500px'}}
                    repeat={Infinity}
                    /> */}
                <p className='smallText'>IIITL's E-Cell presents</p>
                <p><span className="E">E</span>nspire<span className="E">'23</span></p>
                <img src="/images/innovationOdyssey.png" alt="" />
            </div>
        </div>
        </div>
        
    )
}

export default Video;