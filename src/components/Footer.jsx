import cfg from "../config.json";
import { Logo } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <div className="brand"><Logo />{cfg.nama}</div>
        <p className="ad">{cfg.footerAlamat}<br />{cfg.alamat}</p>
        <div className="fc">
          {cfg.footer.map(([judul, tautan]) => (
            <div key={judul}><h4>{judul}</h4>{tautan.map((l) => (<a key={l} href="#">{l}</a>))}</div>
          ))}
        </div>
        <div className="bt">
          <span>© 2026 {cfg.nama}. Website contoh. Foto dari Pixabay.</span>
          <span>{cfg.instagram}</span>
        </div>
      </div>
    </footer>
  );
}
