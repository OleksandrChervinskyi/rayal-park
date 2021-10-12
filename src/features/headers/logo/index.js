import logo from './logo.png'
import styles from './logo.module.css'

export const Logo = () => {

    return (
        <div className={styles.logo_wrap}>

            <span className={styles.logo_name}>
                <img src={logo} alt="rayal-park" className={styles.logo}/>
                Rayal Park
            </span>
        </div>
    )
}