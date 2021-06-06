import "../App.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link style={{ textDecoration: 'none' }} to="/"><img src="/images/logo.png" /></Link>
      <div className="mainNavItems">
        <Link style={{ textDecoration: 'none' }} to="/tesla"><h1>Tesla</h1></Link>
        <Link style={{ textDecoration: 'none' }} to="/crypto"><h1>Crypto</h1></Link>
        <Link style={{ textDecoration: 'none' }} to="/memes"><h1>Memes</h1></Link>
      </div>

      <h1>About</h1>
    </div>
  );
}
