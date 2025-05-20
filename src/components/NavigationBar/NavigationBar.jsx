import { NavigationButton } from 'src/components/NavigationButton/NavigationButton'

import styles from './NavigationBar.module.scss'

export const NavigationBar = ({ items, onButtonClick }) => (
  <section className={styles['nav-bar']}>
    {items?.map(({ id, name }, idx) => (
      <NavigationButton key={id} title={name} handleClick={() => onButtonClick(idx)} />
    ))}
  </section>
)