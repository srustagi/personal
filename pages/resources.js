import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/style.module.sass'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shiv Rustagi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={styles.content}>
        <h1 className={styles.title}>shivansh rustagi</h1>
        <div className={styles.linksContainer, styles.serious}>
          {/*<h4 className={styles.linkItem}><Link href='/thoughts'><a>blog</a></Link></h4>*/}
          <h4 className={styles.linkItem}><a href='/docs/shiv_rustagi_resume.pdf'>resume</a></h4>
          <h4 className={styles.linkItem}><Link href='/resources'><a>resources</a></Link></h4>
          <h4 className={styles.linkItem}><a href='https://linkedin.com/in/srustagi'>linkedin</a></h4>
          <h4 className={styles.linkItem}><a href='https://github.com/srustagi'>github</a></h4>
        </div>
        <div className={styles.linksContainer, styles.fun}>
          <h4 className={styles.linkItem, styles.flickr}><a href="https://www.flickr.com/photos/srustagi/">flickr</a></h4>
          <h4 className={styles.linkItem, styles.messenger}><a href="https://www.messenger.com/t/rustagi.shiv">messenger</a></h4>
          <h4 className={styles.linkItem, styles.keybase}><a href="https://keybase.io/srustagi">keybase</a></h4>
          <h4 className={styles.linkItem, styles.spotify}><a href="https://open.spotify.com/user/shivanshrustagi">spotify</a></h4>
          <h4 className={styles.linkItem, styles.strava}><a href="https://strava.com/athletes/shivansh">strava</a></h4>
          <h4 className={styles.linkItem, styles.twitter}><a href="https://twitter.com/shivrustagi/">twitter</a></h4>
        </div>
        <p className={styles.body}>
          my name is shiv rustagi, and i’m studying computer science and statistics at the <a href='https://www.soe.ucsc.edu/'>baskin school of engineering</a> at ucsc. i also run <a href='https://github.com/santacruzAI'>santa cruz artificial intelligence</a>, and cofounded <a href='https://180dc.org/branch/university-california-santa-cruz/'>180 degrees consulting at ucsc</a>.
          <br /><br />
          when i’m working, i love (trying) to solve complex natural language problems with deep learning. i’m currently messing around with devops at <a href='https://huddl.ai'>huddl.ai</a>, and previously optimized neural networks to run on embedded systems at <a href='https://www.icuro.com/'>icuro</a>.
          <br /><br />
          on my off days, i like to cycle, rock climb, read arxiv preprints, make pointless side projects, listen to music, take photos, and tout my opinions to anyone who will listen. you can gander at most of this activity on my socials.
        </p>
      </section>
    </>
  )
}

