import { faker } from '@faker-js/faker/locale/pt_PT';
import { PencilLine, ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{faker.name.fullName()}</strong>
              <time title="11 de Maio as 06:12" dateTime="2022-05-11 06:12:00">
                Públicado há 1h
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{faker.lorem.sentences()}</p>

          <footer>
            <button>
              <ThumbsUp size={24} />
              Like <span>20</span>
            </button>
          </footer>
        </div>


      </div>
    </div>
  )
}