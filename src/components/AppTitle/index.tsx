import React from 'react'
import styles from './style.module.scss'

type NameProps = {
  name: string
}
export default function AppTitle({name}: NameProps) {
    const titleName = name === 'movie' ? '무비' : '뉴스'
  return (
    <h1 className={styles.titleStyle}>{titleName} 리스트</h1>
  )
}
