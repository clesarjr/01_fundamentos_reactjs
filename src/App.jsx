import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post 
        autor="Clésar Sapelli Junior" 
        conteudo="teste 123"
      />
      <Post 
        autor="Junior" 
        conteudo="teste 321"
      />
    </div>
  )
}
