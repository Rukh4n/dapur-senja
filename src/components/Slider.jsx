import { useEffect, useRef, useState } from "react";
import cfg from "../config.json";
import { img, wa, btnAnim } from "../utils.js";

export default function Slider() {
  const n = cfg.slide.length;
  const [i, setI] = useState(0);
  const [tick, setTick] = useState(0);
  const startX = useRef(0);
  const go = (k) => { setI((k + n) % n); setTick((t) => t + 1); };

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % n), 5000);
    return () => clearInterval(t);
  }, [tick, n]);

  const onEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
  };

  return (
    <div className="slider" aria-roledescription="carousel">
      <div className="track transition-transform duration-700 ease-[cubic-bezier(.65,0,.25,1)]" style={{ transform: `translateX(-${i * 100}%)` }}
        onTouchStart={(e) => (startX.current = e.touches[0].clientX)} onTouchEnd={onEnd}>
        {cfg.slide.map((s) => (
          <div key={s.judul} className="slide"
            style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.8) 20%,rgba(0,0,0,.05)),url(${img(s.foto)})` }}>
            <div className="tx">
              <h1>{s.judul}</h1>
              <p>{s.sub}</p>
              <a className={`btn sm ${btnAnim}`} href={wa(s.judul)} target="_blank" rel="noopener noreferrer">{s.tombol} →</a>
            </div>
          </div>
        ))}
      </div>
      <button className="arr l" onClick={() => go(i - 1)} aria-label="Sebelumnya">‹</button>
      <button className="arr r" onClick={() => go(i + 1)} aria-label="Berikutnya">›</button>
      <div className="dots">
        {cfg.slide.map((s, j) => (
          <i key={s.judul} className={`transition-all duration-300 ${j === i ? "on" : ""}`} role="button" tabIndex={0} aria-label={`Slide ${j + 1}`}
            onClick={() => go(j)} onKeyDown={(e) => e.key === "Enter" && go(j)} />
        ))}
      </div>
    </div>
  );
}
