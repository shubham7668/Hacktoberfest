const showcase = document.getElementById("showcase");

const scripts = [
  {
    name: "Disk Space Alert",
    description: "Alert when a drive’s free space is below a threshold.",
    code: `\$threshold = 10GB\nGet-PSDrive -PSProvider FileSystem | Where { \$_.Free -lt \$threshold } | ForEach { \"Drive \$($_.Name) low: \$([math]::Round(\$_.Free/1GB,2)) GB\" }`,
    github: "https://github.com/yourusername/powershell-showcase"  // you can just link the showcase repo itself
  },
  {
    name: "List Special Folders",
    description: "List all system special folder paths (e.g. MyDocuments, Desktop).",
    code: `[Enum]::GetNames([System.Environment+SpecialFolder]) | ForEach { \"$_ : $([Environment]::GetFolderPath($_))\" }`,
    github: "https://github.com/yourusername/powershell-showcase"
  },
  {
    name: "Suppress Command Output",
    description: "Run a command but hide its standard + error output.",
    code: `Some-Command > \$null 2>&1`,
    github: "https://github.com/yourusername/powershell-showcase"
  },
  {
    name: "Get PowerShell Version",
    description: "Display the current PowerShell version in use.",
    code: `$PSVersionTable.PSVersion`,
    github: "https://github.com/yourusername/powershell-showcase"
  }
];

scripts.forEach(script => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${script.name}</h3>
    <p>${script.description}</p>
    <pre><code>${script.code}</code></pre>
    <button onclick="copyCode(\`${script.code}\`)">📋 Copy</button>
    <a href="${script.github}" target="_blank">🔗 View on GitHub</a>
  `;

  showcase.appendChild(card);
});

function copyCode(code) {
  navigator.clipboard.writeText(code);
  alert("Copied to clipboard!");
}
