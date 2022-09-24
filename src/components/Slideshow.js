import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

import carrotCakeImage from '../gfx/carrot.jpg';
import chocCakeImage from '../gfx/chocolate-raspberry.jpg';
import lemonCakeImage from '../gfx/lemon.jpg';
import berryCakeImage from '../gfx/berry-heart.jpg';

function Slideshow() {
    return (
        <div className="slideshow">
            <Container>
                <Carousel fade={true} interval={7500}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={chocCakeImage}
                            alt="Chocolate Raspberry Cake"
                        />
                        <Carousel.Caption>
                            <h3>Chocolate Raspberry Layer Cake</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carrotCakeImage}
                            alt="Carrot Cake"
                        />
                        <Carousel.Caption>
                            <h3> Golden Beet Cake </h3>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={lemonCakeImage}
                            alt="Lemon Cake"
                        />
                        <Carousel.Caption>
                            <h3>Lemon Lavender Bundt Cake</h3>
                   
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={berryCakeImage}
                            alt="Berry Cake"
                        />
                        <Carousel.Caption>
                            <h3> Chocolate Raspberry Layer Cake</h3>
                       
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default Slideshow;