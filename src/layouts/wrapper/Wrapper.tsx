import React from 'react';
import styles from "./Wrapper.module.scss"

const Wrapper = (children: any) => {
    return (
        <div className={styles.wrapper}>
            {/* {[children]} */}
        </div>
    );
};

export default Wrapper;