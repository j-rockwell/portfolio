const panel = document.getElementById("project-panel");

if (panel) {
  const articles = panel.querySelectorAll<HTMLElement>("[data-project]");
  const ids = new Set<string>(JSON.parse(panel.dataset.projectIds || "[]"));

  const mobileQuery = matchMedia("(max-width: 1023px)");

  function showProject(id: string, { scroll = false } = {}) {
    const active = ids.has(id) ? id : null;
    articles.forEach((article) => {
      article.classList.toggle("is-active", article.dataset.project === active);
    });
    panel?.classList.toggle("is-open", Boolean(active));

    if (active && scroll && mobileQuery.matches) {
      requestAnimationFrame(() => {
        panel?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function idFromHash() {
    return decodeURIComponent(location.hash.slice(1));
  }

  window.addEventListener("hashchange", () =>
    showProject(idFromHash(), { scroll: true }),
  );
  showProject(idFromHash(), { scroll: Boolean(idFromHash()) });
}
