import styles from "./subscribe.module.css";

export const InputButton = () => {
    return (
        <div className={styles.input_wrap}>
            <input type="text" placeholder={'Enter your email address'} className={styles.input}/>
            <button className='global_bt'>
                Subscribe
            </button>
        </div>
    )
}