import { Fragment } from 'react';
import styles from './Button.module.css';

const Button = props => {
    return(
        <Fragment key={props.key}>
        <button disabled={props.disabled} onClick={props.clickHandler} className={styles.button}>{props.value}</button>
        </Fragment>
    )
}

export default Button;