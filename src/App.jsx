import styles from './App.module.css'
import './global.css'

import { Post } from './Post';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            autor="Clésar Sapelli Junior" 
            conteudo="teste 123"
          />
          <Post 
            autor="Junior" 
            conteudo="teste 321"
          />
        </main>
      </div>
    </div>
  )
}
