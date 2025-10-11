const showcase = document.getElementById("showcase");
const searchInput = document.getElementById("searchInput");

let scripts = [];

// Load scripts from JSON file
fetch('scripts.json')
  .then(response => response.json())
  .then(data => {
    scripts = data;
    displayFilteredScripts(scripts);
  })
  .catch(error => {
    console.error('Error loading scripts:', error);
    showcase.innerHTML = '<p style="text-align: center; color: #f85149;">Error loading scripts. Please check if scripts.json exists.</p>';
  });

document.addEventListener('click', function(e) {
  const target = e.target;

  if (target.matches('.btn-copy')) {
    const index = target.getAttribute('data-index');
    const code = scripts[index].code;
    navigator.clipboard.writeText(code).then(() => {
        target.textContent = '✅ Copied!';
        setTimeout(() => { target.textContent = '📋 Copy'; }, 2000);
    });
  }

  if (target.matches('.btn-demo')) {
    runDemo(target);
  }
});

function runDemo(button) {
  const index = button.getAttribute('data-index');
  const card = button.closest('.card');
  const consoleOutput = card.querySelector(`.console-output[data-index="${index}"]`);
  const outputText = consoleOutput.querySelector('.output-text');
  
  const script = scripts[index];
  if (!script) return;

  consoleOutput.style.display = 'block';
  outputText.innerHTML = ''; 

  let i = 0;
  const speed = 20;

  function typeWriter() {
    if (i < script.demoOutput.length) {
      outputText.innerHTML += script.demoOutput.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      outputText.innerHTML += '<span class="cursor"></span>';
    }
  }
  typeWriter();
}

function displayFilteredScripts(filtered) {
  showcase.innerHTML = "";
  filtered.forEach((script, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${script.name}</h3>
      <p>${script.description}</p>
      <pre><code>${script.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
      
      <div class="console-output" data-index="${index}">
        <pre class="output-text"></pre>
      </div>

      <div class="card-actions">
          <button class="btn-demo" data-index="${index}">▶️ Run Demo</button>
          <button class="btn-copy" data-index="${index}">📋 Copy</button>
          <button onclick="window.open('https://github.com/shubham7668/Hacktoberfest/issues/new?title=Improve%20${encodeURIComponent(script.name)}%20Script', '_blank')">💬 Suggest Improvement</button>
      </div>
    `;
    showcase.appendChild(card);
  });
}

searchInput.addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  const filtered = scripts.filter(script =>
    script.name.toLowerCase().includes(term) ||
    script.description.toLowerCase().includes(term)
  );
  displayFilteredScripts(filtered);
});

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});
