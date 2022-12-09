import { faker } from '@faker-js/faker/locale/pt_PT';

import styles from './Avatar.module.css';

export function Avatar({
  hasBorder = true,
  src = faker.image.cats(100, 100, true)
}) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src} alt=""
    />
  )
}