import Head from 'next/head'
import Navbar from '../components/Navbar'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>sharing-cycle-app</title>
    </Head>
    <Navbar />
    <main>
      <h1>index page</h1>
    </main>
  </div>
)

export default Home
