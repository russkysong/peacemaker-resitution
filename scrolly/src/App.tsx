import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Graphic, type VizKey } from "./Graphic";
import { useActiveStep } from "./lib/useActiveStep";
import { STEPS } from "./story";

const INTERACTIVE: Set<VizKey> = new Set(["calculator", "forgiveness", "heartCourt", "wizard"]);

export default function App() {
  const [hash, setHash] = useState(() => location.hash);
  useEffect(() => {
    const onHash = () => setHash(location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const ids = STEPS.map((s) => s.id);
  const hashIdx = ids.indexOf(hash.replace("#", ""));
  const initial = hashIdx >= 0 ? hashIdx : 0;
  const { active, setRef } = useActiveStep(ids, initial);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  const solo = hash.match(/^#solo(\d+)/);
  if (solo) {
    const i = Math.min(Number(solo[1]), STEPS.length - 1);
    const s = STEPS[i];
    return (
      <div className="solo">
        <div className="step-card">
          <div className="step-kicker">{s.kicker}</div>
          <h2>{s.title}</h2>
          {s.body}
        </div>
        <div className="solo-stage">
          <Graphic viz={s.viz} interactive={INTERACTIVE.has(s.viz)} />
        </div>
      </div>
    );
  }

  const step = STEPS[active];

  function goStep(i: number) {
    const el = document.getElementById(ids[i]);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <>
      <header className="topbar">
        <div className="brand">
          Restitution &amp; Court <span>· a biblical conflict guide</span>
        </div>
        <motion.div className="progress" style={{ scaleX: progress }} />
      </header>

      <nav className="step-dots" aria-label="Section navigation">
        {STEPS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`step-dot${i === active ? " active" : ""}`}
            aria-label={s.title}
            aria-current={i === active ? "step" : undefined}
            onClick={() => goStep(i)}
          />
        ))}
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-kicker">A scroll-through guide</p>
          <h1>
            Making harm<br />
            <em>right</em>
          </h1>
          <p className="hero-sub">
            What does repair look like when you have wronged someone — and when is civil court the last door, not the
            first? Based on Ken Sande's <em>The Peacemaker</em>, Appendices C &amp; D.
          </p>
          <div className="hero-scroll" aria-hidden>
            scroll to begin ↓
          </div>
        </div>
      </section>

      <main className="scrolly">
        <div className="steps">
          {STEPS.map((s, i) => (
            <section key={s.id} id={s.id} className="step" data-step={i} ref={setRef(i)}>
              <div className="step-card">
                <div className="step-kicker">{s.kicker}</div>
                <h2>{s.title}</h2>
                {s.body}
              </div>
            </section>
          ))}
        </div>
        <aside className="stage">
          <Graphic
            viz={step.viz}
            index={active}
            total={STEPS.length}
            interactive={INTERACTIVE.has(step.viz)}
          />
        </aside>
      </main>

      <section className="close">
        <div className="close-inner">
          <p className="close-kicker">Closing synthesis</p>
          <h2>Restore, don't retaliate</h2>
          <p>
            Repair harm where you can; treat the courtroom as the last door, not the first. The point is to refuse the
            false choice between <b>justice</b> and <b>mercy</b>.
          </p>
          <p className="close-coda">
            Mercy can release a debt; restitution explains why repair still matters.
          </p>
        </div>
      </section>

      <footer className="foot">
        <span>Based on Ken Sande, <em>The Peacemaker</em> (3rd ed.) · russkysong.com</span>
      </footer>
    </>
  );
}
