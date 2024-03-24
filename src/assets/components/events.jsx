import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline=()=>{
    return(
        <>
        <div className="heading container ">
          <h1 className='head'>OUR <span className="green">EVENTS</span></h1> 
        </div>
        <div className="Timeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0F1035', color: '#fff',  marginLeft:'10px'}}
            contentArrowStyle={{ borderRight: '7px solid  #0F1035' }}
            date="Day 1"
            iconStyle={{background:'#5ce1e6' , height:'15px', width:'15px' ,borderRadius: '50%', marginLeft: '-8px', marginTop: '25px' ,border:'solid 0px'}}
            // icon={<WorkIcon />}
          >
            {/* <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <div className="eventNames">
            <h5>
              OPENING CEREMONY
            </h5>
            <h5>
              MILLION DOLLAR IDEA
            </h5>
            <h5>
              TRADE TANGO
            </h5> <h5>
              MYSTERY ROOM
            </h5> <h5>
              SPEAKER SESSION
            </h5> <h5>
              MONOPOLY
            </h5>  <h5>
              FIND X
            </h5> <h5>
              SILENT DJ
            </h5>
            <h5>
              GAMING NIGHT
            </h5>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0F1035', color: '#fff',  marginLeft:'10px'}}
            contentArrowStyle={{ borderRight: '7px solid  #0F1035' }}
            date="Day 2"
            iconStyle={{background:'#5ce1e6' , height:'15px', width:'15px' ,borderRadius: '50%', marginLeft: '-8px', marginTop: '25px' ,border:'solid 0px'}}
            // icon={<WorkIcon />}
          >
            {/* <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <div className="eventNames">
            <h5>
              SPEAKER SESSION
            </h5>
            <h5>
              E-SHIP QUIZ
            </h5>
            <h5>
              MYSTERY ROOMS
            </h5> <h5>
              IPL AUCTION
            </h5> <h5>
              VENTURER
            </h5> <h5>
              GAMING NIGHT
            </h5>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0F1035', color: '#fff',  marginLeft:'10px'}}
            contentArrowStyle={{ borderRight: '7px solid  #0F1035' }}
            date="Day 3"
            iconStyle={{background:'#5ce1e6' , height:'15px', width:'15px' ,borderRadius: '50%', marginLeft: '-8px', marginTop: '25px' ,border:'solid 0px'}}
            // icon={<WorkIcon />}
          >
            {/* <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <div className="eventNames">
            <h5>
              SPEAKER SESSION
            </h5>
            <h5>
              MONOPOLY
            </h5>
            <h5>
              RESULTS
            </h5> <h5>
              CLOSING CEREMONY
            </h5> 
            </div>
          </VerticalTimelineElement>
          
</VerticalTimeline>
</div>
        </>
    )
}

export default Timeline;