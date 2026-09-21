// Order matters — this is the exact display order for both the homepage
// grid and (via pagination in project.njk) each project's own page.
module.exports = [
    {
        slug: "xrite-export",
        name: "xrite-export",
        description: "xrite-export spectrodensitometer tool",
        // Proof-of-concept plate recipe (2026-09-21) — see the plate design
        // consultation for the full rationale. wmFit/label year are
        // first-pass estimates pending an eyeball pass.
        plate: {
            ink: "teal",
            depth: 3,
            angle: 15,
            pitch: "coarse",
            icon: "xrite-export",
            label: "RUST · DENSITOMETRY · 2026",
            axis: { mono: 0.85, casl: 0, wght: 780, slnt: 0 },
            wmFit: 11.5,
        },
        cardBlurb: `Replaced a job that used to mean handwriting ~385
density readings per job and typing them all up a
second time. Now it's one scan-through and a
finished report &mdash; in daily use by me and my
coworkers.`,
        tags: ["rust", "axum", "tokio"],
        intro: `<p>
    A tool for recording CMYK ink-density readings off an
    X-Rite eXact spectrodensitometer and turning them straight
    into a finished report. Before this existed, checking a job
    meant finding its file on the server, printing it out,
    scanning a strip of patches and hand-writing every reading
    onto the print-out, then typing all of that back up and
    printing it again &mdash; for a typical job that's 4
    colours across 3 screen rulings and 2 dot shapes, 16 steps
    each, so somewhere around 385 numbers written down by hand
    and then typed up a second time. This tool cuts that down
    to scanning the strip once.
</p>`,
        shots: [
            {
                file: "xrite-export.png",
                alt: "the ink density tool showing a job form on the left and a filled-in tonal step density table with per-channel deviation from target",
                caption: "the density chart &mdash; step values with live deviation from target",
            },
        ],
        howItWorks: `<p>
    The spectrodensitometer &mdash; a handheld device that
    measures how dark a printed colour patch is &mdash; comes with
    its own X-Rite software called DataCatcher. Every time you
    scan a patch, DataCatcher behaves like an invisible extra
    keyboard: it types the reading straight into whichever box on
    screen is currently selected, then presses a key (tab, enter,
    or the down arrow) to jump to the next box automatically. I'd
    seen the same trick before on a barcode scanner used to type
    in a password by scanning a barcode instead of typing it out
    &mdash; so I scanned patches into a plain text box and
    watched which key it pressed and when, until the pattern was
    clear enough to reverse-engineer. I built this chart's boxes
    in that exact same order the scanner reads a strip of
    patches, top to bottom in each column &mdash; which means you
    can scan an entire strip without ever touching the mouse or
    looking up from the device. When you're done, one click
    turns all of that into a finished report, in the spots where
    the numbers are supposed to go &mdash; no more manually
    copying figures across by hand.
</p>`,
        builtWith: `<p>
    Written in Rust &mdash; I reach for it on projects like this
    because it's reliable, stays clean as it grows, and needs
    far fewer dependencies than something like Python. It
    started out as three things at once: a desktop program, a
    browser version, and a small Windows helper that let the
    browser version talk to Adobe Illustrator directly. The
    desktop build and that Illustrator/Excel export path have
    since been dropped &mdash; workplace permissions make it
    hard to install desktop software, so the browser version is
    what people actually reach for day to day, and its export
    got rebuilt as a single HTML report that opens anywhere
    without needing Illustrator or Excel at all. The genuinely
    tricky part turned out to be the report itself: every job
    and customer combines a different number of colours,
    screen rulings, and dot shapes, so getting all of that to
    lay out correctly took far more care than the actual
    density-reading logic underneath it, which is fairly
    simple.
</p>
<p>
    It's in daily use &mdash; myself and my coworkers all use it
    multiple times a day. It's saved real hours that used to go
    into writing out and retyping the same numbers twice, and
    probably saved a wrist or two in the process.
</p>`,
        closingLinks: `<p style="margin-top: var(--spacing-sm)">
    <a href="https://xrite.rgb-b.com">live site &rarr;</a>
    &nbsp;&nbsp;
    <a href="https://github.com/rgb-b/xrite-export">source &rarr;</a>
</p>`,
    },
    {
        slug: "proofing-room",
        name: "proofing room",
        description: "proofing room workplace dashboard",
        plate: {
            ink: "teal",
            depth: 2,
            angle: 45,
            pitch: "fine",
            icon: "proofing-room",
            label: "PREACT · SHOP DASHBOARD · 2026",
            axis: { mono: 0.6, casl: 0, wght: 650, slnt: 0 },
            wmFit: 11.5,
        },
        cardBlurb: `Built after a day I couldn't find a single SOP I
needed. Grew from one small inventory tracker into
the dashboard the whole proofing room now runs on
&mdash; stock, maintenance, colour conversions, and
more.`,
        tags: ["node", "express", "preact", "vite", "sqlite"],
        intro: `<p>
    A self-hosted toolkit for the proofing room at work &mdash;
    one dashboard behind a PIN login stores jobs and data that used to be kept untracked:
    inventory and stock levels, an ink and Pantone book library, a
    LAB / CMYK / RGB colour converter, maintenance issues and
    technician visits, equipment records, customer profiles, ink
    density readings, and shift statistics.
</p>
<p>
    Before this, there was basically no tracking or
    documentation system at all &mdash; files ended up in random
    drawers, in personal notebooks, on personal computers,
    wherever. The moment that actually started this project was
    a day I couldn't find any of the SOPs I needed and realised
    just how bad the situation had gotten.
</p>
<figure class="project-shot">
    <img src="images/proofing-room-dashboard.png" alt="the proofing room dashboard home screen showing open issues, low stock, overdue tasks, this week's stats, and a shift clock-in tracker" />
    <figcaption>the launcher &mdash; everyone's shift starts here</figcaption>
</figure>`,
        shots: [],
        howItWorks: `<p>
    It didn't start as one dashboard &mdash; it grew into one.
    The first pieces were small, single-purpose tools: a basic
    inventory tracker, a way to log when maintenance had been
    done. Those got used, so more tools got added the same way,
    and it grew from there into the dashboard it is now. You log
    in with a user and PIN and land on a launcher screen, and
    each tool from there is still its own self-contained little
    app under the hood &mdash; each one has a clear, checked-over
    boundary for what data goes in and out, so I can add a
    brand-new tool, or change an existing one, without the risk
    of accidentally breaking something unrelated elsewhere in the
    dashboard.
</p>
<figure class="project-shot">
    <img src="images/proofing-room-converter.png" alt="the LAB to CMYK/RGB colour converter, editing a colour in LAB space with the other colour spaces updating live" />
    <figcaption>colour converter &mdash; edit any space, the others update live</figcaption>
</figure>
<figure class="project-shot">
    <img src="images/proofing-room-inventory.png" alt="the stock and supplies view, showing per-printer ink and maintenance inventory with low-stock warnings" />
    <figcaption>inventory &mdash; per-printer stock, tracked instead of guessed at</figcaption>
</figure>`,
        builtWith: `<p>
    A Node.js server handles requests from the browser and reads
    and writes to a SQLite database &mdash; a lightweight
    database that lives in a single file on the server rather
    than needing separate database software installed. Every
    piece of data coming in gets double-checked against a strict
    set of rules before it's accepted, to catch mistakes early.
    The screens you actually interact with are built with a
    lightweight cousin of React (a common toolkit for building
    interactive web interfaces). It runs on a small home server,
    made reachable from the internet through Cloudflare without
    needing to open anything up directly to the wider internet.
    This is a from-scratch rebuild of the original tool &mdash;
    every module is built and running in parallel with the
    original, it's just not gated behind it or public yet.
</p>`,
        closingLinks: `<p style="margin-top: var(--spacing-sm)">
    <a href="https://github.com/rgb-b/brandpack-tools-v2">source &rarr;</a>
    &mdash; not public yet
</p>`,
    },
    {
        slug: "bracket",
        name: "bracket",
        description: "live world cup bracket display",
        plate: {
            ink: "pink",
            depth: 3,
            angle: 45,
            pitch: "medium",
            icon: "bracket",
            label: "NODE · LIVE FEED · 2026",
            // The broadcast face — reserved for live, public, crowd-facing
            // projects. A live match feed is exactly that case, and a heavy
            // irregular grotesque plus hot pink reads as a scoreboard. No
            // slnt here (Bricolage has no slant axis, and a synthesised
            // oblique on a heavy display face looks cheap) — upright at
            // wght 800 carries it on its own.
            face: "alt",
            axis: { wdth: 100, wght: 800 },
            wmFit: 15.25,
        },
        cardBlurb: `Turns a dozen mismatched live-score feeds into one
clean bracket that always knows what's on right now
&mdash; World Cup, Wimbledon, the Australian Open,
AFL finals, ETC.`,
        tags: ["node", "express", "react", "vite", "live"],
        intro: `<p>
    A live knockout-bracket display for single-match knockout
    tournaments &mdash; the 2026 FIFA World Cup, Wimbledon, the
    Australian Open, the AFL finals. It renders the full
    tournament tree, auto-focuses whatever match is live, and has
    an optional spoiler guard.
</p>`,
        shots: [
            {
                file: "bracket.png",
                alt: "bracket landing page showing the editions grid for World Cup, Wimbledon, Australian Open and AFL Finals",
                caption: "the edition picker &mdash; bracket.cherryslabs.com",
            },
        ],
        howItWorks: `<p>
    Every tournament pulls its live results from somewhere
    different online, and none of those sources format their data
    the same way &mdash; the World Cup feed looks nothing like
    ESPN's tennis scores, for instance. So for each sport there's
    a small translator that takes whatever messy format that
    sport's source uses and converts it into one single, tidy
    shape that the rest of the site understands. That means
    adding a brand-new tournament is mostly just writing one new
    translator &mdash; the part of the site that actually draws
    the bracket on screen never has to change. The bracket
    itself, and which round is "current", is always worked out
    fresh from the latest results rather than being drawn by hand
    ahead of time.
</p>
<p>
    The page automatically shows whichever is most useful: a
    live match in progress, or failing that a countdown to the
    next one, or failing that just the full bracket. One shared
    piece of logic is the single source of truth for "what's
    happening in this match right now", down to figuring out
    penalty shootouts and who scored.
</p>`,
        builtWith: `<p>
    A small always-on server (built with Node and a web
    framework called Express) fetches the latest scores and
    keeps a short-lived copy in memory so the site stays fast and
    keeps working even if a results feed is briefly down. The
    part you actually see and click around in is built with
    React, a widely-used toolkit for building interactive web
    pages. Match kick-off times are converted from whichever
    stadium's local time zone into everyone's own time zone
    automatically. Visit counts are tracked with a small
    self-hosted, privacy-respecting analytics tool rather than a
    third-party tracker like Google Analytics.
</p>`,
        closingLinks: `<p style="margin-top: var(--spacing-sm)">
    <a href="https://bracket.cherryslabs.com">live site &rarr;</a>
    &nbsp;&nbsp;
    <a href="https://github.com/elphiene/bracket">source &rarr;</a>
</p>`,
    },
    {
        slug: "tidal-radio",
        name: "tidal-radio",
        description:
            "self-hosted multi-station live radio with an auto-DJ audio pipeline",
        plate: {
            ink: "pink",
            depth: 3,
            angle: 15,
            pitch: "fine",
            icon: "tidal-radio",
            label: "NODE · AUTO-DJ RADIO · 2026",
            // The broadcast face — a live radio station is the most literal
            // case there is for it, alongside bracket and live-scores.
            face: "alt",
            axis: { wdth: 100, wght: 800 },
            wmFit: 13.25,
        },
        cardBlurb: `A self-hosted radio station with its own auto-DJ
&mdash; real loudness matching, dead-air trimming,
and seamless crossfades, running five stations in
production. Custom personalise music stations.`,
        tags: ["node", "liquidsoap", "icecast", "sqlite", "docker", "websocket"],
        intro: `<p>
    A self-hosted, multi-station live radio. People link a Tidal
    playlist, point a station at an artist, or submit individual
    songs &mdash; each station downloads the audio into one
    shared library and streams a fair-shuffle rotation
    continuously, live, as its own Icecast mount. A station can
    also be defined by genre instead of a link, drawing from
    whatever's already in the library. Running in production
    with five stations and a 650-track library, plus a 15,000+
    file local collection indexed and matched on demand.
</p>`,
        shots: [
            {
                file: "tidal-radio.png",
                height: "50px",
                alt: "the tidal-radio listen page for a station called Night Shift, showing an on-air track, its progress, a tune-in button, volume slider, and the next track coming up",
                caption: "the listen page &mdash; rendered straight from the shipped server code, no mockup",
            },
        ],
        howItWorks: `<p>
    Tidal is only ever used as a catalogue and a source of files
    &mdash; a submitted track is downloaded once into the shared
    library and played from there, never streamed live from
    Tidal itself. Sync only ever flows one way in: linking a
    playlist to a station can never write back to it, by
    construction, because there's no code path that lets it.
    Playback itself works as a pull, not a push: the streaming
    engine (Liquidsoap) asks the app for the next track over a
    small internal API, the app's rotation logic picks one, and
    Liquidsoap reports back what actually went on air &mdash;
    which is also what pushes the "on air" state out to
    listeners' browsers over a live WebSocket connection.
</p>
<p>
    Underneath that sits an auto-DJ pass that runs on every file
    once, when it arrives, rather than while it's playing.
    Loudness is measured properly (integrated LUFS, the same
    standard broadcast uses) and turned into one fixed gain per
    track, capped so it can never clip. Dead air at the start
    and end of a file is detected and trimmed &mdash; over 95%
    of the library was carrying trailing silence, which meant
    crossfades used to start inside the silence rather than the
    song. Crossfades themselves use a curve chosen specifically
    so the overlap doesn't dip in volume in the middle, which is
    what makes a fade sound like a hole, and for tracks with a
    hard ending instead of a fadeable one, it cuts cleanly on
    the beat instead of forcing an overlap that doesn't belong.
    Track selection prefers whatever follows the last song well
    in tempo and loudness, without ever letting that preference
    stop a track from getting its turn. A station stops pulling
    audio the
    moment nobody's listening and picks back up the instant
    someone tunes in &mdash; the stream itself never goes down,
    so there's always something to tune into.
</p>`,
        builtWith: `<p>
    The app is a Node.js server with no build step, storing
    everything in SQLite. Four Docker containers make up the
    full stack: the app itself, Liquidsoap (which pulls each
    station's rotation and pushes it to air), Icecast (one
    stream mount per station), and Caddy for TLS and routing.
    Loudness analysis runs through ffmpeg, and beat-grid
    measurement through aubio. The whole thing is covered by
    40 self-contained test suites, run as plain Node scripts
    rather than a test framework, each one named after the
    specific bug it was written to catch.
</p>`,
        closingLinks: `<p class="muted mono" style="margin-top: var(--spacing-sm)">
    self-hosted, running on the home network &mdash; not
    publicly reachable
</p>`,
    },
    {
        slug: "colour-match",
        name: "colour-match",
        description: "colour-match LAB to CMYK matching tool",
        plate: {
            ink: "teal",
            depth: 1,
            angle: 75,
            pitch: "medium",
            icon: "colour-match",
            label: "NODE · COLOUR CALIBRATION · 2026",
            // Gloock — reserved for projects whose actual output is an
            // aesthetic judgement about colour/print. A LAB/CMYK matching
            // tool is exactly that case; a static ink-flourish face reads
            // truer than a variable one for a "what does this colour look
            // like" subject.
            face: "serif",
            wmFit: 11.5,
        },
        cardBlurb: `Every press drifts from the textbook LAB&rarr;CMYK
conversion. This measures exactly how far, so a
proofer stops eyeballing a second correction pass by
hand. A work-in-progress never published.`,
        tags: ["node", "express", "sqlite", "vite"],
        intro: `<p>
    A tool for colour matching and corrections on the shop's
    Roland VersaCAMM and CGS Flexpack printers, built to speed
    up matching and take human error out of the process. It
    generates a calibration chart to scan with a
    spectrodensitometer &mdash; the same handheld device used
    for ink density readings &mdash; then cross references the
    LAB values that come back against CMYK<strong>OG</strong>
    ink recipes (the usual four channels, plus orange and
    green, which is what those printers actually mix with) to
    tell you exactly how to adjust a mix. It measures the gap
    with &Delta;E2000, the industry-standard formula for how
    different two colours actually look to a human eye, not
    just how far apart their numbers are.
</p>`,
        shots: [],
        howItWorks: `<p>
    Every printer and substrate combination drifts a little
    from the "textbook" LAB&rarr;CMYK conversion &mdash; the
    same formula can come out a shade warmer or cooler
    depending on the press, the stock, even the day. The
    calibration chart exists to measure that drift directly,
    rather than guessing at it: you print and scan the chart
    once, and the tool compares the LAB reading of your target
    colour against the LAB reading of what actually came off
    press. That difference becomes a correction factor, which
    gets applied to the standard conversion so the CMYK
    formula it hands back already accounts for how your setup
    actually behaves &mdash; instead of a proofer eyeballing
    another correction pass by hand. Each printer supports
    three distinct print modes &mdash; surface, reverse, and
    white-base &mdash; since a colour that's printed normally,
    printed backwards behind clear film, or printed over a
    white backing all need their own calibration.
</p>`,
        builtWith: `<p>
    A Node.js server backed by SQLite, so calibration history
    and jobs persist between sessions without needing separate
    database software. Scanning still goes through X-Rite's
    own DataCatcher software, the same way as
    <a href="project-xrite-export.html">xrite-export</a> reads
    a strip of patches &mdash; the readings just get routed into
    this tool's comparison logic instead. Runs self-hosted on
    a home server.
</p>`,
        closingLinks: `<p style="margin-top: var(--spacing-sm)">
    <a href="https://colour.rgb-b.com">live site &rarr;</a>
    &nbsp;&nbsp;
    <a href="https://github.com/rgb-b/colour-match">source &rarr;</a>
</p>`,
    },
    {
        slug: "zpl-studio",
        name: "zpl studio",
        description: "wysiwyg label designer for zebra printers",
        plate: {
            ink: "teal",
            depth: 1,
            angle: 0,
            pitch: "medium",
            icon: "zpl-studio",
            label: "RUST · LABEL DESIGNER · 2026",
            axis: { mono: 0.75, casl: 0, wght: 700, slnt: 0 },
            wmFit: 13.25,
        },
        cardBlurb: `No more hand-writing ZPL line by line. Design a
Zebra label visually, on a real canvas, and the
print code writes itself. Import and render images,
clipart, and text.`,
        tags: ["rust", "egui", "android", "WIP"],
        intro: `<p>
    A Dymo-style WYSIWYG label designer for Zebra thermal
    printers. You design labels visually on a canvas and the ZPL
    is generated at print time &mdash; no hand-writing raw ZPL.
</p>`,
        shots: [],
        howItWorks: `<p>
    Zebra printers are told what to print using ZPL, a plain-text
    command language for printers &mdash; normally something you'd
    have to write by hand, line by line, with no way to see the
    result until it's actually printed. This tool skips all of
    that: you design the label visually, like arranging text and
    boxes on a page, and the correct ZPL code is written for you
    automatically the moment you hit print, with an accurate
    on-screen preview the whole time so there are no surprises.
    You can also turn any label into a reusable template &mdash;
    mark a field as, say,
    <span class="mono">{{Name}}</span>, and it automatically
    becomes a fill-in-the-blank box the next time you use that
    template, so printing a batch of different name badges from
    one design is quick.
</p>`,
        builtWith: `<p>
    Written in Rust, a programming language chosen for speed and
    reliability, using a toolkit called egui to build the visual,
    click-and-drag design screen. There's also a matching Android
    version so labels can be designed from a phone or tablet, not
    just a desktop computer. The finished program is a small,
    self-contained download &mdash; only a few megabytes &mdash;
    with nothing extra to install. Every update automatically
    produces ready-to-use builds for Windows, Linux, and Android.
</p>`,
        closingLinks: `<p style="margin-top: var(--spacing-sm)">
    <a href="https://github.com/elphiene/zpl-studio/releases">downloads &rarr;</a>
    &nbsp;&nbsp;
    <a href="https://github.com/elphiene/zpl-studio">source &rarr;</a>
</p>`,
    },
    {
        slug: "whereis",
        name: "whereis",
        description: "self-hosted location tracker pwa",
        plate: {
            ink: "teal",
            depth: 1,
            angle: 15,
            pitch: "medium",
            icon: "whereis",
            label: "REACT · LOCATION TRACKER · 2026",
            axis: { mono: 0, casl: 0.8, wght: 550, slnt: -2 },
            wmFit: 15.25,
        },
        cardBlurb: `A private, self-hosted take on the "where's
everyone" location apps &mdash; live location,
history, and driving stats, for a small group who
actually trust each other. Another proof of
concept/work-in-progress`,
        tags: ["react", "vite", "bun", "traccar", "docker", "WIP"],
        intro: `<p>
    A self-hosted PWA location tracker for a small private group
    &mdash; friends share live location, history, and driving
    stats.
</p>
<div class="design-grid design-grid-sm" style="margin: var(--spacing-md) 0">
    <a href="images/whereis-wordmark.png" target="_blank">
        <img
            src="images/whereis-wordmark.png"
            alt="the WhereIs wordmark logo, with the final letter styled as a pink question mark"
        />
    </a>
    <a href="images/whereis-mark.png" target="_blank">
        <img
            src="images/whereis-mark.png"
            alt="the standalone WhereIs icon, a pink question mark"
        />
    </a>
</div>`,
        shots: [],
        howItWorks: `<p>
    Rather than build GPS tracking from scratch, this uses
    Traccar &mdash; free, well-established software that already
    handles the tricky part of receiving and storing location
    data from phones. On top of that sits a thinner layer I built
    myself that adds the parts specific to this app: inviting
    friends in, logging people in securely, and sending
    notifications. The app itself is a website that behaves like
    an installed app on your phone &mdash; you can add it to your
    home screen, and it keeps working even with a patchy signal
    &mdash; showing everyone's live location on a map, plus
    driving statistics as charts.
</p>`,
        builtWith: `<p>
    The screens you see are built with React (a common toolkit
    for interactive web pages) and written in TypeScript, a
    version of JavaScript that catches more mistakes before they
    ever reach you. The custom middle layer runs on Bun, a fast
    JavaScript engine, and keeps its data in SQLite, a database
    that's just a single file. The whole thing &mdash; the
    tracking server, the middle layer, the maps, and the app
    itself &mdash; is packaged up with Docker so it can be
    started or moved as one unit, running on a home server for
    now. Built and running locally for testing; waiting on domain
    setup before it goes public.
</p>`,
        closingLinks: `<p style="margin-top: var(--spacing-sm)">
    <a href="https://github.com/elphiene/whereis">source &rarr;</a>
</p>`,
    },
    {
        slug: "signal-tui",
        name: "signal-tui",
        description: "terminal ui for signal messenger",
        plate: {
            ink: "blue",
            depth: 1,
            angle: 45,
            pitch: "coarse",
            icon: "signal-tui",
            label: "RUST · TERMINAL CLIENT · 2026",
            axis: { mono: 1.0, casl: 0, wght: 500, slnt: 0 },
            wmFit: 13.25,
        },
        cardBlurb: `Signal messenger, fully keyboard-driven from the
terminal &mdash; for anyone who'd rather never touch
a mouse just to send a text, an the strippe back ui
terminal dwellers. WIP.`,
        tags: ["rust", "ratatui", "signal-cli", "WIP"],
        intro: `<p>
    A keyboard-driven, buddy-list-style terminal UI for Signal
    messenger.
</p>`,
        shots: [],
        howItWorks: `<p>
    Signal's own security and messaging logic is genuinely
    difficult to get right, so rather than reimplement any of
    that, this project sits entirely on top of
    <span class="mono">signal-cli</span>, an existing,
    well-trusted command-line tool that already does the actual
    talking to Signal's servers. This project's whole job is just
    to be a nicer way of looking at and controlling that
    &mdash; a fully keyboard-operated interface, styled like an
    old-school instant-messenger buddy list, running right there
    in your terminal instead of a graphical window.
</p>`,
        builtWith: `<p>
    Originally written in Python using a terminal-interface
    toolkit called Textual; now being rebuilt in Rust (a
    programming language chosen for speed and reliability) with a
    similar toolkit called ratatui, aiming for a program that
    opens instantly and is easier to keep adding features to. The
    old Python version is kept around for reference but is no
    longer being updated.
</p>`,
        closingLinks: `<p style="margin-top: var(--spacing-sm)">
    <a href="https://github.com/elphiene/signal-tui">source &rarr;</a>
</p>`,
    },
    {
        slug: "lastfm-widget",
        name: "lastfm-widget",
        description: "always-on-top last.fm now-playing widget",
        plate: {
            ink: "teal",
            depth: 2,
            angle: 75,
            pitch: "coarse",
            icon: "lastfm-widget",
            label: "PYTHON · NOW PLAYING · 2026",
            axis: { mono: 0, casl: 0.7, wght: 600, slnt: -3 },
            wmFit: 11.5,
        },
        cardBlurb: `A tiny always-on-top now-playing widget with the
Winamp energy modern desktops forgot &mdash;
300&times;100px, updates every 15s. Pulls data from
users last.fm scrobbles.`,
        tags: ["python", "pywebview", "react"],
        intro: `<img src="images/last-fm-widget.png" />
<p>
    A compact always-on-top desktop widget (300&times;100px)
    that shows what's currently playing from Last.fm, with a Y2K
    / Winamp frosted-glass look.
</p>`,
        shots: [],
        howItWorks: `<p>
    Every 15 seconds it quietly asks Last.fm, a music
    scrobbling/tracking site, what track you're currently
    listening to, and updates the widget to match. Even though
    it looks and behaves like a proper little native desktop app
    &mdash; you can drag it around by its title bar and even
    collapse it down to just that title bar &mdash; it's
    actually built almost entirely with regular web page
    styling, just displayed in a special borderless window
    instead of a normal browser tab. The frosted-glass
    see-through look is a standard visual effect, and it
    politely falls back to a plain solid background on setups
    that can't render it.
</p>`,
        builtWith: `<p>
    A small Python program opens a lightweight embedded browser
    window (rather than a full separate browser) to display the
    widget, and the widget itself is written using React, a
    common toolkit for building interactive web interfaces,
    loaded directly over the internet rather than being
    installed. There's no server and no database involved at all
    &mdash; just one small file listing your Last.fm username
    and an access key. It comes with a few different visual
    skins and a colour picker to match your desktop.
</p>`,
        closingLinks: `<p style="margin-top: var(--spacing-sm)">
    <a href="https://github.com/elphiene/lastfm-widget">source &rarr;</a>
</p>`,
    },
    {
        slug: "live-scores",
        name: "live-scores",
        description: "the least annoying way to check the score",
        plate: {
            ink: "pink",
            depth: 2,
            angle: 75,
            pitch: "medium",
            icon: "live-scores",
            label: "NODE · LIVE LEADERBOARD · 2026",
            // Same broadcast identity as bracket (its sibling) — angle,
            // depth and pitch still vary so the two never look identical
            // sitting next to each other in the grid.
            face: "alt",
            axis: { wdth: 100, wght: 800 },
            wmFit: 13.25,
        },
        cardBlurb: `Bracket's sibling for anything that isn't a
knockout &mdash; golf majors and European league
tables. No ads, no login, no betting odds, just
the score.`,
        tags: ["node", "express", "react", "vite", "in progress"],
        intro: `<p>
    The least annoying way to check the score. One page for
    golf majors and European football tables &mdash; no ads,
    no login, no cookie banner, no betting odds shoved in your
    face. Just the score.
</p>`,
        shots: [],
        howItWorks: `<p>
    This is the sibling to <a href="project-bracket.html">bracket</a>,
    the World Cup/Wimbledon/AFL knockout display I'd already
    built. Bracket is very good at one shape of tournament:
    two sides, one winner, round after round. But a golf
    leaderboard or a football league table isn't a bracket at
    all &mdash; it's a ranked list that reshuffles all day,
    with a completely different sense of what "currently
    happening" even means. Rather than bend bracket's tree
    layout into something it was never built for, it made
    more sense to build a proper sibling site that starts from
    the leaderboard shape instead, while keeping the same
    house rules: no accounts, no tracking, nothing saved
    anywhere except your own browser.
</p>
<p>
    Under the hood it reuses the same trick as bracket: each
    sport gets its own small translator that turns whatever
    odd shape that sport's live-data source hands back into
    one common format the rest of the site understands.
    Currently wired up: the four golf majors (the Open, the
    Masters, the PGA Championship, the US Open) and five
    European leagues (Premier League, La Liga, Serie A,
    Bundesliga, Ligue 1) &mdash; plus, through the same feed
    bracket already has, whatever knockout tournament bracket
    is currently tracking.
</p>`,
        builtWith: `<p>
    Same stack as bracket: a small always-on Node/Express
    server holds a short-lived cache of the latest scores so
    the page stays fast, and a React front end renders it.
    It's finished and running in production mode already
    &mdash; the only thing left is wiring it up as a proper
    always-on service with its own address, the same way
    bracket is, rather than something I have to start by
    hand.
</p>`,
        closingLinks: `<p style="margin-top: var(--spacing-sm)">
    <a href="https://github.com/elphiene/live-scores">source &rarr;</a>
    &mdash; not live yet, hang tight
</p>`,
    },
    {
        slug: "tidal-collaborative",
        name: "tidal-collaborative",
        description: "real-time collaborative tidal playlist sync",
        plate: {
            ink: "teal",
            depth: 3,
            angle: 0,
            pitch: "medium",
            icon: "tidal-collaborative",
            label: "NODE · PLAYLIST SYNC · 2026",
            axis: { mono: 0.3, casl: 0.2, wght: 600, slnt: 0 },
            // At 19 characters this name is well outside the 3-rung ladder's
            // range (longest sample it was tuned against was 12) — even the
            // smallest rung clips it against the plate's own overflow:hidden
            // backstop. One-off override rather than stretching the whole
            // ladder for a single outlier.
            wmFit: 8.5,
        },
        cardBlurb: `Keeps a shared Tidal playlist in sync across
everyone's own account in real time &mdash; without
this app ever seeing or storing anyone's Tidal
login.`,
        tags: ["node", "websocket", "sqlite", "docker", "v1.0.0"],
        intro: `<p>
    Self-hosted real-time collaborative Tidal playlist sync.
    Users sign into their Tidal accounts, link a playlist, and
    any track added or removed propagates automatically to every
    collaborator's own playlist.
</p>`,
        shots: [
            {
                file: "tidal-collaborative.png",
                alt: "tidal-collaborative sign-in screen with a 'sign in with Tidal' button",
                caption: "server-side OAuth &mdash; the browser never touches a token",
            },
        ],
        howItWorks: `<p>
    Tidal doesn't offer any way to be notified the instant
    someone changes a playlist, so instead the server quietly
    checks each linked playlist every so often. When it spots a
    change, it writes down exactly what changed in a running log
    (a bit like a diary that's only ever added to, never edited),
    tells everyone's browser about it instantly, and then queues
    that same change up to be copied into every other
    collaborator's own playlist. Keeping a full log like this
    means that if someone's connection drops or the server
    restarts, nothing gets lost or duplicated &mdash; it can always
    pick up exactly where it left off, and the log doubles as a
    built-in activity history.
</p>`,
        builtWith: `<p>
    A Node.js server that talks to browsers over a
    &ldquo;WebSocket&rdquo; &mdash; a permanently-open connection
    that lets the server push updates to your screen instantly,
    instead of your browser having to keep asking &ldquo;anything
    new?&rdquo;. All the playlist data lives in SQLite, a
    lightweight database that's just a single file rather than a
    separate server to run. Signing in uses Tidal's own official
    login flow, so this app never sees or stores your password
    &mdash; and the access it is given is scrambled
    (encrypted) before being saved, so even someone who got hold
    of the database file couldn't use it to access anyone's
    account. It's packaged with Docker, a way of bundling an app
    so it runs identically on any computer, and comes with a
    guided first-time setup. Released as version 1.0.0.
</p>`,
        closingLinks: `<p style="margin-top: var(--spacing-sm)">
    <a href="https://github.com/elphiene/tidal-collaborative">source &rarr;</a>
</p>`,
    },
];
