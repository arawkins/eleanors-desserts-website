import './scss/App.scss';
import Header from './components/Header';
import Slideshow from './components/Slideshow';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import berryImage from './gfx/berry-heart.jpg';

import portraitImage from './gfx/eleanor-portrait.jpg';

function App() {

    return (
        <>
            <Header />
            <Slideshow />

            <section>
                <Container>
                    <Row>
                        <h2 className="text-center">Favorite Recipes</h2>
                        <Col>
                            <article className="recipe">
                                <a href="#"><Image fluid="true" src={berryImage}></Image></a>
                                <h3>Recipe Title</h3>
                                <p>Recipe description...</p>
                            </article>
                        </Col>
                        <Col>
                            <article className="recipe">
                                <Image fluid="true" src={berryImage}></Image>
                                <h3>Recipe Title</h3>
                                <p>Recipe description...</p>
                            </article>
                        </Col>
                        <Col>
                            <article className="recipe">
                                <Image fluid="true" src={berryImage}></Image>
                                <h3>Recipe Title</h3>
                                <p>Recipe description...</p>
                            </article>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section id="aboutEleanor">
                <Container>
                    <h2 class="text-center">About Eleanor</h2>
                    <Row className="justify-content-center">
                        <Col md="auto">
                            <Image fluid="true" src={portraitImage}></Image>
                        </Col>
                        <Col>
                            <p>Hi! I'm Eleanor. I was diagnosed as Celiac at age 3, and love to bake, so here we are! This website is a way for me to share my most succesful creations, and help others discover how yummy GF baking can be.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <footer>
                <Container>
                    <p className="text-center">Copyright &copy; 2022, Eleanor Rawkins.</p>
                </Container>
            </footer>
        </>
    );
}

export default App;
