import Link from 'next/link'

export const Navbar = (): JSX.Element => (
  <div className="container">
    <ul className="nav">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link active">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/about">
          <a className="nav-link active">About</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/addUser">
          <a className="nav-link active">ユーザー登録</a>
        </Link>
      </li>
    </ul>
  </div>
)

export default Navbar
