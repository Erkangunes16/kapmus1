const searchInput = document.querySelector("#event-search");
const eventCards = [...document.querySelectorAll(".event-card")];
const searchStatus = document.querySelector("#search-status");
const noResults = document.querySelector("#no-results");
const clearButton = document.querySelector("#clear-search");

function filterEvents() {
  const query = searchInput.value.trim().toLocaleLowerCase("tr");
  let visibleCount = 0;

  for (const card of eventCards) {
    const matches = card.textContent.toLocaleLowerCase("tr").includes(query);
    card.hidden = !matches;
    if (matches) visibleCount++;
  }

  searchStatus.textContent = `${visibleCount} etkinlik listeleniyor.`;
  noResults.hidden = visibleCount > 0;
}

searchInput.addEventListener("input", filterEvents);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  filterEvents();
  searchInput.focus();
});
