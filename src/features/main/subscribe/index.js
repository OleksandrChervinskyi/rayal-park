import styles from './subscribe.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {InputButton} from "./input-button";

export const Subscribe = () => {
    return (
        <section className={styles.section}>
            <Container>
                <Row className='text-center'>
                    <Col>
                        <div className={styles.wrap}>
                            <p className={styles.text}>
                                Stay in Touch
                            </p>
                            <h2 className={styles.title}>
                                Join our email. First to know about specials,events and more!
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputButton/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}