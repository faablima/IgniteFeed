import { useState } from 'react';

import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Coment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Coment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function HandleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.coment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/24557048?v=4" alt=""/>

      <div className={styles.comentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fábio Lima</strong>
              <time title="11 de Maio ás 08:13" dateTime="2023-05-11 08:13:38">Cerca de 1h atrás</time>
            </div>

            <button 
              onClick={HandleDeleteComment}
              title='Deletar Comentário'
            >
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}