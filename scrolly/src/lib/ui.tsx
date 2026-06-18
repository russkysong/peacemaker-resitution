export const C = {
  ink: "#1a1a1a",
  mut: "#5d6470",
  line: "#e4e4e4",
  blue: "#2e4a7a",
  red: "#b4513f",
  bg: "#fdfdfb",
  card: "#fff",
  green: "#3f7a5a",
  gold: "#c89b3c",
};

export function Ref({ children }: { children: string }) {
  return <span className="ref">{children}</span>;
}
