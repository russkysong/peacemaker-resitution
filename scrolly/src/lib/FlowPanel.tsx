import { useState } from "react";

export type FlowOption = {
  label: string;
  sub?: string;
  crumb?: string;
  to: FlowNode;
};

export type FlowVerdict = {
  result: true;
  tone: "good" | "warn" | "bad" | "info" | "urgent";
  badge?: string;
  title: string;
  body: string;
  verse?: string;
  mult?: number;
};

export type FlowQuestion = {
  result?: false;
  q: string;
  help?: string;
  options: FlowOption[];
};

export type FlowNode = FlowQuestion | FlowVerdict;

export function isVerdict(n: FlowNode): n is FlowVerdict {
  return "result" in n && n.result === true;
}

export function fmtMoney(n: number) {
  return (Math.round(n * 100) / 100).toLocaleString("en-US");
}

type Crumb = { label: string };

export function FlowPanel({
  root,
  amountField,
  pill,
}: {
  root: FlowNode;
  amountField?: boolean;
  pill?: string;
}) {
  const [stack, setStack] = useState<Crumb[]>([]);
  const [node, setNode] = useState<FlowNode>(root);
  const [amount, setAmount] = useState("");

  function walk(crumbs: Crumb[], start: FlowNode): FlowNode {
    let n = start;
    for (const s of crumbs) {
      if (!isVerdict(n) && n.options) {
        const opt = n.options.find((o) => (o.crumb || o.label) === s.label);
        if (opt) n = opt.to;
      }
    }
    return n;
  }

  function restart() {
    setStack([]);
    setNode(root);
  }

  function back() {
    const next = stack.slice(0, -1);
    setStack(next);
    setNode(walk(next, root));
  }

  function choose(opt: FlowOption) {
    setStack([...stack, { label: opt.crumb || opt.label }]);
    setNode(opt.to);
  }

  const owed =
    amount !== "" && isVerdict(node) && node.mult != null
      ? `$${fmtMoney(parseFloat(amount) * node.mult)}`
      : "—";

  return (
    <div className="tool">
      {pill ? (
        <div className="tool-head">
          <span className="pill">{pill}</span>
        </div>
      ) : null}
      {amountField ? (
        <div className="calc-amount">
          <label>
            Property value <span className="muted">(optional)</span>
          </label>
          <div className="amt">
            <span>$</span>
            <input
              type="text"
              inputMode="decimal"
              value={amount}
              placeholder="e.g. 1000"
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
            />
          </div>
        </div>
      ) : null}
      {stack.length > 0 ? (
        <div className="crumbs">
          {stack.map((s, i) => (
            <span key={i} className="crumb">
              {s.label}
            </span>
          ))}
        </div>
      ) : null}
      {isVerdict(node) ? (
        <>
          <div className={`verdict ${node.tone}`}>
            {node.badge ? <div className="vbadge">{node.badge}</div> : null}
            <h3 className="vtitle">{node.title}</h3>
            <p className="vbody">{node.body}</p>
            {amountField && node.mult != null ? (
              <div className="owed-row">
                On a <b>${amount || "—"}</b> loss, you would owe <span className="owed">{owed}</span>
              </div>
            ) : null}
            {node.verse ? <div className="vverse">{node.verse}</div> : null}
          </div>
          <div className="flow-actions">
            <button type="button" className="btn-ghost" onClick={back}>
              ‹ Back
            </button>
            <button type="button" className="btn-ghost" onClick={restart}>
              ↺ Start over
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flow-q">{node.q}</div>
          {node.help ? <div className="flow-help">{node.help}</div> : null}
          <div className="opts">
            {node.options.map((o, i) => (
              <button key={i} type="button" className="opt" onClick={() => choose(o)}>
                {o.label}
                {o.sub ? <span className="opt-sub">{o.sub}</span> : null}
              </button>
            ))}
          </div>
          {stack.length > 0 ? (
            <div className="flow-actions">
              <button type="button" className="btn-ghost" onClick={back}>
                ‹ Back
              </button>
              <button type="button" className="btn-ghost" onClick={restart}>
                ↺ Start over
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
