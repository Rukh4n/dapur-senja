import { useEffect, useRef, useState } from "react";

// Animasi muncul saat di-scroll, dibuat dengan utilitas Tailwind (opacity, translate, transition).
export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          timer = setTimeout(() => setDone(true), 800 + delay * 1000);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(timer); };
  }, [delay]);

  const motion = done ? "duration-300" : "duration-700 delay-(--d)";
  const state = show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  return (
    <Tag ref={ref} className={`transition ease-out ${motion} ${state} ${className}`.trim()} style={{ "--d": `${delay}s`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
