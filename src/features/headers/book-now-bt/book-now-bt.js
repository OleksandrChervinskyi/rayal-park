import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from './book-now-bt.module.css'

export const BookNowBt = () => {
    return (
        <>
            <button className='global_bt'>
                <Link to={'/testimonials'}>
                    Book now
                </Link>
            </button>
        </>
    )
}