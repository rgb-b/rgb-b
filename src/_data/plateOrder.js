// Per-breakpoint CSS `order` values for the homepage project grid.
//
// A single shared DOM order can't avoid same-ink plates touching at every
// breakpoint at once -- the 1/2/3-column grids are three different adjacency
// graphs, and a position that's safe in one is often adjacent to something
// else in another. This computes each breakpoint's own zero-violation
// layout independently (verified via a bipartite checkerboard split of each
// grid's adjacency graph -- teal fills one independent-set half, pink+blue
// fill the other, so nothing of the same ink family is ever adjacent) and
// index.njk applies the right one at each width via CSS `order`.
//
// Regenerate by rerunning the search script if ink assignments in
// projects.js change (teal must stay at 6 or fewer -- that's the largest
// half either grid's checkerboard split produces across 11 plates; more
// than 6 makes a zero-touch layout mathematically impossible regardless of
// ordering, per the grid's own structure).
//
// Within each breakpoint's teal-side and non-teal-side slots, WHICH
// specific project fills which slot is free (same-side slots are never
// adjacent to each other by definition of the bipartition), so slots are
// assigned by priority instead of arbitrarily: the print/pre-press work
// (xrite-export, proofing-room, colour-match, zpl-studio -- all teal)
// fills the earliest teal-side slots at every breakpoint, ahead of the
// other two teal plates (whereis, lastfm-widget). Non-teal slots (pink/
// blue) have no such priority -- none of those projects are work-related,
// so their relative order doesn't matter here.
module.exports = {
    "xrite-export": { c1: 0, c2: 1, c3: 0 },
    bracket: { c1: 1, c2: 0, c3: 1 },
    "proofing-room": { c1: 2, c2: 2, c3: 2 },
    "live-scores": { c1: 3, c2: 3, c3: 3 },
    "colour-match": { c1: 4, c2: 5, c3: 4 },
    "tidal-radio": { c1: 5, c2: 4, c3: 5 },
    "zpl-studio": { c1: 6, c2: 6, c3: 6 },
    "tidal-collaborative": { c1: 7, c2: 7, c3: 7 },
    whereis: { c1: 8, c2: 9, c3: 8 },
    "signal-tui": { c1: 9, c2: 8, c3: 9 },
    "lastfm-widget": { c1: 10, c2: 10, c3: 10 },
};
