import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Merch=()=>{
    return (
        <>
        <div className="ourmerch container">
            <div className="content flex2 container">
                <div className="heading2">
                    <h1 className='text-white' style={{fontFamily: 'Track'}}>OUR</h1>
                    <h1 className='green' style={{fontFamily: 'Track'}}>MERCH</h1>
                </div>
                <div className="merchDesigns">
                <Carousel fade>
      <Carousel.Item className='caro'>
        <img
        src='/images/image1.png'
        className= 'imagess'/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='caro'>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
        src='/images/image2.png'
        className= 'imagess'/>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
                </div>
            </div>
        </div>
        </>
    )
}

export default Merch;