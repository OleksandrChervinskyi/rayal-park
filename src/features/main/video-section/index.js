import styles from './video-section.module.css'
import {Col, Container, Row} from "react-bootstrap";
import poster from '../../../app/pictures/main/Video-preview.png'
import videoBg from '../../../app/pictures/main/Video-bg.png'

export const VideoSection = () => {

    return (
        <section className={styles.video_main_section}>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} lg={7}>
                        <div className={styles.video_wrap}>
                            <img src={videoBg} alt="Office" className={styles.video_bg}/>
                            <video src="videofile.ogg" poster={poster} className={styles.video}/>
                        </div>
                    </Col>
                    <Col md={6} lg={5}>
                        <div className={styles.video_descriptions}>
                            <p>
                                Dream holidays
                            </p>
                            <h2>
                                Enjoy unforgettable experiences in dream hotels.
                            </h2>
                            <button className='global_bt'>
                                View more
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}