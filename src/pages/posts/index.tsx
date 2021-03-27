import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março 2021</time>
            <strong>React para Iniciantes</strong>
            <p>Se você acha que a documentação do React vai em um ritmo mais rápido do que você está acostumado, confira este resumo do React por Tania Rascia. Ele introduz os conceitos React mais importantes de maneira detalhada e amigável a quem é iniciante. Assim que estiver pronto, experimente a documentação novamente!</p>
          </a>
          <a>
            <time>12 de março 2021</time>
            <strong>React para Iniciantes</strong>
            <p>Se você acha que a documentação do React vai em um ritmo mais rápido do que você está acostumado, confira este resumo do React por Tania Rascia. Ele introduz os conceitos React mais importantes de maneira detalhada e amigável a quem é iniciante. Assim que estiver pronto, experimente a documentação novamente!</p>
          </a>
          <a>
            <time>12 de março 2021</time>
            <strong>React para Iniciantes</strong>
            <p>Se você acha que a documentação do React vai em um ritmo mais rápido do que você está acostumado, confira este resumo do React por Tania Rascia. Ele introduz os conceitos React mais importantes de maneira detalhada e amigável a quem é iniciante. Assim que estiver pronto, experimente a documentação novamente!</p>
          </a>
        </div>
      </main>
    </>
  );
}