import styles from './main.module.css'
import {Offer} from "./offer";
import {VideoSection} from "./video-section";
import {Benefits} from "./benefits";
import {Gallery} from "./gallery";
import {Feedback} from "./feedback";
import {Subscribe} from "./subscribe";

export const Main = () => {

    return (
        <main className={styles.main}>
            <Offer/>
            <VideoSection/>
            <Benefits/>
            <Gallery/>
            <Feedback/>
            <Subscribe/>
        </main>
    )
}