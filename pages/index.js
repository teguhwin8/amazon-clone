import styles from "../styles/Home.module.css"
import Layout from "../layouts/baseLayout"

export default function Home() {
	return (
		<Layout>
      <div className={styles.container}>
        <h1>Hi, I am a homepage</h1>
      </div>
		</Layout>
	)
}
