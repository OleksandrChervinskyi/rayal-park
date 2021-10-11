import styles from './gallery.module.css'
import {Col, Container, Row} from "react-bootstrap";
import room1 from '../../../app/pictures/main/Room1.png';
import room2 from '../../../app/pictures/main/Room2.png';
import room3 from '../../../app/pictures/main/Room3.png';
import room4 from '../../../app/pictures/main/Room4.png';
import room5 from '../../../app/pictures/main/Room5.png';


export const Gallery = () => {

    return (
        <section className={styles.gallery_section}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className={styles.gallery_descriptions}>
                            <h2 className={styles.gallery_title}>
                                About hotel gallery
                            </h2>
                            <p className={styles.gallery_text}>
                                While some of these examples are real – actually offering guests a stay in the locations
                                advertised – it’s mainly just a way.
                            </p>
                            <button className='global_bt'>
                                View more
                            </button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.rooms}>
                            <img src={room2} alt="Room"/>
                            <div className={styles.room_info}>
                                <div className={styles.room_info_text}>
                                    <h5>
                                        Lux: Room
                                    </h5>
                                    <p>
                                        $60 night
                                    </p>
                                </div>
                                <button className='global_bt'>
                                    Book now
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.rooms}>
                            <img src={room3} alt="Room"/>
                            <div className={styles.room_info}>
                                <div className={styles.room_info_text}>
                                    <h5>
                                        Mini Room
                                    </h5>
                                    <p>
                                        $70 night
                                    </p>
                                </div>
                                <button className='global_bt'>
                                    Book now
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.rooms}>
                            <img src={room4} alt="Room"/>
                            <div className={styles.room_info}>
                                <div className={styles.room_info_text}>
                                    <h5>
                                        Standard Room
                                    </h5>
                                    <p>
                                        $65 night
                                    </p>
                                </div>
                                <button className='global_bt'>
                                    Book now
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.rooms}>
                            <img src={room5} alt="Room"/>
                            <div className={styles.room_info}>
                                <div className={styles.room_info_text}>
                                    <h5>
                                        Single Room
                                    </h5>
                                    <p>
                                        $55 night
                                    </p>
                                </div>
                                <button className='global_bt'>
                                    Book now
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.rooms}>
                            <img src={room1} alt="Room"/>
                            <div className={styles.room_info}>
                                <div className={styles.room_info_text}>
                                    <h5>
                                        Elite Room
                                    </h5>
                                    <p>
                                        $90 night
                                    </p>
                                </div>
                                <button className='global_bt'>
                                    Book now
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}