import Head from 'next/head';

import styles from '../../styles/common.module.css';
import formStyles from './login.module.css';

import { MainLayout } from '../../app/components/MainLayout';

export default function Login() {
  return (
    <MainLayout>
      <Head>
        <title>Login</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Login page</h1>
        <form className={formStyles.formWrapper}>
          <div className={formStyles.formRow}>
            <div className={formStyles.formLabelWrapper}>
              <label className={formStyles.formLabel} htmlFor="email">
                Email
              </label>
            </div>
            <input className={formStyles.formInput} id="email" type="email" />
          </div>
          <div className={formStyles.formRow}>
            <div className={formStyles.formLabelWrapper}>
              <label className={formStyles.formLabel} htmlFor="password">
                Password
              </label>
            </div>
            <input className={formStyles.formInput} id="password" type="password" />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
    </MainLayout>
  );
}
