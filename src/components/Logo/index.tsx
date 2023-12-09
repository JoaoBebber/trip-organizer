import { MapPin } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.css'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <span>Trip</span>
      <MapPin size={32} />
      <span>Organizer</span>
    </div>
  )
}
