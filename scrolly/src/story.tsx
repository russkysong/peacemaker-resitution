import type { ReactNode } from "react";
import type { VizKey } from "./Graphic";
import { Ref } from "./lib/ui";

export type Step = { id: string; viz: VizKey; kicker: string; title: string; body: ReactNode };

export const STEPS: Step[] = [
  {
    id: "overview",
    viz: "overview",
    kicker: "Restitution and court",
    title: "Making harm right",
    body: (
      <>
        <p>
          Two practical questions sit underneath many conflicts: what does it mean to repair harm, and when is it
          right to bring a dispute to court? The answer is neither bare punishment nor sentimental forgiveness. It is
          justice ordered toward restoration.
        </p>
        <p>
          Ken Sande's <em>Peacemaker</em> (Appendices C and D) maps both questions onto Scripture: concrete repair
          when you have wronged someone, and a disciplined path before civil court when believers disagree.
        </p>
      </>
    ),
  },
  {
    id: "what-why",
    viz: "whatWhy",
    kicker: "What it is",
    title: "More than sorry: repair",
    body: (
      <>
        <p>
          Restitution means taking concrete action to restore the person you harmed. Repentance produces{" "}
          <em>action</em>, not just words: restoring the victim, protecting society, and freeing the offender.{" "}
          <Ref>Num. 5:7</Ref>
        </p>
        <p>Tap the cards in the panel to read the verses behind Zacchaeus and the Law of Moses.</p>
      </>
    ),
  },
  {
    id: "purposes",
    viz: "purposes",
    kicker: "Why it matters",
    title: "Four purposes of restitution",
    body: (
      <p>
        Biblical restitution is not mere payback. It serves the victim, the community, the offender, and God.
        Each purpose answers a different question about what "making it right" actually accomplishes.
      </p>
    ),
  },
  {
    id: "scale",
    viz: "scale",
    kicker: "The graduated scale",
    title: "The penalty rises with intent",
    body: (
      <>
        <p>
          Scripture never sets one flat fine. On a <strong>$1,000</strong> loss, what you owe can run from repair-only
          to five times the value, depending on intent, repentance, and whether you were caught with the goods.
        </p>
        <p>Tap each rung in the panel to see the scenario and verse behind it.</p>
      </>
    ),
  },
  {
    id: "calculator",
    viz: "calculator",
    kicker: "Interactive",
    title: "The Restitution Calculator",
    body: (
      <p>
        Describe a real situation in the panel. It returns the restitution Scripture requires, with the verse behind
        it, and an optional dollar total when you enter a property value.
      </p>
    ),
  },
  {
    id: "forgiveness",
    viz: "forgiveness",
    kicker: "Interactive",
    title: "Forgiveness and restitution are not opposites",
    body: (
      <p>
        Forgiveness addresses the relationship; restitution addresses the damage. Walk the questions in the panel
        to see how mercy and repair relate. <Ref>Luke 19:8-9</Ref>
      </p>
    ),
  },
  {
    id: "heart-court",
    viz: "heartCourt",
    kicker: "Interactive",
    title: "A court cannot reach the heart",
    body: (
      <>
        <p>
          Paul wrote because believers in Corinth were dragging one another before pagan judges. Civil court and the
          church reach different things. <Ref>1 Cor. 6:1-7</Ref>
        </p>
        <p>Compare what each jurisdiction can rule on in the panel.</p>
      </>
    ),
  },
  {
    id: "matthew-18",
    viz: "matthew18",
    kicker: "Church process",
    title: "Matthew 18 before the courthouse",
    body: (
      <p>
        Before civil court is even in view, Jesus gives a four-step path: private conversation, witnesses, the
        congregation, and removal from fellowship if there is still no repentance. <Ref>Matt. 18:15-17</Ref>
      </p>
    ),
  },
  {
    id: "three-views",
    viz: "threeViews",
    kicker: "1 Corinthians 6",
    title: "Three views on suing believers",
    body: (
      <p>
        The best reading: Paul forbids suing a believer in <strong>good standing</strong> in a faithful church. If
        that person is removed by discipline, they are no longer a brother among you. <Ref>1 Cor. 5:1-13</Ref>
      </p>
    ),
  },
  {
    id: "court-wizard",
    viz: "wizard",
    kicker: "Interactive",
    title: "Should I go to court?",
    body: (
      <>
        <p>
          Three conditions must <em>all</em> be met: exhaust church remedies, biblically legitimate rights, and a
          righteous purpose. Court is the <strong>last</strong> door, never the first.
        </p>
        <p>Walk the decision in the panel.</p>
      </>
    ),
  },
  {
    id: "jurisdiction",
    viz: "jurisdiction",
    kicker: "Authority",
    title: "Two jurisdictions, sometimes overlapping",
    body: (
      <>
        <p>
          Church and state share authority when sin is also a crime: theft, assault, fraud. For dangerous crimes,
          invoke <strong>both</strong> church and police at once.
        </p>
        <p>Click the diagram or the labels in the panel.</p>
      </>
    ),
  },
  {
    id: "corinthians",
    viz: "corinthians",
    kicker: "Counting the cost",
    title: "Why not rather be wronged?",
    body: (
      <>
        <p>
          Paul does not forbid every lawsuit. He asks why believers would rather be defrauded than bear the scandal
          of dragging one another before unbelievers. <Ref>1 Cor. 6:7</Ref>
        </p>
        <p>
          Court may be legitimate. The question is whether you have exhausted the remedies God gave the church
          first, and whether your purpose is righteous.
        </p>
      </>
    ),
  },
];
