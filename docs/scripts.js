const showcase = document.getElementById("showcase");

const scripts = [
  {
    name: "Disk Space Alert",
    description: "Alert when a drive’s free space is below a threshold.",
    code: `\$threshold = 10GB\nGet-PSDrive -PSProvider FileSystem | Where { \$_.Free -lt \$threshold } | ForEach { \"Drive \$($_.Name) low: \$([math]::Round(\$_.Free/1GB,2)) GB\" }`,
    github: "https://github.com/shubham7668/powershell-showcase"
  },
  {
    name: "List Special Folders",
    description: "List all system special folder paths (e.g. MyDocuments, Desktop).",
    code: `[Enum]::GetNames([System.Environment+SpecialFolder]) | ForEach { \"$_ : $([Environment]::GetFolderPath($_))\" }`,
    github: "https://github.com/shubham7668/powershell-showcase"
  },
  {
    name: "Suppress Command Output",
    description: "Run a command but hide its standard + error output.",
    code: `Some-Command > \$null 2>&1`,
    github: "https://github.com/shubham7668/powershell-showcase"
  },
  {
    name: "Get PowerShell Version",
    description: "Display the current PowerShell version in use.",
    code: `$PSVersionTable.PSVersion`,
    github: "https://github.com/shubham7668/powershell-showcase"
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
  <a href="https://github.com/shubham7668/Hacktoberfest/issues/new?title=Improve%20${encodeURIComponent(script.name)}%20Script" target="_blank">💬 Suggest Improvement</a>
`;

  showcase.appendChild(card);
});

function copyCode(code) {
  navigator.clipboard.writeText(code)
    .then(() => {
      console.log("Code copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy code: ", err);
    });
}