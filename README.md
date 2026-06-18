# The Peacemaker — Restitution & Conflict Resolution

An interactive scroll-through guide to biblical principles of restitution and conflict resolution, based on Appendices C and D of Ken Sande's *The Peacemaker* (3rd edition).

## Features

- **Prophet-keyness scroll format** — hero, sticky visual stage, section rail, progress bar
- **Restitution Calculator** — walk through a scenario and see biblical restitution owed
- **"Should I Go to Court?" Wizard** — Sande's three-condition test as an interactive flow
- **Jurisdiction diagram** — church vs. state authority
- **Predict the Verdict** — test your instincts against Exodus 22

## Development

The public site is the React/Vite app in `scrolly/` (deployed at `/restitution/`).

```bash
cd scrolly
npm install
npm run dev
```

Build for production:

```bash
npm --prefix scrolly run build   # → scrolly/dist/
```

Deploy happens from the `01 portfolio` repo via `stages/02-build/build-deploy.sh`, which copies `scrolly/dist/` to `/restitution/`.

The legacy single-file version is kept as `appendix-c-d.html` in the portfolio demos folder for reference.

## Source

Ken Sande, *The Peacemaker: A Biblical Guide to Resolving Personal Conflict*, 3rd ed. (Grand Rapids: Baker Books, 2004) — Appendices C & D.
