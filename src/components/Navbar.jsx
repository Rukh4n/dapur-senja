import cfg from "../config.json";
import { Logo, Chevron, SearchIcon } from "./Icons.jsx";

export default function Navbar() {
  return (
    <nav>
      <div className="w">
        <a className="brand" href="#"><Logo />{cfg.nama}</a>
        <div className="menu">
          {cfg.menuNav.map((m) => (<a key={m} href="#menu">{m}<Chevron /></a>))}
          {cfg.tautanNav.map((m) => (<a key={m} href="#lokasi">{m}</a>))}
        </div>
        <SearchIcon />
      </div>
    </nav>
  );
}
