import { Post } from './components/post';
import { faker } from '@faker-js/faker/locale/pt_PT';
import { Header } from './components/Header/Header';

import './styles/global.css';
import styles from './components/App.module.css';
import { Sidebar } from './components/Sidebar/Sidebar';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author={faker.name.fullName()}
            content={faker.lorem.paragraph()}
          />
          <Post
            author={faker.name.fullName()}
            content={faker.lorem.paragraph()}
          />
          <Post
            author={faker.name.fullName()}
            content={faker.lorem.paragraph()}
          />
        </main>
      </div>

    </>
  )
}
