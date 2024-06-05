
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
    <div className="container-fluid">
      <Link className="navbar-brand" href="#">
        
        <img src="/img/logo.png" width={60} height={60} className='logo' alt='logo'  />

      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/">Home page</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"href="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/register"> register </Link>
          </li>
        </ul>
        <span className="navbar-text">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         



            <Link className="btn btn-outline-info mx-3"href="/login">login</Link>
          </li>
        <li className="nav-item">
            <Link className="btn btn-outline-primary mx-3" href="/register"> register </Link>
          </li> </ul>

          
        </span>
      </div>
    </div>
  </nav>
  );
}
