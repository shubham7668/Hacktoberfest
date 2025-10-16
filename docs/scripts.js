const showcase = document.getElementById("showcase");
const searchInput = document.getElementById("searchInput");

// scripts will be loaded from docs/scripts.json so contributors can edit JSON to add scripts
let scripts = [];

function escapeHtml(str) {
  return String(str)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&/g, "&amp;");
}

function renderScripts() {
  if (!showcase) return;
  showcase.innerHTML = "";
  scripts.forEach((script, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <h3>${script.name}</h3>
    <p>${script.description}</p>

    <div class="uiverse-terminal">
      <div class="uiverse-card">
        <div class="wrap">
          <div class="terminal">
            <hgroup class="head">
              <p class="title">
                <svg width="16" height="16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none"><path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"></path></svg>
                Terminal
              </p>

              <button class="copy_toggle" type="button" aria-label="Copy code" data-index="${index}">
                <svg width="16" height="16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none"><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path></svg>
              </button>
            </hgroup>

            <div class="body">
              <pre class="pre"><code class="language-powershell">${escapeHtml(script.code || "")}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="console-output" data-index="${index}">
      <pre class="output-text"></pre>
    </div>

    <div class="card-actions">
        <button class="btn-demo button-run" data-index="${index}">
          <div class="button-overlay"></div>
          <span>Run Demo <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 53 58" height="58" width="53">
<path stroke-width="9" stroke="currentColor" d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"></path>
</svg></span>
        </button>
        <button class="button" onclick="window.open('https://github.com/shubham7668/Hacktoberfest/issues/new?title=Improve%20${encodeURIComponent(
          script.name
        )}%20Script', '_blank')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
          </svg>
          <p class="text">Suggest Improvement</p>
        </button>
    </div>
  `;

    showcase.appendChild(card);
  });
    // after DOM insertion, run highlight.js to apply syntax highlighting
    try {
      if (window.hljs && typeof window.hljs.highlightAll === "function") {
        window.hljs.highlightAll();
      }
    } catch (e) {
      console.warn("Highlight.js failed:", e);
    }
}

// load scripts.json from the same folder as this script
async function loadScripts() {
  try {
    const res = await fetch("scripts.json");
    if (!res.ok) throw new Error("Failed to fetch scripts.json: " + res.status);
    const data = await res.json();
    scripts = data;
    renderScripts();
  } catch (e) {
    console.warn("Could not load scripts.json:", e);
  }
}

// start loading when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadScripts);
} else {
  loadScripts();
}

document.addEventListener("click", function (e) {
  const target = e.target;
  if (!target) return;

  // Run demo button
  if (target.matches(".btn-demo") || target.closest(".btn-demo")) {
    const btn = target.matches(".btn-demo")
      ? target
      : target.closest(".btn-demo");
    runDemo(btn);
    return;
  }

  // terminal copy toggle
  if (target.matches(".copy_toggle") || target.closest(".copy_toggle")) {
    const btn = target.matches(".copy_toggle")
      ? target
      : target.closest(".copy_toggle");
    const index = btn.getAttribute("data-index");
    const code = scripts[index] && scripts[index].code;
    if (!code) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          const orig = btn.innerHTML;
          btn.innerHTML = "✅";
          setTimeout(() => {
            btn.innerHTML = orig;
          }, 1600);
        })
        .catch(() => {
          window.prompt("Copy to clipboard: Ctrl+C, Enter", code);
        });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", code);
    }
    return;
  }

  // Legacy copy button (kept for compatibility)
  if (target.matches(".btn-copy") || target.closest(".btn-copy")) {
    const btn = target.matches(".btn-copy")
      ? target
      : target.closest(".btn-copy");
    const index = btn.getAttribute("data-index");
    const code = scripts[index] && scripts[index].code;
    if (!code) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          const orig = btn.textContent;
          btn.textContent = "✅ Copied!";
          setTimeout(() => {
            btn.textContent = orig;
          }, 2000);
        })
        .catch(() => {
          window.prompt("Copy to clipboard: Ctrl+C, Enter", code);
        });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", code);
    }
    return;
  }
});

// enhance run-demo output accessibility (assumes console-output element exists per card)
function runDemo(button) {
  const index = button.getAttribute("data-index");
  const card =
    button.closest(".card") ||
    document.querySelector(`.card[data-index="${index}"]`);
  const consoleOutput = card && card.querySelector(".console-output");
  if (!consoleOutput) return;

  // accessibility: announce changes to screen readers
  consoleOutput.setAttribute("role", "status");
  consoleOutput.setAttribute("aria-live", "polite");
  consoleOutput.tabIndex = -1;
  consoleOutput.focus();

  // clear previous content and show
  const outputText =
    consoleOutput.querySelector(".output-text") || consoleOutput;
  outputText.textContent = "";
  // mark expanded so CSS transitions the box to a larger height
  consoleOutput.classList.add("expanded");
  consoleOutput.style.display = "block";

  const script = scripts[index];
  if (!script) return;

  let i = 0;
  const speed = 20;

  function typeWriter() {
    if (i < script.demoOutput.length) {
      outputText.innerHTML += script.demoOutput.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      outputText.innerHTML += '<span class="cursor"></span>';
      // leave expanded state after typing completed
      // (keep expanded so the user can read output; remove if you prefer collapse)
      // consoleOutput.classList.remove('expanded');
    }
  }
  typeWriter();
}

// (legacy copy handler removed — functionality merged above)

// Theme toggle module — moves inline wiring into this file
(function () {
  const THEME_KEY = "site-theme";

  function applyTheme(theme) {
    try {
      console.debug("[theme] applying theme:", theme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(
        theme === "dark" ? "dark" : "light"
      );
    } catch (e) {
      /* ignore */
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* ignore */
    }
  }

  function init() {
    const toggle = document.getElementById("theme-toggle");
    let theme = "dark"; // default
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "light" || stored === "dark") theme = stored;
    } catch (e) {
      /* ignore */
    }

    console.debug("[theme] init - resolved theme:", theme);
    applyTheme(theme);

    if (!toggle) return;
    toggle.checked = theme === "dark";

    toggle.addEventListener("change", function () {
      const newTheme = toggle.checked ? "dark" : "light";
      console.debug("[theme] toggle changed, newTheme=", newTheme);
      applyTheme(newTheme);
      try {
        saveTheme(newTheme);
        console.debug("[theme] saved theme:", newTheme);
      } catch (e) {
        console.debug("[theme] save failed", e);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* Header search behavior: tie checkbox -> focus, close on outside/Escape, and live filter */
(function () {
  const checkbox = document.getElementById("header-search-toggle");
  const input = document.getElementById("header-search-input");
  const mainbox = checkbox ? checkbox.nextElementSibling : null;

  if (!checkbox || !input) return;

  function closeSearch() {
    try {
      checkbox.checked = false;
      input.blur();
    } catch (e) {
      /*ignore*/
    }
  }

  // when toggled open, focus the input
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      // small timeout to allow CSS transition to expand
      setTimeout(() => {
        input.focus();
        input.select && input.select();
      }, 200);
    } else {
      input.value = "";
      // restore all cards when closed
      filterCards("");
    }
  });

  // keyboard: pressing Escape while input focused will close the search
  input.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") {
      closeSearch();
    }
  });

  // click outside to close
  document.addEventListener(
    "click",
    function (ev) {
      if (!checkbox.checked) return;
      const target = ev.target;
      if (!target) return;
      if (
        mainbox &&
        (mainbox.contains(target) ||
          (checkbox && checkbox.contains && checkbox.contains(target)))
      )
        return;
      closeSearch();
    },
    true
  );

  // live filter: look into script cards created earlier
  input.addEventListener("input", function () {
    filterCards(input.value);
  });

  function filterCards(q) {
    const term = (q || "").trim().toLowerCase();
    const cards = document.querySelectorAll("#showcase .card");
    if (!cards) return;
    cards.forEach((card) => {
      if (!term) {
        card.style.display = "";
        return;
      }
      const title =
        (card.querySelector("h3") && card.querySelector("h3").textContent) ||
        "";
      const desc =
        (card.querySelector("p") && card.querySelector("p").textContent) || "";
      const code =
        (card.querySelector(".cmd") &&
          card.querySelector(".cmd").textContent) ||
        "";
      const hay = (title + "\n" + desc + "\n" + code).toLowerCase();
      card.style.display = hay.indexOf(term) === -1 ? "none" : "";
    });
  }
})();
