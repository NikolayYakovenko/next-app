import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Login page</h1>
        <form >
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email"/>
          </div>
          <div>
            <label htmlFor="password">Passoword</label>
            <input id="password" type="password"/>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
    </div>
  )
}
