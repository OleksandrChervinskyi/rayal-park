import styles from './subscribe.module.css'
import {Col, Container, Row} from "react-bootstrap";

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
                        <div className={styles.input_wrap}>
                            <input type="text" placeholder={'Enter your email address'} className={styles.input}/>
                            <button className='global_bt'>
                                Subscribe
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}