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

  const copyButton = document.createElement("button");
  copyButton.textContent = "📋 Copy";
  copyButton.addEventListener("click", () => copyCode(script.code));

  card.innerHTML = `
    <h3>${script.name}</h3>
    <p>${script.description}</p>
    <pre><code>${script.code}</code></pre>
  `;

  card.appendChild(copyButton);

  const link = document.createElement("a");
  link.href = script.github;
  link.target = "_blank";
  link.textContent = "🔗 View on GitHub";
  card.appendChild(link);

  showcase.appendChild(card);
});

function copyCode(code) {
  navigator.clipboard.writeText(code);
  
   showNotification("✅ Code copied to clipboard!");
}


function showNotification(message) {
  const popup = document.createElement("div");
  popup.className = "copy-popup";
  popup.textContent = message;

  document.body.appendChild(popup);

  
  setTimeout(() => popup.classList.add("show"), 100);

  
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 300); 
  }, 2000);
}
