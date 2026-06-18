import type { FlowNode } from "./FlowPanel";

const rSimple: FlowNode = {
  result: true,
  tone: "good",
  badge: "Repair",
  title: "Simple restitution",
  body: "Repair or replace what was lost — restore the owner to their former position.",
  mult: 1,
  verse: "Exod. 22:5–6",
};
const rPlus20: FlowNode = {
  result: true,
  tone: "good",
  badge: "+20%",
  title: "Repay in full, plus one-fifth",
  body: "Voluntary repentance earns a lighter penalty: the value of the property plus a 20% penalty.",
  mult: 1.2,
  verse: "Lev. 6:1–5 · Num. 5:5–10",
};
const r2x: FlowNode = {
  result: true,
  tone: "warn",
  badge: "2×",
  title: "Return it — and its equal value",
  body: "Caught with the goods intact: give it back, plus pay its value over again.",
  mult: 2,
  verse: "Exod. 22:4",
};
const r4x: FlowNode = {
  result: true,
  tone: "bad",
  badge: "4×",
  title: "Repay four times the value",
  body: "Caught after the goods are gone — the penalty rises sharply to discourage deliberate theft.",
  mult: 4,
  verse: "Exod. 22:1",
};
const r5x: FlowNode = {
  result: true,
  tone: "bad",
  badge: "5×",
  title: "Repay five times the value",
  body: "When what was taken is especially hard to replace, restitution rises to fivefold.",
  mult: 5,
  verse: "Exod. 22:1",
};

const calcGoods: FlowNode = {
  q: "Where is the property now?",
  help: "For theft, the penalty depends on whether the item can still be returned.",
  options: [
    { label: "Recovered, still intact", sub: "e.g. still in your bag when caught", crumb: "Goods intact", to: r2x },
    { label: "Already sold or disposed of", sub: "e.g. pawned or thrown away", crumb: "Goods gone", to: r4x },
    { label: "Hard to replace", sub: "e.g. discontinued or one-of-a-kind", crumb: "Hard to replace", to: r5x },
  ],
};
const calcRepent: FlowNode = {
  q: "Did you repent BEFORE you were caught?",
  help: "Timing matters — Scripture rewards coming clean on your own.",
  options: [
    { label: "Yes — I came forward on my own", crumb: "Repented first", to: rPlus20 },
    { label: "No — I was caught or confronted", crumb: "Caught", to: calcGoods },
  ],
};

export const calcRoot: FlowNode = {
  q: "Was the damage or loss intentional?",
  help: "Describe the situation in plain terms: accident, negligence, or deliberate harm.",
  options: [
    { label: "No, accidental or negligent", sub: "knocked off a table, dropped in water", crumb: "Unintentional", to: rSimple },
    { label: "Yes, it was deliberate", sub: "took it on purpose, smashed it in anger", crumb: "Intentional", to: calcRepent },
  ],
};

const forgiveRepair: FlowNode = {
  result: true,
  tone: "info",
  badge: "Repair",
  title: "Forgiven, and repair may still be owed",
  body: "Forgiveness addresses the relationship: you will not dwell on the wrong, use it against the person, or let it stand between you. It does not automatically erase the duty to restore what was damaged.",
  verse: "Num. 5:5-8",
};
const forgiveMercy: FlowNode = {
  result: true,
  tone: "good",
  badge: "Mercy",
  title: "The debt can be released",
  body: "The injured party may forgive the financial debt. Yet making restitution often helps the offender show a changed heart and ingrain the lesson.",
  verse: "Luke 19:8-9",
};

export const forgiveRoot: FlowNode = {
  q: "Someone forgave you. Is concrete repair still owed?",
  help: "Forgiveness and restitution answer different questions.",
  options: [
    {
      label: "Repair may still be owed",
      sub: "forgiveness does not always erase the duty to restore damage",
      crumb: "Repair still matters",
      to: forgiveRepair,
    },
    {
      label: "Mercy may release the debt",
      sub: "the injured party can choose to waive what is owed",
      crumb: "Debt released",
      to: forgiveMercy,
    },
  ],
};

