import Head from 'next/head'
import Image from 'next/image'
import fbt, {init, IntlVariations} from 'fbt'
import styles from '../styles/Home.module.css'

const viewerContext = {
  GENDER: IntlVariations.GENDER_UNKNOWN,
  locale: 'en_US',
};

init({
  translations: require('../translations/out/en_US.json'),
  hooks: {
    getViewerContext: () => viewerContext,
  },
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div>This&nbsp;renders&nbsp;<code>nbsp</code>&nbsp;correctly&nbsp;✅</div>
        <div><fbt desc="test1">This&nbsp;DOESN&apos;T&nbsp;render&nbsp;<code>nbsp</code>&nbsp;correctly&nbsp;❌</fbt></div>

        <div>Other HTML entities: &times; &amp; &lt; &quot; &darr; &#8451; &#8457;</div>
        <div><fbt desc="test2">Other HTML entities: &times; &amp; &lt; &quot; &darr; &#8451; &#8457;</fbt></div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
