(function () {
  const talk = window.TONIK_TALK;
  const params = new URLSearchParams(window.location.search);
  const printMode = params.get("print");
  const mode = document.body.dataset.mode;

  if (printMode === "slides") document.body.classList.add("print-slides");
  if (printMode === "cards") document.body.classList.add("print-cards");

  const esc = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  function renderDeck() {
    const deck = document.getElementById("deck");
    deck.innerHTML = talk.slides
      .map(
        (slide, index) => `
          <section class="slide ${slide.className || ""}" data-slide="${index}" id="${slide.id}">
            <div class="slide__inner">${slide.html}</div>
            <footer class="slide-footer">
              <span>${talk.event}</span>
              <span>${String(index + 1).padStart(2, "0")} / ${String(talk.slides.length).padStart(2, "0")}</span>
            </footer>
          </section>
        `,
      )
      .join("");

    let index = Math.max(
      0,
      Math.min(talk.slides.length - 1, Number(params.get("slide") || 1) - 1 || 0),
    );

    const counter = document.getElementById("counter");
    const notes = document.getElementById("notes");
    const notesBody = document.getElementById("notesBody");
    const allSlides = [...document.querySelectorAll(".slide")];

    function update() {
      allSlides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
      counter.textContent = `${index + 1} / ${talk.slides.length}`;
      const activeCards = talk.slides[index].cards || [];
      notesBody.innerHTML = activeCards
        .map((cardNumber) => {
          const card = talk.cards[cardNumber - 1];
          return `
            <article>
              <p class="card-ref">${String(cardNumber).padStart(2, "0")} · ${esc(card.minute)}</p>
              <h3>${esc(card.title)}</h3>
              <p>${esc(card.text)}</p>
            </article>
          `;
        })
        .join("");
      history.replaceState(null, "", `?slide=${index + 1}`);
    }

    function next() {
      index = Math.min(talk.slides.length - 1, index + 1);
      update();
    }

    function prev() {
      index = Math.max(0, index - 1);
      update();
    }

    document.getElementById("next").addEventListener("click", next);
    document.getElementById("prev").addEventListener("click", prev);
    document.getElementById("closeNotes").addEventListener("click", () => {
      notes.hidden = true;
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === " " || event.key === "PageDown") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        prev();
      } else if (event.key === "Home") {
        index = 0;
        update();
      } else if (event.key === "End") {
        index = talk.slides.length - 1;
        update();
      } else if (event.key.toLowerCase() === "n") {
        notes.hidden = !notes.hidden;
      } else if (event.key.toLowerCase() === "f") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    });

    if (printMode === "slides") {
      allSlides.forEach((slide) => slide.classList.add("is-active"));
      document.querySelector(".hud").remove();
      notes.remove();
      return;
    }

    update();
  }

  function renderCards() {
    const cards = document.getElementById("cards");
    cards.innerHTML = talk.cards
      .map(
        (card, index) => `
          <article class="speaker-card">
            <header>
              <p>${esc(card.slide)} · ${esc(card.minute)}</p>
              <span>${String(index + 1).padStart(2, "0")} / ${String(talk.cards.length).padStart(2, "0")}</span>
            </header>
            <h1>${esc(card.title)}</h1>
            <p>${esc(card.text)}</p>
          </article>
        `,
      )
      .join("");
  }

  if (mode === "deck") renderDeck();
  if (mode === "cards") renderCards();
})();
