import React, { FC } from 'react'
import styles from '../styles/Card.module.scss';

interface ICard {
    title: string
}

export const Card:FC<ICard> = ({title, children}) => {
  return (
    <div className={styles.card}>
        <div className={styles.card__header}>
            {title}
        </div>
        <div className={styles.card__body}>
            {children}
        </div>
        <div className={styles.card__footer}>
            
        </div>
    </div>
  )
}
