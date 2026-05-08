window.TONIK_TALK = {
  title: "Same AI. Different Results.",
  subtitle: "Why your agents need organizational memory.",
  speaker: "Olavur Ellefsen, CEO and co-founder of Usable",
  event: "Tonik 2026 · Torshavn · 8 May 2026",
  slides: [
    {
      id: "cover",
      className: "slide--cover",
      cards: [1],
      html: `
        <div class="cover-copy">
          <p class="eyebrow">TONIK 2026 · KEYNOTE</p>
          <h1>Same AI.<br><span>Different Results.</span></h1>
          <p class="subtitle">Why your agents need organizational memory.</p>
          <p class="meta">Olavur Ellefsen · CEO and co-founder of Usable</p>
        </div>
        <img class="cover-art" src="./assets/knowledge-tree.png" alt="Knowledge tree made of connected digital branches">
      `,
    },
    {
      id: "same-prompt",
      className: "slide--split",
      cards: [2, 3],
      html: `
        <div class="split-copy">
          <p class="eyebrow">THE ORDINARY AI MOMENT</p>
          <h2>Same prompt.<br>Same model.<br><span>Different answer.</span></h2>
          <p class="large-copy">The difference is not the intelligence in the cloud. It is the memory around the work.</p>
        </div>
        <div class="image-stage">
          <img src="./assets/branching-agents.png" alt="Digital branches splitting toward different outputs">
        </div>
      `,
    },
    {
      id: "technology-shock",
      className: "slide--stats",
      cards: [4],
      html: `
        <p class="eyebrow">AI AND WORK</p>
        <h2>AI is a technology shock.<br><span>Coherence is the real question.</span></h2>
        <div class="stats-row">
          <div><strong>25%</strong><span>work taken over</span></div>
          <div><strong>25%</strong><span>work amplified</span></div>
          <div><strong>50%</strong><span>indirectly affected</span></div>
        </div>
        <p class="source">Framing inspired by Hans Kari Vang's AI strategy launch talk at Smaeran, Wednesday 6 May 2026.</p>
      `,
    },
    {
      id: "state-reasoning",
      className: "slide--clocks",
      cards: [5, 6],
      html: `
        <p class="eyebrow">THE MISSING LAYER</p>
        <h2>Most systems store <b class="negation">what is true.</b><br><span>Very few store why it became true.</span></h2>
        <div class="clock-grid">
          <section>
            <h3>State clock</h3>
            <p>Files, dashboards, tickets, contracts, code, meeting notes.</p>
            <small>Data context makes agents accurate.</small>
          </section>
          <section class="hot">
            <h3>Reasoning clock</h3>
            <p>Why we chose it, what constrained us, what failed before, what mattered most.</p>
            <small>Decision context makes agents institutional.</small>
          </section>
        </div>
      `,
    },
    {
      id: "agent-memory",
      className: "slide--memory",
      cards: [7, 8],
      html: `
        <div class="memory-copy">
          <p class="eyebrow">WHAT AGENTS NEED</p>
          <h2>A knowledge base <b class="negation">is not a folder.</b><br><span>It is organizational memory.</span></h2>
          <p class="large-copy narrow">Usable is governed organizational memory for AI agents: a working layer they can read before acting and update after acting.</p>
        </div>
        <img class="memory-art" src="./assets/memory-layer.png" alt="A central knowledge layer connected to many smaller blocks">
        <div class="verb-ring">
          <span>read before acting</span>
          <span>use local tools</span>
          <span>govern access</span>
          <span>write back learning</span>
        </div>
      `,
    },
    {
      id: "usable-loop",
      className: "slide--loop",
      cards: [9],
      html: `
        <p class="eyebrow">THE SMALLEST LOOP</p>
        <h2>One loop forgets.<br><span>One loop compounds.</span></h2>
        <div class="loop-grid">
          <section class="loop-panel loop-panel--forget">
            <p class="loop-label">Without a memory layer</p>
            <div class="loop-cycle loop-cycle--simple" aria-label="Ask, get answer, forget">
              <div class="loop-node loop-node--ask"><strong>Ask</strong><span>?</span></div>
              <div class="loop-node loop-node--answer"><strong>Get answer</strong><span>✓</span></div>
              <div class="loop-node loop-node--forget">
                <strong>Forget</strong>
                <span class="fishbowl" aria-hidden="true"><i></i></span>
              </div>
            </div>
          </section>
          <section class="loop-panel loop-panel--usable">
            <p class="loop-label">With Usable</p>
            <div class="loop-cycle loop-cycle--usable" aria-label="Ask, get answer, capture, structure, retrieve">
              <img src="./assets/usable-mascot.png" alt="Usable mascot">
              <span class="loop-step loop-step--ask">Ask</span>
              <span class="loop-step loop-step--answer">Act</span>
              <span class="loop-step loop-step--capture">Capture</span>
              <span class="loop-step loop-step--structure">Govern</span>
              <span class="loop-step loop-step--retrieve">Reuse</span>
            </div>
          </section>
        </div>
      `,
    },
    {
      id: "taks-story",
      className: "slide--split slide--taks",
      cards: [10],
      html: `
        <div class="split-copy">
          <p class="eyebrow">PROOF 1 · PUBLIC SERVICE</p>
          <h2>TAKS gave AI<br><span>a Faroese name.</span></h2>
          <p class="large-copy">Eydei works because the assistant is grounded in official TAKS knowledge, careful with sources, and connected to a feedback loop.</p>
          <p class="source">Eydei, Tollakur and Skatta Ro · live at taks.fo · built with Usable</p>
        </div>
        <div class="taks-stage taks-stage--video">
          <video class="taks-video" src="./assets/taks-eydei-demo.mp4" poster="./assets/taks-eydei-poster.png" autoplay muted loop playsinline preload="metadata" aria-label="TAKS video introducing Eydei, Tollakur and Skatta Ro"></video>
          <img class="taks-poster" src="./assets/taks-eydei-poster.png" alt="TAKS chatbot Eydei greeting users on taks.fo">
        </div>
      `,
    },
    {
      id: "devmode-story",
      className: "slide--devmode",
      cards: [11],
      html: `
        <p class="eyebrow">PROOF 2 · SOFTWARE DEVELOPMENT</p>
        <h2>Fast code is easy.<br><span>Aligned code is engineered.</span></h2>
        <div class="devmode-flow" aria-label="Usable development alignment loop">
          <span>PRD</span>
          <b></b>
          <span>aligned tasks</span>
          <b></b>
          <span>enhanced plan</span>
          <b></b>
          <span>tested code</span>
          <b></b>
          <span>commit + learn</span>
        </div>
        <div class="devmode-contrast">
          <span>review-time cleanup</span>
          <strong>→</strong>
          <span>plan-time alignment</span>
        </div>
        <p class="source">Julius a Rogvi Biskopsto · the Usable development process in practice</p>
      `,
    },
    {
      id: "pattern-repeats",
      className: "slide--pattern",
      cards: [12, 13],
      html: `
        <p class="eyebrow">PROOF 3 · THE PATTERN REPEATS</p>
        <h2 class="solo">The pattern repeats.</h2>
        <div class="pattern-grid">
          <article>
            <h3>Jaspur</h3>
            <p>The project memory became part of the deliverable.</p>
          </article>
          <article>
            <h3>Johann</h3>
            <p>Games improved when the project stopped living only in the latest prompt.</p>
          </article>
          <article>
            <h3>Brian</h3>
            <p>Operators need memory, boundaries, and writeback.</p>
          </article>
          <article>
            <h3>Ajit</h3>
            <p>Precedent matters: decisions, relationships, and outcomes agents can reuse.</p>
          </article>
        </div>
      `,
    },
    {
      id: "decision-traces",
      className: "slide--trace",
      cards: [14, 15],
      html: `
        <p class="eyebrow">THE FRONTIER</p>
        <h2>Decision traces turn memory into<br><span>precedent.</span></h2>
        <div class="trace-chain">
          <span>Observed</span>
          <span>Constraint</span>
          <span>Tradeoff</span>
          <span>Action</span>
          <span>Outcome</span>
        </div>
      `,
    },
    {
      id: "professions",
      className: "slide--professions",
      cards: [16, 17],
      html: `
        <p class="eyebrow">EVERY KNOWLEDGE PROFESSION</p>
        <h2>Every knowledge profession has<br><span>local judgement.</span></h2>
        <div class="profession-grid">
          <span>Teacher: what examples worked</span>
          <span>Lawyer: why that clause moved</span>
          <span>Engineer: decisions and incidents</span>
          <span>Manager: promises and tradeoffs</span>
          <span>Researcher: sources and gaps</span>
          <span>Founder: bets, signals, and lessons</span>
        </div>
      `,
    },
    {
      id: "playbook",
      className: "slide--playbook",
      cards: [18, 19],
      html: `
        <p class="eyebrow">MONDAY MORNING PLAYBOOK</p>
        <h2>Start small.<br><span>Make every run compound.</span></h2>
        <ol class="steps">
          <li>Pick one repeated workflow.</li>
          <li>Capture decisions and standards.</li>
          <li>Connect the agent before it acts.</li>
          <li>Let it reach the right tools.</li>
          <li>Write back learning every time.</li>
        </ol>
      `,
    },
    {
      id: "closing",
      className: "slide--closing",
      cards: [20],
      html: `
        <div>
          <p class="eyebrow">THE MAIN MESSAGE</p>
          <h2>The memory layer<br><span>is the moat.</span></h2>
          <p class="large-copy narrow">Same AI. Different memory. Different results.</p>
          <p class="meta">usable.dev</p>
        </div>
        <img src="./assets/usable-mascot.png" alt="Usable mascot">
      `,
    },
  ],
  cards: [
    {
      minute: "00:00-01:00",
      title: "Same AI. Different Results.",
      slide: "Slide 1",
      text: "The title of this talk is Same AI, Different Results. I like it because it sounds almost unfair. We all have access to strong models now. We all have chat windows. We all have tools that can write, summarize, code, and plan. So why do the outcomes differ so much? Why does one team get something useful while another gets polished nonsense? My argument is simple. The difference is not mainly the model. The difference is whether the AI can work with the memory of the organization. In the age of AI, intelligence is becoming common. Context is not. Judgment is not. Shared memory is not. That is where the real difference starts."
    },
    {
      minute: "01:00-02:00",
      title: "The Familiar Scene",
      slide: "Slide 2",
      text: "Let me start with a scene most of us know. Two people ask almost the same thing. Maybe it is a teacher asking for a lesson plan. Maybe it is a manager asking for a brief. Maybe it is a developer asking for an implementation plan. Both answers sound good. Both are fluent. But one fits the local reality and the other does not. One uses the right language. The other ignores a rule, misses an exception, or suggests something the team already rejected. The prompt was similar. The model was similar. The hidden context was not. That is the basic puzzle behind this talk."
    },
    {
      minute: "02:00-03:00",
      title: "Why Better Prompting Is Not Enough",
      slide: "Slide 2",
      text: "When this happens, we often blame the prompt. We say we should have asked better. Sometimes that is true. But after a while that becomes a strange way to run a company. It means every person has to carry the organization in their own head and paste it into the chat again and again. Please remember our standards. Please remember our customer promises. Please remember why we built it this way. Please remember what legal said last month. That is not a system. That is humans acting as memory sticks for machines. The more agents we use, the more expensive that becomes. The memory needs a better home."
    },
    {
      minute: "03:00-04:00",
      title: "AI Is A Shock. Coherence Is The Question.",
      slide: "Slide 3",
      text: "This matters because AI is not a small feature. It is a general-purpose technology. It changes many kinds of work at once. Some tasks get automated. Some get amplified. Some are changed indirectly because expectations change. That is why the jobs debate can be a bit too narrow. The question for this room is not only what AI will replace. The better question is this: when the tools multiply, what keeps the work coherent? What keeps a company, a public institution, or a professional practice from becoming a pile of disconnected outputs? That is where knowledge management becomes strategic again."
    },
    {
      minute: "04:00-05:00",
      title: "What Gets Lost",
      slide: "Slide 4",
      text: "Most knowledge work is not only about outputs. The visible part is the document, the policy, the slide deck, the code, the answer to the customer. Underneath that sits judgment. Why did we choose this path? What risk were we trying to avoid? Why do we use this wording and not that one? Which exception matters in practice? An AI connected only to files can often see the output. It cannot automatically see the reasoning that produced it. That is why generic AI can sound smart and still be locally wrong. It sees the surface of the work, not the logic underneath it."
    },
    {
      minute: "05:00-06:00",
      title: "Two Kinds Of Context",
      slide: "Slide 4",
      text: "A simple way to say this is that there are two kinds of context. First, there is what is true now. The current numbers. The current file. The current ticket. The current state of the world. That matters. But there is also why it became true. Why the team chose this path. What failed before. What constraint mattered. What exception keeps coming back. I like the shorthand: data context makes agents accurate. Decision context makes agents institutional. Usable is strongest in the second half of that sentence. It helps preserve the part organizations usually lose."
    },
    {
      minute: "06:00-07:00",
      title: "What Usable Is",
      slide: "Slide 5",
      text: "So what is Usable really? Not mainly a knowledge base. Not a folder of PDFs. Not a wiki nobody updates. Not a frozen copy of every database. The best short description I found in our own material is this: Usable is organizational memory for AI agents. More precisely, governed organizational memory. A place where important decisions, standards, precedents, patterns, and lessons become available to people and agents at the moment work is happening. The point is not to make storage look clever. The point is to make real work less forgetful."
    },
    {
      minute: "07:00-08:00",
      title: "What Usable Is Not",
      slide: "Slide 5",
      text: "There is another important part of the current Usable story. We should not pretend that all truth should live inside one memory system. That would create stale confidence very quickly. Live facts should often stay in the live systems where they belong. The current customer status. The current inventory. The current operational state. Usable is strongest around durable learning and decision context. Store the rules, the reasons, the standards, the lessons, the map of where truth lives, and the permissions around it. Then let the agent fetch volatile facts live. That is a much cleaner product story."
    },
    {
      minute: "08:00-09:00",
      title: "The Loop That Compounds",
      slide: "Slide 6",
      text: "This is the whole idea in one picture. Without a memory layer, the loop is simple and wasteful: ask, get answer, forget. The next person starts again. The next agent starts again. With a memory layer, the loop changes. Read before acting. Act. Capture what mattered. Govern it. Reuse it next time. That sounds small, but it changes everything. It moves AI from disposable help to compounding capability. It also reflects the product pattern we keep seeing: the agent is grounded in a workspace, it can reach the right local tools, and when the work is done it leaves something useful behind."
    },
    {
      minute: "09:00-10:00",
      title: "Proof 1: TAKS",
      slide: "Slide 7",
      text: "The TAKS case is a very good public example of this. The assistant is called Eydei, which sounds like AI in Faroese, and TAKS even gave the wider cast names like Tollakur and Skatta Ro. It is friendly on the surface, but the real point is deeper. Tax is high-trust work. People ask about deadlines, customs, deductions, and consequences. A generic bot is not enough. The assistant has to be grounded in official material. It has to be careful with sources. It has to improve from what happens in the real workflow. That is why this story matters. The value is not the chat face. The value is the governed memory behind it."
    },
    {
      minute: "10:00-11:00",
      title: "Proof 2: Julius",
      slide: "Slide 8",
      text: "Yesterday at Reinsarid, we looked at this from several angles. Julius gave the software-development version. His point was not just that AI makes developers faster. His point was that speed creates a new process problem. Three good developers can ask the same AI for the same feature and get three reasonable but different implementations. None are obviously crazy. They just do not fit together. Then the team pays the alignment tax at review time. Julius showed a better loop: start from a PRD, split into aligned tasks, enhance the plan with standards and prior learning before code is written, then write the lesson back after the commit. That moves alignment from review time to plan time."
    },
    {
      minute: "11:00-12:00",
      title: "The Pattern Repeats",
      slide: "Slide 9",
      text: "What struck me yesterday was not that we had several talks. It was that the same missing layer kept showing up in very different domains. In Jaspur's strategy work, the project memory became part of the deliverable. The value was not only the final document, but the reasoning trail behind it. In Johann's game-development work, the breakthrough came when the project stopped living only in the latest prompt. The agent got better when it could return to a workspace with history. Different domain. Same pattern. The tool gets more useful when it can stand on accumulated local context instead of improvising from scratch every time."
    },
    {
      minute: "12:00-13:00",
      title: "More Than One Interface",
      slide: "Slide 9",
      text: "Brian and Ajit push the same idea further. Brian's operators showed that the important thing is not the surface. Slack, IDE, browser, terminal, phone: those are interfaces. The durable part is the memory layer underneath, plus the harness around it. Ajit then gave the conceptual language for the frontier. If we want agents to improve, we need more than retrieval. We need traces of how decisions were made and what happened next. That is when memory starts becoming precedent. And that is when knowledge management begins to feel modern again instead of old-fashioned."
    },
    {
      minute: "13:00-14:00",
      title: "What A Decision Trace Is",
      slide: "Slide 10",
      text: "A decision trace is easier to explain than it sounds. It says: what did we observe, what constraint mattered, what tradeoff did we make, what action did we take, and what happened afterwards? That is different from a log. A log says what happened. A decision trace tries to preserve why it happened. This is one of the deepest points in the current Usable story. Organizations already store lots of output. Much fewer store chains of judgment that an agent can actually reuse. Once you preserve that chain, memory becomes more valuable than search alone."
    },
    {
      minute: "14:00-15:00",
      title: "Precedent And Boundaries",
      slide: "Slide 10",
      text: "Ajit's context-graph framing is useful because it points beyond document retrieval. The goal is not just to find similar text. The goal is to understand relationships between decisions, exceptions, actions, and outcomes. But there is another deep point here. One big company brain is not the answer. The hard part is governing the overlap. The sales assistant should not see board material. The engineering agent should not get every private HR note. Good organizational memory is not only rich. It is well-bounded. That is why governed memory matters so much."
    },
    {
      minute: "15:00-16:00",
      title: "Every Profession Has This",
      slide: "Slide 11",
      text: "This is not a software-only story. Every knowledge profession has local judgment that generic AI cannot guess. A teacher has examples that worked with a certain group. A lawyer has clause history and negotiation rationale. An engineer has incidents, standards, and scars. A manager has tradeoffs, promises, and stakeholder history. A founder has bets, signals, and lessons learned the hard way. The forms change, but the pattern does not. Good work depends on more than facts. It depends on remembered judgment in a specific context."
    },
    {
      minute: "16:00-17:00",
      title: "Personal Memory, Team Memory",
      slide: "Slide 11",
      text: "There is also a personal version and a team version. Your own best examples, checklists, and explanations matter. So do the standards that live only in the heads of experienced teammates. The opportunity is to make that knowledge reusable without pretending everyone should see everything. This is why I keep coming back to the word governed. The future is not one giant pile of memory. It is shared memory where it helps, local memory where it belongs, and clear boundaries in between. That is a more realistic vision of AI at work."
    },
    {
      minute: "17:00-18:00",
      title: "Monday Morning, Part One",
      slide: "Slide 12",
      text: "So what should someone in this room do on Monday morning? First, pick one repeated workflow. Not the whole organization. One workflow. Second, capture the decisions and standards that shape good work in that workflow. What do experienced people know that newcomers or agents do not? Third, connect the agent to that memory before it acts. Do not wait until the review stage to add context. Bring the context earlier, into the plan and the first draft. That alone changes the quality of what comes back."
    },
    {
      minute: "18:00-19:00",
      title: "Monday Morning, Part Two",
      slide: "Slide 12",
      text: "Then do two more things. Let the agent reach the right local tools instead of guessing around them. And make the end of the task include a memory update. What changed? What was learned? What should the next person or next agent know? That is enough to start. You do not need a giant transformation program. You need one loop that stops throwing away learning. If you do that well, the benefit is not only speed. It is calm. Fewer repeated mistakes. Less re-explaining. Better first drafts. Better second runs."
    },
    {
      minute: "19:00-20:00",
      title: "Close",
      slide: "Slide 13",
      text: "I want to end where I began. Same AI. Different Results. In the age of AI, many people can buy access to intelligence. That means advantage moves somewhere else. It moves to owned memory. It moves to judgment made durable. It moves to whether your agents can work with the reality of your world instead of only the patterns of the internet. That is the story I think Usable is really telling now. Not just a knowledge base. Not just search. Governed organizational memory for AI agents. Build that layer well and the same model starts giving you very different outcomes. Thank you."
    },
  ],
};
