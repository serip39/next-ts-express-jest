import Head from 'next/head'
import { Button } from 'react-bootstrap'
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
    <Button>test</Button>
  </div>
)

export default Home
