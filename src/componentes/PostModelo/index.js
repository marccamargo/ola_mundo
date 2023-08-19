import styles from './PostModelo.module.css';

export default function PostModelo({ fotoCapa, título, children }) {
  return (
    <article className={styles.PostModeloContainer}>
      <div className={styles.fotoCapa} style={{backgroundImage: `url(${fotoCapa})`}} />
      <h2 className={styles.Título}>{título}</h2>
      <div className={styles.PostConteudoContainer}>{children}</div>
    </article>
  )
}
