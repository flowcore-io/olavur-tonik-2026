window.TONIK_TALK = {
  title: "Same AI. Different Results.",
  subtitle: "Why your agents need their own knowledge base.",
  speaker: "Olavur Ellefsen, CEO and co-founder of Usable",
  event: "Tonik 2026 · Tórshavn · 8 May 2026",
  slides: [
    {
      id: "cover",
      className: "slide--cover",
      cards: [1],
      html: `
        <div class="cover-copy">
          <p class="eyebrow">TONIK 2026 · KEYNOTE</p>
          <h1>Same AI.<br><span>Different Results.</span></h1>
          <p class="subtitle">Why your agents need their own knowledge base.</p>
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
        <h2>AI is a technology shock.<br><span>The landing is uneven.</span></h2>
        <div class="stats-row">
          <div><strong>25%</strong><span>work taken over</span></div>
          <div><strong>25%</strong><span>work amplified</span></div>
          <div><strong>50%</strong><span>indirectly affected</span></div>
        </div>
        <p class="source">Framing inspired by Hans Kári Vang's AI strategy launch talk at Smæran, Wednesday 6 May 2026.</p>
      `,
    },
    {
      id: "state-reasoning",
      className: "slide--clocks",
      cards: [5, 6],
      html: `
        <p class="eyebrow">THE MISSING LAYER</p>
        <h2>Your systems store state.<br><span>Your people carry reasoning.</span></h2>
        <div class="clock-grid">
          <section>
            <h3>State clock</h3>
            <p>Files, dashboards, tickets, contracts, code, meeting notes.</p>
            <small>What is true now.</small>
          </section>
          <section class="hot">
            <h3>Event clock</h3>
            <p>Why we chose it, what constrained us, who objected, what happened after.</p>
            <small>Why it became true.</small>
          </section>
        </div>
      `,
    },
    {
      id: "agent-memory",
      className: "slide--memory",
      cards: [7, 8, 9],
      html: `
        <div class="memory-copy">
          <p class="eyebrow">WHAT AGENTS NEED</p>
          <h2>A knowledge base is not a folder.<br><span>It is a working memory.</span></h2>
        </div>
        <img class="memory-art" src="./assets/memory-layer.png" alt="A central knowledge layer connected to many smaller blocks">
        <div class="verb-ring">
          <span>read before acting</span>
          <span>cite what matters</span>
          <span>enforce standards</span>
          <span>write back learning</span>
        </div>
      `,
    },
    {
      id: "strategy-story",
      className: "slide--story",
      cards: [10],
      html: `
        <p class="eyebrow">STORY 1 · NATIONAL STRATEGY</p>
        <h2>The project memory became<br><span>a deliverable.</span></h2>
        <div class="flow-line">
          <span>stakeholder input</span>
          <b></b>
          <span>fragments</span>
          <b></b>
          <span>synthesis</span>
          <b></b>
          <span>living strategy</span>
        </div>
        <p class="large-copy narrow">Not a finished PDF with context thrown away. A memory layer the next phase can ask questions of.</p>
      `,
    },
    {
      id: "game-story",
      className: "slide--split slide--game",
      cards: [11],
      html: `
        <div class="split-copy">
          <p class="eyebrow">STORY 2 · GAME DEVELOPMENT</p>
          <h2>From one-shot prompting<br>to a specialist workspace.</h2>
          <p class="large-copy">The agent got better when the project stopped living only in the conversation.</p>
        </div>
        <div class="image-stage wide">
          <img src="./assets/game-dialogue.png" alt="Game development dialogue between a developer and an AI assistant">
        </div>
      `,
    },
    {
      id: "operator-story",
      className: "slide--operator",
      cards: [12],
      html: `
        <p class="eyebrow">STORY 3 · AUTONOMOUS OPERATORS</p>
        <h2>Same engine.<br><span>Different harness.</span><br>One memory layer.</h2>
        <div class="operator-grid">
          <img src="./assets/langa-stina.jpg" alt="Langa Stina operator emblem">
          <div class="operator-line"></div>
          <img src="./assets/operator-receipt.png" alt="Agent result receipt posted back after work">
        </div>
        <p class="source">Inspired by Brian Bischoff's Usable Fragments talk at Reinsaríið, Thursday 7 May 2026.</p>
      `,
    },
    {
      id: "decision-traces",
      className: "slide--trace",
      cards: [13, 14],
      html: `
        <p class="eyebrow">THE FRONTIER</p>
        <h2>Agents should leave<br><span>decision traces.</span></h2>
        <div class="trace-chain">
          <span>Observed</span>
          <span>Constraint</span>
          <span>Tradeoff</span>
          <span>Action</span>
          <span>Outcome</span>
        </div>
        <p class="large-copy narrow">The strategic asset is not only data. It is accumulated judgement that machines can reuse.</p>
        <p class="source">Context Graphs framing from Ajit Jaokar's Usable Fragments guest talk at Reinsaríið, Thursday 7 May 2026.</p>
      `,
    },
    {
      id: "simulation",
      className: "slide--statement",
      cards: [15],
      html: `
        <p class="eyebrow">BEYOND RETRIEVAL</p>
        <h2>If your agent can only search,<br><span>it remembers facts.</span></h2>
        <p class="statement">If it can ask "what usually happens when we do this?", it is beginning to reason over precedent.</p>
      `,
    },
    {
      id: "professions",
      className: "slide--professions",
      cards: [16, 17],
      html: `
        <p class="eyebrow">EVERY KNOWLEDGE PROFESSION</p>
        <h2>Your knowledge base is where<br><span>local judgement becomes reusable.</span></h2>
        <div class="profession-grid">
          <span>Teacher: examples that worked</span>
          <span>Lawyer: clauses and rationale</span>
          <span>Engineer: decisions and incidents</span>
          <span>Manager: goals, tradeoffs, promises</span>
          <span>Researcher: sources and gaps</span>
          <span>Founder: market learning and bets</span>
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
          <li>Capture your top repeated decisions.</li>
          <li>Turn review comments into standards.</li>
          <li>Connect the agent before it acts.</li>
          <li>Require sources for important work.</li>
          <li>Write the result back every time.</li>
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
          <p class="large-copy narrow">Same AI. Different knowledge base. Different results.</p>
          <p class="meta">usable.dev</p>
        </div>
        <img src="./assets/usable-mascot.png" alt="Usable mascot">
      `,
    },
  ],
  cards: [
    {
      minute: "00:00-01:00",
      title: "Open With The Title",
      slide: "Slide 1",
      text: "Good morning. The official title of this talk is Same AI, Different Results. I like that title because it sounds almost unfair. If we all have access to the same AI models, the same tools, the same chat windows, why do the results differ so much? One person gets a useful plan. Another gets generic fluff. One team gets production-ready work. Another gets a pile of review comments. My argument today is simple: the difference is not mainly the model. The difference is the knowledge around the model. AI is becoming widely available. What is not evenly distributed is context, memory, judgement, standards, and the ability for agents to learn from what already happened."
    },
    {
      minute: "01:00-02:00",
      title: "The Familiar Moment",
      slide: "Slide 2",
      text: "Let me start with a scene most of us recognize. Two people sit down with the same AI. They ask almost the same question. Maybe it is a developer asking for an implementation plan. Maybe it is a teacher asking for lesson material. Maybe it is a manager asking for a project brief. Both answers sound confident. Both answers are reasonable. But they are not the same. One fits the local reality. The other misses the hidden rules. It uses the wrong terminology, ignores a previous decision, suggests a tool the team already rejected, or solves a problem the organization does not actually have. The prompt was similar. The model was similar. The world behind the prompt was not."
    },
    {
      minute: "02:00-03:00",
      title: "Why Prompting Is Not Enough",
      slide: "Slide 2",
      text: "When this happens, we often blame the prompt. We say: I should have written better instructions. Sometimes that is true. But after a while, better prompting becomes a strange way to run an organization. It means every person has to manually carry the company in their head and paste it into the chat again and again. Please remember our standards. Please remember how we talk to customers. Please remember the architecture. Please remember what the board decided last month. That is not a workflow. That is humans acting as memory sticks for machines. The more agents we use, the more expensive this becomes. We need the knowledge to live somewhere the agents can actually use."
    },
    {
      minute: "03:00-04:00",
      title: "The Technology Shock",
      slide: "Slide 3",
      text: "On Wednesday, 6 May, at the AI strategy launch at Smæran, Hans Kári Vang framed AI as a general-purpose technology, like electricity, steam, or the internet. That matters because general-purpose technologies do not land neatly. They do not simply remove a fixed percentage of jobs and call it a day. They change tasks, prices, expectations, and behavior. Some work is automated. Some work becomes more productive. Some work is affected indirectly. And there is uncertainty about timing. The important point for this audience is that we should not only ask, will AI change my profession? It will. The better question is: when the tools multiply, what keeps the work coherent?"
    },
    {
      minute: "04:00-05:00",
      title: "Knowledge Work Is Judgement",
      slide: "Slide 4",
      text: "Most knowledge work is not just producing words, code, slides, contracts, reports, or plans. Those are the visible outputs. Underneath them is judgement. Why did we choose this wording? Why did we avoid that vendor? Why do we onboard customers in this order? Why does this exception matter? Why is this number trusted and that one not trusted? An AI connected only to documents sees the output, but not the judgement that produced it. It sees the state of the work. It does not see the reasoning that made the state true. That is why generic AI can sound smart and still be locally wrong."
    },
    {
      minute: "05:00-06:00",
      title: "The Two Clocks",
      slide: "Slide 4",
      text: "A useful way to think about this is two clocks. The first is the state clock: what is true now. Your CRM has a deal stage. Your codebase has a configuration. Your policy document has a sentence. Your project plan has a deadline. The second is the event clock: what happened, in what order, and why. Who changed the deal stage? What tradeoff led to that configuration? Why was that sentence written carefully? What happened the last time we missed a deadline? Organizations are very good at storing state. They are much worse at storing reasoning. But reasoning is exactly what agents need if we want them to work like colleagues instead of autocomplete."
    },
    {
      minute: "06:00-07:00",
      title: "Agents Raise The Stakes",
      slide: "Slide 5",
      text: "This becomes more important when we move from chatbots to agents. A chatbot answers. An agent acts. It reads files, calls tools, opens pull requests, books meetings, updates tickets, sends summaries, and sometimes runs while we are not watching. When the system is only answering, missing context is annoying. When the system is acting, missing context becomes a governance problem. The agent needs to know what matters before it acts. It also needs to leave something behind after it acts. Otherwise every run is a disposable event. You pay for the work, but you do not accumulate learning."
    },
    {
      minute: "07:00-08:00",
      title: "What A Useful Knowledge Base Does",
      slide: "Slide 5",
      text: "So when I say knowledge base, I do not mean a folder of PDFs. I do not mean a wiki nobody updates. I do not mean a vector database with mystery chunks. I mean a working memory that agents can interact with. Before the agent acts, it can search the relevant standards, decisions, examples, and prior solutions. While it acts, it can cite the fragments that shaped its plan. After it acts, it can write back what was learned: what changed, what worked, what failed, what should be reused next time. That loop is the difference between AI as a tool and AI as a compounding capability."
    },
    {
      minute: "08:00-09:00",
      title: "The Smallest Loop",
      slide: "Slide 5",
      text: "The smallest version of the loop is almost boring, which is why it is powerful. Search before work. Act with context. Capture after work. Search before work. Act with context. Capture after work. If you do this for a day, it feels like documentation. If you do it for a month, it starts to feel like onboarding. If you do it for six months, it becomes an organizational memory that changes the quality of every future AI session. The same model now enters the room with a history. That is where different results begin."
    },
    {
      minute: "09:00-10:00",
      title: "Story: The Strategy Project",
      slide: "Slide 6",
      text: "Yesterday, Thursday 7 May, at Reinsaríið, the Usable Fragments side-event gave us several concrete versions of this. Jaspur showed it in the national AI strategy work. Julius, our CTO, named another part of the problem in his talk From Fast to Aligned: AI can make teams faster, but speed without shared memory also multiplies drift. In strategy work, there are many voices, sources, and months of context. Normally, much of that disappears into meeting notes, folders, and people's heads. In the Usable version, the project memory becomes part of the deliverable. The strategy is not only a final PDF. It is a living memory layer future work can ask questions of."
    },
    {
      minute: "10:00-11:00",
      title: "Story: The Game Project",
      slide: "Slide 7",
      text: "Jóhann's game development story showed the same pattern in a very different domain. At first, AI can feel like a magic prompt box. Ask for a feature, get some code, push it around, ask again. But game development quickly exposes the limits of that. There is game feel, mechanics, visual language, constraints, experiments, things that were tried and rejected. The breakthrough was building a dedicated workspace for the project. The conversation stopped being a one-shot prompt and became a dialogue with memory. The agent could refer back to the world of the game, not just the latest message. Again: same AI, but now grounded in a richer local context."
    },
    {
      minute: "11:00-12:00",
      title: "Story: Two Operators",
      slide: "Slide 8",
      text: "Brian's talk at the Usable Fragments side-event took it one level further: autonomous operators. One personal operator, one production operator. Same general engine, very different harness. The personal one can run with more freedom. The production one needs branch protection, observability, pull requests, and review. But the load-bearing part was the same: memory first. The operators read from Usable before acting and write results back afterwards. This is important because it moves us away from thinking about AI as one interface. Slack, IDE, browser, terminal, phone - those are surfaces. The durable thing is the memory layer underneath."
    },
    {
      minute: "12:00-13:00",
      title: "Decision Traces And Context Graphs",
      slide: "Slide 9",
      text: "Now for the cutting-edge part. At the Usable Fragments side-event, guest speaker Ajit Jaokar presented Context Graphs, which is a useful way to think about the next step. It is not just storing more content. It is connecting context, decisions, and consequences so an agent can reason over them. A decision trace says: what did we observe, what constraints mattered, what tradeoff did we make, what action did we take, and what happened afterwards? This is different from a log. A log says what happened. A decision trace tries to preserve why it happened. Agents do not only need retrieval. They need precedent."
    },
    {
      minute: "13:00-14:00",
      title: "Accumulated Judgement",
      slide: "Slide 9",
      text: "This is where the phrase knowledge management becomes too small, and organizational intelligence becomes more accurate. Your real asset is not only data. It is accumulated judgement. The way your team handles exceptions. The way your profession interprets constraints. The way your customers react when something changes. The way a senior person sees risk before a junior person can name it. If we can externalize even part of that judgement into a memory layer agents can use, we get a very different kind of AI deployment. Not a pilot that impresses people once, but a system that gets better because the organization keeps teaching it."
    },
    {
      minute: "14:00-15:00",
      title: "From Search To Simulation",
      slide: "Slide 10",
      text: "A simple test is this: can your system answer what-if questions grounded in your own history? Not just, find me a document. Not just, summarize this meeting. But: what usually happens when we make this kind of change? Which stakeholders tend to care? What broke last time? Which decision pattern are we repeating? That is the shift from retrieval to simulation. We are still early, but this is the direction. The best knowledge bases for agents will not only help them find facts. They will help them reason over precedent."
    },
    {
      minute: "15:00-16:00",
      title: "Every Profession Has A Version",
      slide: "Slide 11",
      text: "This is not only a software story. A teacher has examples that worked with a certain age group. A lawyer has clauses and negotiation rationale. A doctor has triage judgement and exception paths. A civil servant has policy intent and institutional constraints. A manager has promises, tradeoffs, and stakeholder history. A researcher has sources, failed hypotheses, and gaps. Every knowledge profession contains local judgement that generic AI cannot guess. The question is whether that judgement stays trapped in people's heads and scattered documents, or whether it becomes available to the agents that will increasingly participate in the work."
    },
    {
      minute: "16:00-17:00",
      title: "Personal Knowledge Bases",
      slide: "Slide 11",
      text: "There is a personal version of this. Start by capturing the things you repeat. Your best explanations. Your preferred tone. The checklist you always rebuild. The decision you keep re-arguing with yourself. The examples that make your work recognizably yours. If your AI agent can read those before helping you, you will get less generic work. You will also become more consistent across tools. Today it might be ChatGPT. Tomorrow it might be Claude, Cursor, Hermes, or something else. The tool can change. Your memory should travel with you."
    },
    {
      minute: "17:00-18:00",
      title: "Team Knowledge Bases",
      slide: "Slide 12",
      text: "There is also a team version. Capture the top five review comments you keep giving. Capture the standards that are obvious to insiders but invisible to newcomers. Capture the reason behind the architecture, not only the diagram. Capture the postmortem, but also the tradeoff that made the incident possible. Then connect the agent to that before it writes, plans, researches, or sends. This changes where quality control happens. Instead of correcting everything at review time, you move alignment earlier, into plan time. That is faster, but more importantly, it is calmer."
    },
    {
      minute: "18:00-19:00",
      title: "The Monday Playbook",
      slide: "Slide 12",
      text: "So what should you do Monday morning? First, pick one repeated workflow. Not the whole organization. One workflow. Second, capture the standards and decisions that shape good work in that workflow. Third, make your AI agent search that memory before it acts. Fourth, ask it to cite the fragments that influenced important choices. Fifth, make the end of the task include a memory update: what changed, what was learned, what should the next person know? That is enough to start. You do not need a grand transformation program to stop throwing away learning."
    },
    {
      minute: "19:00-20:00",
      title: "Close",
      slide: "Slide 13",
      text: "I want to leave you with the title again: Same AI, Different Results. In the age of AI, everyone can buy access to intelligence. That means advantage moves somewhere else. It moves to context. It moves to judgement. It moves to the memory layer that makes your agents act like they understand your world. If you are a knowledge professional, your work already contains the material. The question is whether your agents can interact with it. Build that memory layer now. Let it read before it acts. Let it write back after it acts. Same AI. Different knowledge base. Different results. Thank you."
    }
  ]
};