const heartCivil: FlowNode = {
  result: true,
  tone: "info",
  badge: "Civil court",
  title: "Contracts, property, damages",
  body: "Civil courts can rule on legal rights: contracts, property, and compensatory damages. That is their proper sphere.",
  verse: "Rom. 13:1-7",
};
const heartChurch: FlowNode = {
  result: true,
  tone: "warn",
  badge: "The church",
  title: "Bitterness, pride, refusal to repair",
  body: "Almost every lawsuit between believers carries sin underneath, and a courtroom is powerless there. Only the church reaches the heart.",
  verse: "Jas. 4:1-3",
};

export const heartRoot: FlowNode = {
  q: "What can each jurisdiction actually reach?",
  help: "Paul wrote because believers in Corinth were dragging one another before pagan judges.",
  options: [
    {
      label: "What civil court can rule on",
      sub: "contracts, property, legal damages",
      crumb: "Civil court",
      to: heartCivil,
    },
    {
      label: "What only the church reaches",
      sub: "bitterness, dishonesty, refusing to repair",
      crumb: "The heart",
      to: heartChurch,
    },
  ],
};

const wProceed: FlowNode = {
  result: true,
  tone: "good",
  badge: "✓ All 3 conditions met",
  title: "You may proceed — cautiously",
  body: 'You may appeal to the courts. But count the cost first, and ask: "Would my Master be honored if I used His time and resources on this?"',
};
const wPurpose: FlowNode = {
  result: true,
  tone: "warn",
  badge: "Condition 3 unmet",
  title: "Reconsider — and settle quickly",
  body: "Without a righteous purpose, do not file. Take Jesus' counsel: settle matters quickly with your adversary.",
  verse: "Matt. 5:25",
};
const wRights: FlowNode = {
  result: true,
  tone: "bad",
  badge: "Condition 2 unmet",
  title: "Do not pursue it",
  body: "A legally available right can still be wrong before God.",
};
const wChurch: FlowNode = {
  result: true,
  tone: "warn",
  badge: "Condition 1 unmet",
  title: "Go to the church first",
  body: "Most conflicts settle here, long before a courtroom. Court is the last door, not the first.",
  verse: "Matt. 18:15–20",
};
const wUrgent: FlowNode = {
  result: true,
  tone: "urgent",
  badge: "Act now — both authorities",
  title: "Invoke church AND civil authorities together",
  body: "When others could be seriously injured, use both jurisdictions at once. Never delay reporting to protect a reputation.",
};
const wInfo: FlowNode = {
  result: true,
  tone: "info",
  badge: "1 Cor. 6 does not bind you",
  title: "The courts are open to you",
  body: "1 Corinthians 6 governs disputes between believers the church can discipline — not these.",
};

const wNode5: FlowNode = {
  q: "Does the lawsuit serve a righteous purpose?",
  options: [
    { label: "Yes — all three", crumb: "Righteous purpose", to: wProceed },
    { label: "No / not really", crumb: "No righteous purpose", to: wPurpose },
  ],
};
const wNode4: FlowNode = {
  q: "Are the rights you would enforce biblically legitimate?",
  help: 'Some legal "rights" are contrary to Scripture.',
  options: [
    { label: "Yes — the claim itself is just", crumb: "Legitimate rights", to: wNode5 },
    { label: "No / unsure", crumb: "Questionable rights", to: wRights },
  ],
};
const wNode3: FlowNode = {
  q: "Have you fully exhausted the church's process?",
  help: "Matthew 18 — ending with the unrepentant person removed from fellowship.",
  options: [
    { label: "Yes — opponent is outside the church", crumb: "Church remedies exhausted", to: wNode4 },
    { label: "No — not yet", crumb: "Church remedies pending", to: wChurch },
  ],
};
const wNode2: FlowNode = {
  q: "Is this a dangerous crime where someone could be seriously harmed?",
  options: [
    { label: "Yes — someone is in danger", crumb: "Dangerous crime", to: wUrgent },
    { label: "No", crumb: "Not a dangerous crime", to: wNode3 },
  ],
};

export const wizardRoot: FlowNode = {
  q: "Who is on the other side of the dispute?",
  options: [
    { label: "A fellow Christian (professing believer)", crumb: "Vs. a believer", to: wNode2 },
    { label: "A non-Christian, company, government, or insurer", crumb: "Vs. non-church body", to: wInfo },
  ],
};
