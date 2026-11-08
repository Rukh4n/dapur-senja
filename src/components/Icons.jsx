import cfg from "../config.json";
import { wa } from "../utils.js";

const base = { viewBox: "0 0 48 48", fill: "none", stroke: "var(--a)", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round" };

const kategori = {
  kopi: (<><path className="t" d="M9 19h24v10a10 10 0 0 1-10 10h-4A10 10 0 0 1 9 29z" /><path d="M33 22h3a5 5 0 0 1 0 10h-4M16 13c-2-3 2-4 0-8M24 13c-2-3 2-4 0-8" /></>),
  pasta: (<><path className="t" d="M5 28h38a19 13 0 0 1-38 0z" /><path d="M12 28c3-9 8-9 10 0s7-9 10 0M35 5v9M31 5v5a4 4 0 0 0 8 0V5M35 14v9" /></>),
  burger: (<><path className="t" d="M7 22a17 13 0 0 1 34 0z" /><path d="M6 27q4 4 9 0t9 0 9 0 9 0M8 32h32" /><path className="t" d="M8 36h32v1a5 5 0 0 1-5 5H13a5 5 0 0 1-5-5z" /></>),
  don: (<><path className="t" d="M5 23h38a19 17 0 0 1-38 0z" /><circle cx="16" cy="19" r="2.5" /><circle cx="23" cy="17" r="2.5" /><circle cx="30" cy="19" r="2.5" /><path d="M30 14 41 3M34 15 45 5" /></>),
  camilan: (<><path className="t" d="M12 22h24l-3 20H15z" /><path d="M17 22V9M23 22V5M29 22V8M34 22V12" /></>),
  sosis: (<g transform="rotate(-35 24 24)"><rect className="t" x="6" y="18" width="36" height="12" rx="6" /><path d="M18 18v12M26 18v12M34 18v12" /></g>)
};
export const CategoryIcon = ({ name }) => <svg {...base}>{kategori[name] || kategori.kopi}</svg>;

const trust = {
  bintang: <path d="M20 5l4.5 9.5 10.5 1.5-7.6 7.3 1.8 10.4L20 28.7 10.8 33.7l1.8-10.4L5 16l10.5-1.5z" />,
  perisai: (<><path d="M20 4 6 9v10c0 8.5 6 14.5 14 17 8-2.5 14-8.5 14-17V9z" /><path d="m14 20 5 5 8-9" /></>),
  kotak: (<><path d="M5 12 20 5l15 7v16L20 35 5 28z" /><path d="M5 12l15 7 15-7M20 19v16" /></>)
};
export const TrustIcon = ({ name }) => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{trust[name]}</svg>
);

export const Logo = () => (
  <svg viewBox="0 0 40 40" aria-hidden="true">
    <rect width="40" height="40" rx="11" fill="var(--a)" />
    <circle cx="20" cy="17" r="8.5" fill="#ffd9a8" />
    <path d="M11 22h18v4a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7z" fill="#fff" />
    <path d="M29 24h1.5a2.5 2.5 0 0 1 0 5H28" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Chevron = () => (
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M3 4.5 6 7.5 9 4.5" /></svg>
);

export const SearchIcon = () => (
  <svg className="sr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" role="img" aria-label="Cari">
    <circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" />
  </svg>
);

export const ChatButton = () => (
  <a className="chat animate-soft" href={wa()} target="_blank" rel="noopener noreferrer" aria-label={`Chat WhatsApp ${cfg.nama}`}>
    <svg viewBox="0 0 24 24"><path d="M4 3h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-5 4V4a1 1 0 0 1 1-1z" /></svg>
  </a>
);
