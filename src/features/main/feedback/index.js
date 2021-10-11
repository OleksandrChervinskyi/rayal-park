import styles from './feedback.module.css'
import {Carousel, Col, Container, Row} from "react-bootstrap";
import men1 from '../../../app/pictures/main/Men1.png';
import men2 from '../../../app/pictures/main/Men2.png';
import men3 from '../../../app/pictures/main/Men3.png';


export const Feedback = () => {
    return (
        <section className={styles.section}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.descriptions}>
                            <h2>
                                What our client say
                            </h2>
                            <button className='global_bt'>
                                View All
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Carousel>
                        <Col lg={4}>
                            <div className={styles.cards}>
                                <img src={men1} alt="men1"/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.
                                </p>
                                <p>
                                    David lee
                                </p>
                                <p>
                                    davidlee@
                                </p>
                            </div>
                        </Col>
                    </Carousel>
                </Row>
            </Container>
        </section>
    )
}