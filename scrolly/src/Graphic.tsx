import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CorinthiansScandal,
  FlipCards,
  JurisdictionVenn,
  Matthew18Path,
  OverviewCards,
  RestitutionPurposes,
  RestitutionScale,
  ThreeViews,
} from "./viz/concepts";
import {
  CourtWizard,
  ForgivenessExplorer,
  HeartCourtExplorer,
  RestitutionCalculator,
} from "./viz/interactive";

export type VizKey =
  | "overview"
  | "whatWhy"
  | "purposes"
  | "scale"
  | "calculator"
  | "forgiveness"
  | "heartCourt"
  | "matthew18"
  | "threeViews"
  | "wizard"
  | "jurisdiction"
  | "corinthians";

const VIZ: Record<VizKey, () => ReactNode> = {
  overview: () => <OverviewCards />,
  whatWhy: () => <FlipCards />,
  purposes: () => <RestitutionPurposes />,
  scale: () => <RestitutionScale />,
  calculator: () => <RestitutionCalculator />,
  forgiveness: () => <ForgivenessExplorer />,
  heartCourt: () => <HeartCourtExplorer />,
  matthew18: () => <Matthew18Path />,
  threeViews: () => <ThreeViews />,
  wizard: () => <CourtWizard />,
  jurisdiction: () => <JurisdictionVenn />,
  corinthians: () => <CorinthiansScandal />,
};

const TITLES: Record<VizKey, string> = {
  overview: "Two parts",
  whatWhy: "Scripture stories",
  purposes: "Four purposes",
  scale: "The graduated scale",
  calculator: "Restitution calculator",
  forgiveness: "Forgiveness vs repair",
  heartCourt: "Court vs church",
  matthew18: "Matthew 18",
  threeViews: "Three readings",
  wizard: "Court wizard",
  jurisdiction: "Church and state",
  corinthians: "Counting the cost",
};

type GraphicProps = {
  viz: VizKey;
  index?: number;
  total?: number;
  interactive?: boolean;
};

export function Graphic({ viz, index, total, interactive }: GraphicProps) {
  const showCounter = index != null && total != null;

  return (
    <div className={`stage-inner${interactive ? " stage-tool" : ""}`}>
      <div className="stage-head">
        <div className="stage-kicker">{TITLES[viz]}</div>
        {showCounter && (
          <div className="stage-counter" aria-label={`Step ${index + 1} of ${total}`}>
            {index + 1} / {total}
          </div>
        )}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={viz}
          className="stage-viz"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
        >
          {VIZ[viz]()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function vizTitle(viz: VizKey) {
  return TITLES[viz];
}
