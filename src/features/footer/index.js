import styles from './footer.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {Logo} from "../headers/logo";
import tg from '../../app/pictures/footer/tg.png'
import fb from '../../app/pictures/footer/fb.png'
import inn from '../../app/pictures/footer/in.png'
import {InputButton} from "../main/subscribe/input-button";


export const Footer = () => {
    return (
        <footer className={styles.section}>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className={styles.general_info}>
                            <Logo/>
                            <p className={styles.text}>
                                Travel deals xon hotels, flights, vacation packages.
                            </p>
                            <p className={styles.email}>
                                OleksandrChervinskyi2@gmail.com
                            </p>
                            <div className={styles.social}>
                                <a href="#">
                                    <img src={inn} alt="in"/>
                                </a>
                                <a href="#">
                                    <img src={tg} alt="telegram"/>
                                </a>
                                <a href="#">
                                    <img src={fb} alt="facebook"/>
                                </a>
                            </div>
                        </div>

                    </Col>
                    <Col lg={4}>
                        <div className={styles.pages}>
                            <div className={styles.main_pages}>
                                <a href="#">
                                    Home
                                </a>
                                <a href="#">
                                    Pages
                                </a>
                            </div>
                            <div className={styles.others_pages}>
                                <div className={styles.columns}>
                                    <a href="#">
                                        Accessibility
                                    </a>
                                    <a href="#">
                                        Lertifiotion
                                    </a>
                                    <a href="#">
                                        Communing
                                    </a>
                                </div>
                                <div className={styles.columns}>
                                    <a href="#">
                                        Knowledge
                                    </a>
                                    <a href="#">
                                        Blogs
                                    </a>
                                    <a href="#">
                                        Careers
                                    </a>
                                </div>


                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className={styles.subscribe}>
                            <p className={styles.subscribe_title}>
                                Subscribe
                            </p>
                            <div className={styles.subscribe_body}>
                                <InputButton/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}