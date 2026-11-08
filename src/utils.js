import cfg from "./config.json";

export const btnAnim = "transition duration-200 hover:scale-105 hover:bg-(--a)";
export const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;
export const wa = (teks) =>
  `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(cfg.pesanWA + (teks ? " " + teks : ""))}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cfg.nama + " " + cfg.alamat)}`;
