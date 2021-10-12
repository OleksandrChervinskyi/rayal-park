import styles from './feedback.module.css'
import {Carousel, CarouselItem, Col, Container, Row} from "react-bootstrap";
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
                    <Col lg={4} md={6}>
                        <div className={styles.cards}>
                            <img src={men1} alt="men1" className={styles.photo}/>
                            <p className={styles.feedback_text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.
                            </p>
                            <p className={styles.name}>
                                David lee
                            </p>
                            <p className={styles.social_link}>
                                davidlee@
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className={styles.cards}>
                            <img src={men3} alt="men1" className={styles.photo}/>
                            <p className={styles.feedback_text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.
                            </p>
                            <p className={styles.name}>
                                Ravi shankor
                            </p>
                            <p className={styles.social_link}>
                                ravishankor@
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className={styles.cards}>
                            <img src={men2} alt="men3" className={styles.photo}/>
                            <p className={styles.feedback_text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.
                            </p>
                            <p className={styles.name}>
                                Thomas lew
                            </p>
                            <p className={styles.social_link}>
                                thomaslew@
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}