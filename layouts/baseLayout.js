import Head from "next/head"
import Header from '../components/header'

function baseLayout({ children }) {
	return (
		<div>
			<Head>
				<title>Amazon Clone</title>
      </Head>
      <Header />
      {children}
		</div>
	)
}

export default baseLayout
