import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/juliherms.png" />
                    <div className={styles.authorInfo}>
                        <strong>Juliherms Vasconcelos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1hs</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return</p>
                <p><a href="">  Segue o link aqui</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
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