import React, { useRef, useEffect } from 'react';
import styles from "./Popup.module.scss"
const Popup = (props: any) => {
  const popupRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(popupRef.current && popupRef.current.contains(event.target as Node))
      if (props.isOpen && popupRef.current && !popupRef.current.contains(event.target as Node)) {
        props.onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  },[props.isOpen, props.onClose])

    // const overlayRef = useRef<HTMLDivElement | null>(null);
    // const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //   if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
    //     props.onClose();
    //   }
    // };
    return (
        <div className={styles.modalOverlay} style={{ display: props.isOpen ? 'inherit' : 'none' }}  ref={popupRef}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>{props.title}</h2>
              {/* <button onClick={props.onClose}>X</button> */}
            </div>
            <div className={styles.modalBody}>
              {props.children}
            </div>
          </div>
        </div>
    )
}

export default Popup