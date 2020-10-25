import styles from "../styles/Home.module.css"
import Layout from "../layouts/baseLayout"
import HomeSlider from "../components/HomeSlider.js"

export default function Home() {
	return (
		<Layout>
      <div className={styles.container}>
				<HomeSlider />
      </div>
		</Layout>
	)
}
