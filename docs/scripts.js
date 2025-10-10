const showcase = document.getElementById("showcase");

const scripts = [
  {
    name: "Disk Space Alert",
    description: "Alert when a drive’s free space is below a threshold.",
    code: `\$threshold = 10GB\nGet-PSDrive -PSProvider FileSystem | Where { \$_.Free -lt \$threshold } | ForEach { "Drive \$($_.Name) low: \$([math]::Round(\$_.Free/1GB,2)) GB" }`,
    github: "https://github.com/shubham7668/powershell-showcase",
    demoOutput: "PS C:\\> Drive C low: 8.54 GB\nPS C:\\> Drive D low: 9.12 GB"
  },
  {
    name: "List Special Folders",
    description: "List all system special folder paths (e.g. MyDocuments, Desktop).",
    code: `[Enum]::GetNames([System.Environment+SpecialFolder]) | ForEach { "$_ : $([Environment]::GetFolderPath($_))" }`,
    github: "https://github.com/shubham7668/powershell-showcase",
    demoOutput: "PS C:\\> Desktop : C:\\Users\\Shubham\\Desktop\nPS C:\\> MyDocuments : C:\\Users\\Shubham\\Documents\nPS C:\\> ..."
  },
  {
    name: "Suppress Command Output",
    description: "Run a command but hide its standard + error output.",
    code: `Some-Command > \$null 2>&1`,
    github: "https://github.com/shubham7668/powershell-showcase",
    demoOutput: "PS C:\\> # Command executed successfully with no output."
  },
  {
    name: "Get PowerShell Version",
    description: "Display the current PowerShell version in use.",
    code: `$PSVersionTable.PSVersion`,
    github: "https://github.com/shubham7668/powershell-showcase",
    demoOutput: "Major  Minor  Build  Revision\n-----  -----  -----  --------\n7      2      5      -1"
  }
];

scripts.forEach((script, index) => {
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
