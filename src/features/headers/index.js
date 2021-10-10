import {Logo} from "./logo";
import {Col, Container, Row} from "react-bootstrap";
import {Nav} from "./nav";
import {BookNowBt} from "./book-now-bt/book-now-bt";
import styles from './headers.module.css'

export const Headers = () => {
    return (
        <div className={styles.header}>


            <Container>
                <Row className="align-items-center">
                    <Col lg={3} md={4}>
                        <Logo/>
                    </Col>
                    <Col lg={7} md={5}>
                        <Nav/>
                    </Col>
                    <Col lg={2} md={3} className='d-none d-md-flex'>
                        <BookNowBt/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}