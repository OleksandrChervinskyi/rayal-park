import styles from './main.module.css'
import {Offer} from "./offer";

export const Main = () => {

    return (
        <div className={styles.main}>
            <Offer/>
        </div>
    )
}