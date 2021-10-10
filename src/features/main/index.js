import styles from './main.module.css'
import {Offer} from "./offer";
import {VideoSection} from "./video-section";

export const Main = () => {

    return (
        <main className={styles.main}>
            <Offer/>
            <VideoSection/>
        </main>
    )
}