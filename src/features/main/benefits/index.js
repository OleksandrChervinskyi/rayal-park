import styles from './benefits.module.css'
import {Col, Container, Row} from "react-bootstrap";
import adv1 from '../../../app/pictures/main/Adv1.png'
import adv2 from '../../../app/pictures/main/Adv2.png'
import adv3 from '../../../app/pictures/main/Adv3.png'
import adv4 from '../../../app/pictures/main/Adv4.png'

export const Benefits = () => {
    return (
        <section className={styles.benefits_section}>
            <Container>
                <Row className='text-center'>
                    <Col>
                        <div className={styles.benefits_descriptions}>
                            <h2 className={styles.benefits_title}>
                                Why you choose us!
                            </h2>
                            <p className={styles.benefits_text}>
                                Naturally, it’s becoming even more important for hotel and hospitality brands to stand
                                out
                                from the crowd. Content marketing remains a key way for hotels to do this.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={6}>
                        <div className={styles.one_advantage}>
                            <img src={adv1} alt="one_advantage"/>
                            <h3>
                                Easy booking
                            </h3>
                            <p>
                                The booking process should include minimal steps.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className={styles.one_advantage}>
                            <img src={adv2} alt="one_advantage"/>
                            <h3>
                                Friendly interface
                            </h3>
                            <p>
                                A hotel booking engine with a good user-friendly.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className={styles.one_advantage}>
                            <img src={adv3} alt="one_advantage"/>
                            <h3>
                                Responsibility
                            </h3>
                            <p>
                                You should be able to add rooms to your system.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className={styles.one_advantage}>
                            <img src={adv1} alt="one_advantage"/>
                            <h3>
                                Quick order supply
                            </h3>
                            <p>
                                The booking process should include minimal steps.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}