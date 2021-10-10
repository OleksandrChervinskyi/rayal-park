import logo from './logo.png'
import styles from './logo.module.css'

export const Logo = () => {

    return (
        <div className={styles.logo_wrap}>
            <img src={logo} alt="rayal-park" className={styles.logo}/>
            <span className={styles.logo_name}>
                Rayal Park
            </span>
        </div>
    )
}