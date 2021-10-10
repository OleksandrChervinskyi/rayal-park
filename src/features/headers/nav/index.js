import {Link} from "react-router-dom";
import styles from './nav.module.css'

export const Nav = () => {

    return (
        <div className={styles.nav}>
            <Link to={'/'}>
                Home
            </Link>
            <Link to={'/features'}>
                Features
            </Link>
            <Link to={'/gallary'}>
                Gallary
            </Link>
            <Link to={'/testimonials '}>
                Testimonials
            </Link>
        </div>
    )
}