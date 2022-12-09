import { faker } from '@faker-js/faker/locale/pt_PT';
import { PencilLine } from 'phosphor-react';

import sidebarBg from '../../assets/sidebar-bg.svg';
import { Avatar } from '../Avatar/Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={sidebarBg} alt="" />

      <div className={styles.profile}>
        <Avatar />
        <strong>{faker.name.fullName()}</strong>
        <span>{faker.name.jobArea()}</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}