import {Col, Container, Row} from "react-bootstrap";
import style from './offer.module.css'

export const Offer = () => {


    return (
        <section className={style.offer}>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className={style.main_offer}>
                            <h4 className={style.serenity}>
                                Serenity
                            </h4>
                            <h1 className={style.credo}>
                                Stay with us feel like <span>home</span>.
                            </h1>
                            <p className={style.credo_under_text}>
                                Pet-friendly hotels are becoming increasingly popular; appealing to travellers who can’t
                                bear to be parted.
                            </p>
                            <button className='global_bt'>
                                Read more
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={8}>
                        <div className={style.room_info}>
                            <div className={style.room_info_chunk}>
                                <p>
                                    Check in
                                </p>
                                <time dateTime={'10.10.2021'}>
                                    10 Okt 2021
                                </time>
                            </div>
                            <div className={style.room_info_chunk}>
                                <p>
                                    Check out
                                </p>
                                <time dateTime={'11.10.2021'}>
                                    11 Okt 2021
                                </time>
                            </div>
                            <div className={style.room_info_chunk}>
                                <p>
                                    Person
                                </p>
                                <time dateTime={'10.10.2021'}>
                                    2 Adults 1 kid
                                </time>
                            </div>
                            <button className='global_bt offer_bt'>
                                Find room
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>


    )
}