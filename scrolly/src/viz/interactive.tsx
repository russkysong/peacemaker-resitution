import { FlowPanel } from "../lib/FlowPanel";
import { calcRoot, forgiveRoot, heartRoot, wizardRoot } from "../data/flows";

export function RestitutionCalculator() {
  return <FlowPanel root={calcRoot} amountField />;
}

export function ForgivenessExplorer() {
  return <FlowPanel root={forgiveRoot} />;
}

export function HeartCourtExplorer() {
  return <FlowPanel root={heartRoot} />;
}

export function CourtWizard() {
  return <FlowPanel root={wizardRoot} />;
}
