"use client";

import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import { CAREER_TREES, type CareerNode } from "@/careerwise/data/careers";

/* ── Layout constants for the desktop SVG tree ── */
const W = 1200;
const H = 500;
const ROOT_X = 70;
const BRANCH_X = 340;
const LEAF_X = 860;

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Cubic with horizontal control points — reads as a rail, not a wire. */
function link(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

/**
 * Career Map — pick a degree, watch it fan out into specialisations
 * and then into actual job titles with salary bands.
 *
 * Desktop: interactive SVG tree.  Mobile: expandable outline.
 */
export default function CareerMap() {
  const [treeId, setTreeId] = useState(CAREER_TREES[0].id);
  const [branchId, setBranchId] = useState<string | null>(null);

  const tree = CAREER_TREES.find((t) => t.id === treeId) ?? CAREER_TREES[0];
  const branches = tree.branches;

  /* Lay out leaves-first so labels never collide; each branch sits at the
     mean Y of its own leaves so the fan reads as a tree. */
  const leaves = branches.flatMap((branch, bi) =>
    (branch.children ?? []).map((leaf) => ({ leaf, branch, bi })),
  );
  const leafY = leaves.map((_, i) => ((i + 1) / (leaves.length + 1)) * H);
  const branchY = branches.map((_, bi) => {
    const own = leafY.filter((_, i) => leaves[i].bi === bi);
    return own.length ? own.reduce((a, b) => a + b, 0) / own.length : H / 2;
  });
  const rootY = branchY.reduce((a, b) => a + b, 0) / branchY.length;

  const focused = (id: string) => branchId === null || branchId === id;

  const branchLineStart = (label: string) =>
    Math.min(LEAF_X - 90, BRANCH_X + 32 + label.length * 7);

  function pickTree(id: string) {
    setTreeId(id);
    setBranchId(null);
  }

  return (
    <section id="map" className="careerMap">
      <div className="careerMapShell">
        {/* ── Section heading ── */}
        <div className="cmHeader">
          <div className="cmHeaderText">
            <div className="cmLabel">
              <span className="cmDot" />
              <span>Career map</span>
            </div>
            <h2 className="cmTitle">
              Your degree is a starting point,{" "}
              <em>not the destination.</em>
            </h2>
            <p className="cmLede">
              Every specialisation opens onto several roles, and most of them
              are not the obvious one. Follow a branch to see where it actually
              ends.
            </p>
          </div>

          <div className="cmTabs">
            {CAREER_TREES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => pickTree(t.id)}
                aria-pressed={t.id === treeId}
                className={
                  "cmTab" + (t.id === treeId ? " cmTabActive" : "")
                }
              >
                {t.root}
              </button>
            ))}
          </div>
        </div>

        <p className="cmSubtitle">{tree.subtitle}</p>

        {/* ── Desktop: SVG tree ── */}
        <div className="cmTree">
          <div className="cmTreeInner">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="cmSvg"
              role="img"
              aria-label={`${tree.root} career paths`}
            >
              <AnimatePresence mode="wait">
                <motion.g
                  key={tree.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Root → branch links */}
                  {branches.map((b, i) => (
                    <motion.path
                      key={`r-${b.id}`}
                      d={link(ROOT_X, rootY, BRANCH_X, branchY[i])}
                      fill="none"
                      strokeWidth="1.25"
                      vectorEffect="non-scaling-stroke"
                      initial={{ pathLength: 0, strokeOpacity: 0 }}
                      animate={{
                        stroke: focused(b.id) ? "#079db4" : "#8b97a8",
                        strokeOpacity: focused(b.id)
                          ? branchId
                            ? 0.85
                            : 0.4
                          : 0.15,
                      }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, margin: "-15% 0px" }}
                      transition={{
                        pathLength: {
                          duration: 1.1,
                          delay: 0.1 + i * 0.09,
                          ease: EASE_EXPO,
                        },
                        default: { duration: 0.45, ease: "easeOut" },
                      }}
                    />
                  ))}

                  {/* Branch → leaf links */}
                  {leaves.map(({ leaf, branch, bi }, i) => (
                    <motion.path
                      key={`l-${branch.id}-${leaf.id}`}
                      d={link(branchLineStart(branch.label), branchY[bi], LEAF_X, leafY[i])}
                      fill="none"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                      initial={{ pathLength: 0, strokeOpacity: 0 }}
                      animate={{
                        stroke: focused(branch.id) ? "#079db4" : "#8b97a8",
                        strokeOpacity: focused(branch.id)
                          ? branchId
                            ? 0.55
                            : 0.2
                          : 0.08,
                      }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, margin: "-15% 0px" }}
                      transition={{
                        pathLength: {
                          duration: 0.9,
                          delay: 0.5 + i * 0.05,
                          ease: EASE_EXPO,
                        },
                        default: { duration: 0.45, ease: "easeOut" },
                      }}
                    />
                  ))}
                </motion.g>
              </AnimatePresence>

              {/* Root node */}
              <g>
                <circle cx={ROOT_X} cy={rootY} r="7" fill="#079db4" />
                <circle
                  cx={ROOT_X}
                  cy={rootY}
                  r="16"
                  fill="#079db4"
                  opacity="0.14"
                />
                <text
                  x={ROOT_X}
                  y={rootY - 30}
                  textAnchor="middle"
                  className="cmRootLabel"
                >
                  {tree.root}
                </text>
              </g>

              {/* Branch nodes — interactive */}
              {branches.map((b, i) => {
                const on = focused(b.id);
                const isPicked = branchId === b.id;
                return (
                  <g
                    key={b.id}
                    className="cmBranchNode"
                    onMouseEnter={() => setBranchId(b.id)}
                    onMouseLeave={() => setBranchId(null)}
                    onClick={() => setBranchId(isPicked ? null : b.id)}
                  >
                    {/* Generous invisible hit area */}
                    <rect
                      x={BRANCH_X - 10}
                      y={branchY[i] - 22}
                      width={branchLineStart(b.label) - BRANCH_X + 20}
                      height="44"
                      fill="transparent"
                    />
                    <circle
                      cx={BRANCH_X}
                      cy={branchY[i]}
                      r={isPicked ? 6 : 4.5}
                      fill={on ? "#079db4" : "#a0aab5"}
                      style={{ transition: "r 0.35s, fill 0.35s" }}
                    />
                    <text
                      x={BRANCH_X + 16}
                      y={branchY[i] + 5}
                      className={
                        "cmBranchLabel" + (on ? " cmBranchLabelOn" : "")
                      }
                    >
                      {b.label}
                    </text>
                  </g>
                );
              })}

              {/* Leaf nodes */}
              {leaves.map(({ leaf, branch }, i) => {
                const on = focused(branch.id);
                const y = leafY[i];
                return (
                  <g
                    key={`${branch.id}-${leaf.id}`}
                    style={{ transition: "opacity 0.45s" }}
                    opacity={on ? 1 : 0.25}
                  >
                    <circle
                      cx={LEAF_X}
                      cy={y}
                      r="3"
                      fill={on ? "#122036" : "#a0aab5"}
                    />
                    <text
                      x={LEAF_X + 14}
                      y={y - 2}
                      className="cmLeafLabel"
                    >
                      {leaf.label}
                    </text>
                    {leaf.band ? (
                      <text
                        x={LEAF_X + 14}
                        y={y + 13}
                        className="cmLeafBand"
                      >
                        {leaf.band}
                      </text>
                    ) : null}
                  </g>
                );
              })}
            </svg>


          </div>
        </div>

        {/* ── Mobile / tablet: expandable outline ── */}
        <div className="cmMobile">
          <ul className="cmMobileList">
            {branches.map((b) => {
              const open = branchId === b.id;
              return (
                <li key={b.id}>
                  <button
                    type="button"
                    onClick={() => setBranchId(open ? null : b.id)}
                    aria-expanded={open}
                    className={
                      "cmMobileBtn" + (open ? " cmMobileBtnOpen" : "")
                    }
                  >
                    <span className="cmMobileBtnLeft">
                      <span
                        className={
                          "cmMobileDot" +
                          (open ? " cmMobileDotOpen" : "")
                        }
                      />
                      <span className="cmMobileBtnText">{b.label}</span>
                    </span>
                    <span className="cmMobileCount">
                      {b.children?.length ?? 0} roles
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE_EXPO }}
                        className="cmMobileLeaves"
                      >
                        <div className="cmMobileLeavesInner">
                          {(b.children ?? []).map((leaf: CareerNode) => (
                            <li key={leaf.id} className="cmMobileLeaf">
                              <span className="cmMobileLeafLabel">
                                {leaf.label}
                              </span>
                              {leaf.band ? (
                                <span className="cmMobileLeafBand">
                                  {leaf.band}
                                </span>
                              ) : null}
                            </li>
                          ))}
                        </div>
                      </motion.ul>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>


      </div>
    </section>
  );
}
