import styles from './Input.module.css';

const input = props => {
    return (
    <div className={styles.search}>
        <input className={styles.input} placeholder={props.placeholder} value={props.value} onChange={props.onChange}></input>
        </div>
    )
}

export default input;