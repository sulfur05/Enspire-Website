import Marquee from "react-fast-marquee";

const Sponsor=()=>{
    return(
        <>
        <p className="height" color="black
        ">  
        <div className="flex sponsors" id="sponsor">
                <Marquee direction="right" autoFill="true">
                <div className="flex">
                <img src="/images/sponsor1.png" alt="" />
                <img src="/images/sponsor2.png" alt="" />
                <img src="/images/sponsor3.png" alt="" />
                </div>
                </Marquee>
                
            </div>
        </p>
        </>
    )
}

export default Sponsor;