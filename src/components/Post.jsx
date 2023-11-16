import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/clesarjr.png" />
                    <div className={styles.authorInfo}>
                        <strong>Clésar Sapelli Junior</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="16 de Novembro às 08:13h" dateTime="2023-16-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Olá</p>
                <p>Teste projeto</p>
                <p><a href="#">link</a></p>
                <p><a href="#">#projeto</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <button type="submit">Publicar</button>
            </form>
        </article>
    )
}