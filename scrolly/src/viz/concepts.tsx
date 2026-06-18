import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";

export function OverviewCards() {
  return (
    <div className="concept overview-viz">
      <div className="overview-panel tone-gold">
        <span className="panel-label">Part I</span>
        <h4>Principles of Restitution</h4>
        <p>When you have caused harm, repair is concrete. The Law of Moses ties penalty to intent, repentance, and timing.</p>
      </div>
      <div className="overview-panel tone-red">
        <span className="panel-label">Part II</span>
        <h4>When Is It Right to Go to Court?</h4>
        <p>Court should not be the first instinct between believers. Church remedies come first; civil authority last.</p>
      </div>
    </div>
  );
}

const PURPOSES = [
  { n: "1", title: "Restore the victim", body: "Put the injured party back where they were before the harm.", tone: "blue" },
  { n: "2", title: "Protect society", body: "Penalties deter others and uphold public order.", tone: "green" },
  { n: "3", title: "Free the offender", body: "Paying what is owed clears the conscience and ends the debt.", tone: "gold" },
  { n: "4", title: "Honor God", body: "Justice reflects the character of the God who commands repair.", tone: "red" },
];

export function RestitutionPurposes() {
  return (
    <div className="concept purpose-grid">
      {PURPOSES.map((p, i) => (
        <motion.div
          key={p.n}
          className={`purpose-card tone-${p.tone}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07 }}
        >
          <span className="purpose-num">{p.n}</span>
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </motion.div>
      ))}
    </div>
  );
}

type Rung = { mult: string; title: string; sub: string; ref: string; color: string; w: string; story: string };

const RUNGS: Rung[] = [
  {
    mult: "repair",
    title: "Unintentional damage",
    sub: "Repair or replace what was lost.",
    ref: "Exod. 22:5–6",
    color: "#9aa4bb",
    w: "20%",
    story: "Livestock strays into a field. No theft, just responsibility. Gen. 31:39",
  },
  {
    mult: "+20%",
    title: "Intentional, repented first",
    sub: "Value plus a one-fifth penalty.",
    ref: "Lev. 6:1–5",
    color: "#6f7da6",
    w: "24%",
    story: "Conscience caught you before anyone else. Luke 19:8",
  },
  {
    mult: "2×",
    title: "Caught with the goods",
    sub: "Return the property and its equal value.",
    ref: "Exod. 22:4",
    color: "#4f6498",
    w: "40%",
    story: "The stolen item is found alive in your hands.",
  },
  {
    mult: "4×",
    title: "Caught after disposing",
    sub: "Repay at least four times the value.",
    ref: "Exod. 22:1",
    color: "#3a5184",
    w: "80%",
    story: "Nathan's parable: David sentences himself to fourfold. 2 Sam. 12:1–6",
  },
  {
    mult: "5×",
    title: "Hard to replace",
    sub: "Repay five times its value.",
    ref: "Exod. 22:1",
    color: "#2a3f6b",
    w: "100%",
    story: "Steal and slaughter an ox, a family's livelihood.",
  },
];

export function RestitutionScale() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="concept scale-viz">
      {RUNGS.map((r, i) => (
        <button
          key={i}
          type="button"
          className={`rung${open === i ? " open" : ""}`}
          style={{ "--c": r.color, "--w": r.w } as CSSProperties}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="fill" />
          <div className="rung-main">
            <div className="mult">{r.mult}</div>
            <div className="rb">
              <h4>{r.title}</h4>
              <p>{r.sub}</p>
            </div>
            <div className="ref">{r.ref}</div>
          </div>
          {open === i ? <div className="rung-story"><p>{r.story}</p></div> : null}
        </button>
      ))}
      <div className="scale-axis">
        <span>restoration</span>
        <span>deterrence</span>
      </div>
    </div>
  );
}

export function FlipCards() {
  const cards = [
    {
      front: "Luke 19 · Zacchaeus",
      teaser: "A tax collector who met Jesus",
      verse: '"Look, Lord, half of my possessions I give to the poor, and if I have cheated anyone, I will repay it fourfold."',
      cite: "Luke 19:8 BSB",
    },
    {
      front: "Numbers 5:7",
      teaser: "Confess first, then repay",
      verse: '"He must make full restitution, add a fifth to its value, and give all this to the one he has wronged."',
      cite: "Numbers 5:7 BSB",
    },
    {
      front: "Exodus 22:1",
      teaser: "When repentance comes too late",
      verse: '"If a man steals an ox or a sheep and slaughters or sells it, he shall repay five oxen for an ox and four sheep for a sheep."',
      cite: "Exodus 22:1 BSB",
    },
  ];
  return (
    <div className="concept flips flips-three">
      {cards.map((c, i) => (
        <FlipCard key={i} {...c} />
      ))}
    </div>
  );
}

function FlipCard({ front, teaser, verse, cite }: { front: string; teaser: string; verse: string; cite: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`flip${flipped ? " flipped" : ""}`}
      role="button"
      tabIndex={0}
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }}
    >
      <div className="flip-inner">
        <div className="flip-face flip-front">
          <div className="cite">{front}</div>
          <div className="teaser">{teaser}</div>
          <div className="hintf">Tap to reveal</div>
        </div>
        <div className="flip-face flip-back">
          <div className="verse">{verse}</div>
          <div className="cite">{cite}</div>
        </div>
      </div>
    </div>
  );
}

export function ThreeViews() {
  const views = [
    {
      n: 1,
      title: "Forbids suing anyone, Christian or not",
      tag: "Rejected",
      body: 'The passage is explicitly internal: "between believers." 1 Cor. 5:12',
      pick: false,
    },
    {
      n: 2,
      title: "Forbids any and all suits between professing Christians",
      tag: "Rejected",
      body: "God established civil government. Rom. 13:1–7",
      pick: false,
    },
    {
      n: 3,
      title: "Forbids suing a believer in good standing in a faithful church",
      tag: "Best reading",
      body: "If removed by discipline, they are no longer a brother among you. 1 Cor. 5:1–13",
      pick: true,
    },
  ];
  const [open, setOpen] = useState(2);
  return (
    <div className="concept views-viz">
      {views.map((v, i) => (
        <div key={i} className={`view${open === i ? " open" : ""}${v.pick ? " pick" : ""}`}>
          <button type="button" className="view-head" onClick={() => setOpen(open === i ? -1 : i)}>
            <span className="vh-num">{v.n}</span>
            <h4>{v.title}</h4>
            <span className={`tag ${v.pick ? "yes" : "no"}`}>{v.tag}</span>
            <span className="chev">⌄</span>
          </button>
          {open === i ? <div className="view-body"><p>{v.body}</p></div> : null}
        </div>
      ))}
    </div>
  );
}

const M18 = [
  { n: 1, title: "Go to him alone", ref: "Matt. 18:15", body: "Private conversation first. Most conflicts end here." },
  { n: 2, title: "Take one or two witnesses", ref: "Matt. 18:16", body: "If he will not listen, establish the facts before the church." },
  { n: 3, title: "Tell it to the church", ref: "Matt. 18:17", body: "The congregation pursues repentance and repair together." },
  { n: 4, title: "Treat as an outsider", ref: "Matt. 18:17", body: "If he still refuses, removal from fellowship. Civil court may follow." },
];

export function Matthew18Path() {
  const [on, setOn] = useState(0);
  return (
    <div className="concept m18-viz">
      {M18.map((s, i) => (
        <button
          key={s.n}
          type="button"
          className={`m18-step${on === i ? " active" : ""}`}
          onClick={() => setOn(i)}
        >
          <span className="m18-num">{s.n}</span>
          <div className="m18-body">
            <h4>{s.title}</h4>
            <p>{on === i ? s.body : s.ref}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

const JURIS = {
  church: {
    label: "Church",
    tag: "Church only",
    title: "Sin, not crime",
    body: "Refusing reconciliation, gossip, bitterness. The church alone has authority over the heart; its ultimate sanction is removal from fellowship.",
    focus: "focus-church" as const,
    dot: "#6b7078",
  },
  both: {
    label: "Both",
    tag: "Concurrent jurisdiction",
    title: "Sin that is also a crime",
    body: "Theft, assault, fraud. Turn to the church first; if repentance follows, the courts may never be needed. If not, civil authority may act.",
    focus: "focus-both" as const,
    dot: "#4d5566",
  },
  state: {
    label: "State",
    tag: "Beyond the church",
    title: "Crime against society",
    body: "A company, government, or insurer. Appropriate to resolve in court after trying informal means.",
    focus: "focus-state" as const,
    dot: "var(--blue)",
  },
} as const;

type JurisKey = keyof typeof JURIS;

export function JurisdictionVenn() {
  const [k, setK] = useState<JurisKey>("both");
  const v = JURIS[k];
  return (
    <div className="concept juris-venn">
      <div className={`venn ${v.focus}`}>
        <button type="button" className="circle c-church" onClick={() => setK("church")}>
          <div className="lbl">
            <b>Church</b>
            <span>sin & the heart</span>
          </div>
        </button>
        <button type="button" className="circle c-state" onClick={() => setK("state")}>
          <div className="lbl">
            <b>State</b>
            <span>crime & society</span>
          </div>
        </button>
        <button type="button" className="overlap" onClick={() => setK("both")}>
          Concurrent
          <br />
          jurisdiction
        </button>
      </div>
      <div className="venn-side">
        <div className="venn-picks">
          {(Object.keys(JURIS) as JurisKey[]).map((key) => (
            <button
              key={key}
              type="button"
              className={`venn-pick${k === key ? " active" : ""}`}
              style={{ "--dot": JURIS[key].dot } as CSSProperties}
              onClick={() => setK(key)}
            >
              {JURIS[key].label}
            </button>
          ))}
        </div>
        <motion.div
          key={k}
          className="venn-detail"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="vd-tag">{v.tag}</div>
          <h4>{v.title}</h4>
          <p>{v.body}</p>
        </motion.div>
        <p className="abuse-note">
          For a dangerous crime where others could be harmed, invoke church <strong>and</strong> police at the same
          time. Protect people first.
        </p>
      </div>
    </div>
  );
}

export function CorinthiansScandal() {
  return (
    <div className="concept scandal-viz">
      <div className="scandal-panel">
        <div className="scandal-quote">
          "Why not rather be wronged? Why not rather be cheated?"
        </div>
        <p className="scandal-ref">1 Corinthians 6:7 BSB</p>
      </div>
      <div className="scandal-split">
        <div className="scandal-card">
          <h4>The scandal</h4>
          <p>Believers hauling one another before unbelieving judges advertises division inside the body of Christ.</p>
        </div>
        <div className="scandal-card">
          <h4>The limit</h4>
          <p>Paul does not forbid every lawsuit. He asks whether church remedies were exhausted and the purpose is righteous.</p>
        </div>
      </div>
    </div>
  );
}
