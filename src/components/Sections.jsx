import cfg from "../config.json";
import { img, wa, maps, btnAnim } from "../utils.js";
import Reveal from "./Reveal.jsx";
import { CategoryIcon, TrustIcon } from "./Icons.jsx";

const Btn = ({ href, children, small }) => (
  <a className={`btn ${btnAnim}${small ? " sm" : ""}`} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

function Card({ p, i = 0, grey, harga = true, deskripsi, tombol }) {
  return (
    <Reveal className="pc group hover:-translate-y-1.5 hover:shadow-xl" delay={(i % 4) * 0.08} style={grey ? { background: "var(--bg2)" } : undefined}>
      <div className="im"><img className="transition-transform duration-500 group-hover:scale-110" src={img(p.foto)} alt={p.nama} loading="lazy" /></div>
      <h3>{p.nama}</h3>
      {harga && p.harga && <div className="pr">{p.harga}</div>}
      {deskripsi && <p style={harga ? undefined : { marginTop: 6 }}>{deskripsi}</p>}
      <Btn href={wa(p.nama)}>{tombol}</Btn>
    </Reveal>
  );
}

export const Categories = () => (
  <section id="menu"><div className="w">
    <Reveal as="h2">{cfg.kategoriJudul}</Reveal><p className="lead" />
    <div className="cats">
      {cfg.kategori.map(([nama, ikon]) => (<a key={nama} className="cat transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg" href="#terbaru"><CategoryIcon name={ikon} />{nama}</a>))}
    </div>
  </div></section>
);

export const Terbaru = () => (
  <section className="g" id="terbaru"><div className="w">
    <Reveal as="h2">{cfg.terbaruJudul}</Reveal><p className="lead">{cfg.terbaruSub}</p>
    <div className="g4">{cfg.terbaru.map((p, i) => (<Card key={p.nama} p={p} i={i} tombol={`${p.tombol} →`} />))}</div>
  </div></section>
);

export const Signature = () => (
  <section><div className="w big">
    <Reveal as="h2">{cfg.signatureJudul}</Reveal><p className="lead" />
    <div className="g2">
      {cfg.signature.map((p, i) => (<Card key={p.nama} p={p} i={i} grey deskripsi={p.deskripsi} tombol={`Pesan ${p.nama.split(" ")[0]}`} />))}
    </div>
  </div></section>
);

export const Pilihan = () => (
  <section className="g"><div className="w">
    <Reveal as="h2">{cfg.pilihanJudul}</Reveal><p className="lead" />
    <div className="g3">
      {cfg.pilihan.map((p, i) => (<Card key={p.nama} p={p} i={i} harga={false} deskripsi={p.deskripsi} tombol={p.tombol} />))}
    </div>
  </div></section>
);

export function Feature() {
  const f = cfg.fitur, s = f.samping;
  return (
    <section><div className="w">
      <Reveal as="h2">Unggulan {cfg.nama}</Reveal><p className="lead" />
      <div className="feat">
        <Reveal className="fb" style={{ backgroundImage: `linear-gradient(100deg,rgba(0,0,0,.8) 20%,rgba(0,0,0,.15)),url(${img(f.foto)})` }}>
          <h3>{f.judul}</h3><p>{f.teks}</p>
          <div className="chips">{f.chips.map((c) => (<span key={c}>{c}</span>))}</div>
        </Reveal>
        <Reveal className="fs">
          <div className="im"><img src={img(s.foto)} alt={s.nama} loading="lazy" /></div>
          <h3>{s.nama}</h3><p>{s.deskripsi}</p>
          <Btn href={wa(s.nama)}>{s.tombol}</Btn>
        </Reveal>
      </div>
    </div></section>
  );
}

export const Trust = () => (
  <div className="trust"><div className="w">
    {cfg.jaminan.map(([ikon, judul, teks]) => (
      <Reveal key={judul} className="tr"><TrustIcon name={ikon} /><div><b>{judul}</b><span>{teks}</span></div></Reveal>
    ))}
  </div></div>
);

export function Support() {
  const d = cfg.dukungan;
  return (
    <section className="g" id="lokasi"><div className="w">
      <Reveal as="h2">{d.judul}</Reveal><p className="lead">{cfg.alamat}</p>
      <div className="g2">
        <Reveal className="sup"><h3>{d.kiri[0]}</h3><p>{d.kiri[1]}</p><Btn small href={maps}>{d.kiri[2]}</Btn></Reveal>
        <Reveal className="sup"><h3>{d.kanan[0]}</h3><p>{d.kanan[1]}</p><Btn small href={wa("mau reservasi meja")}>{d.kanan[2]}</Btn></Reveal>
      </div>
    </div></section>
  );
}

export const News = () => (
  <section><div className="w">
    <div className="top"><Reveal as="h2">{cfg.beritaJudul}</Reveal><a href="#">Lihat semua ›</a></div><p className="lead" />
    <div className="g3">
      {cfg.berita.map((n, i) => (
        <Reveal key={n.judul} as="a" href="#" className="news group hover:-translate-y-1.5 hover:shadow-xl" delay={(i % 4) * 0.08}>
          <div className="im"><img className="transition-transform duration-500 group-hover:scale-110" src={img(n.foto)} alt={n.judul} loading="lazy" /></div>
          <div className="bd"><h3>{n.judul}</h3><small>● {n.tanggal}</small></div>
        </Reveal>
      ))}
    </div>
  </div></section>
);
