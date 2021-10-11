import styles from './main.module.css'
import {Offer} from "./offer";
import {VideoSection} from "./video-section";
import {Benefits} from "./benefits";

export const Main = () => {

    return (
        <main className={styles.main}>
            <Offer/>
            <VideoSection/>
            <Benefits/>
        </main>
    )
}