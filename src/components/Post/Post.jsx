import { faker } from '@faker-js/faker/locale/pt_PT';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar />
          <div className={styles.authorInfo}>
            <strong>{faker.name.fullName()}</strong>
            <span>{faker.name.jobArea()}</span>
          </div>
        </div>

        <time title="11 de Maio as 06:12" dateTime="2022-05-11 06:12:00">
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>{faker.lorem.sentences()}</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}