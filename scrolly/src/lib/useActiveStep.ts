import { useEffect, useRef, useState } from "react";

/** Tracks which scroll step is centered; syncs URL hash for shareable links. */
export function useActiveStep(stepIds: string[], initial = 0) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const i = stepIds.indexOf(hash);
    if (i >= 0) setActive(i);
  }, [stepIds]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        let best: { i: number; ratio: number } | null = null;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = Number((e.target as HTMLElement).dataset.step);
          if (Number.isNaN(i)) continue;
          if (!best || e.intersectionRatio > best.ratio) best = { i, ratio: e.intersectionRatio };
        }
        if (best) {
          setActive(best.i);
          const id = stepIds[best.i];
          if (id && location.hash !== `#${id}`) {
            history.replaceState(null, "", `#${id}`);
          }
        }
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [stepIds]);

  const setRef = (i: number) => (el: HTMLElement | null) => {
    refs.current[i] = el;
  };
  return { active, setRef };
}
