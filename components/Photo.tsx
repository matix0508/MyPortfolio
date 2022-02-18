import Image from 'next/image';
import React from 'react'
import styles from '../styles/Photo.module.scss';

export const Photo = () => {
  return (
    <div className={styles.photo}>
        <Image width={500} height={500} src={"/profile.jpg"} alt="profile"/>
    </div>
  )
}
