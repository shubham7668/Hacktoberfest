# 🎉 Welcome to Hacktoberfest 2025  

<p align="center">
  <a href="https://hacktoberfest.com/">
    <img src="https://img.shields.io/badge/Hacktoberfest-2025-blueviolet?style=for-the-badge&logo=hackster&logoColor=white" alt="Hacktoberfest 2025 Badge"/>
  </a>
  <a href="https://github.com/shubham7668/Hacktoberfest/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/shubham7668/Hacktoberfest?style=for-the-badge" alt="License Badge"/>
  </a>
  <a href="https://github.com/shubham7668/Hacktoberfest/stargazers">
    <img src="https://img.shields.io/github/stars/shubham7668/Hacktoberfest?style=for-the-badge&color=yellow" alt="Stars Badge"/>
  </a>
  <a href="https://github.com/shubham7668/Hacktoberfest/network/members">
    <img src="https://img.shields.io/github/forks/shubham7668/Hacktoberfest?style=for-the-badge&color=brightgreen" alt="Forks Badge"/>
  </a>
  <a href="https://github.com/shubham7668/Hacktoberfest/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge" alt="PRs Welcome Badge"/>
  </a>
</p>

## 🌟 Everyone is Welcome!  
Hacktoberfest is all about celebrating open source, collaboration, and learning by contributing to real-world projects.

> 💬 **Quantity is fun, but quality is key.**  
> 💡 **Short-term action, long-term impact.**

Contribute anything meaningful to start with 🙌  

---

## 🚀 How to Participate  

1. 🗓️ **Register** anytime between **September 15 and October 31** on [Hacktoberfest.com](https://hacktoberfest.com/).  
2. 🌍 **Find repositories** on GitHub or GitLab that have the **`hacktoberfest`** topic.  
3. 💪 **Submit 6 high-quality Pull Requests (PRs)** between October 1 and October 31.  
   - Make sure maintainers accept your PRs for them to count.  
4. 🏅 **Unlock badges** as you contribute and level up with each accepted PR/MR.  
5. 👕 **Swag:** Earn an exclusive **Hacktoberfest 2025 T-Shirt** if you’re among the first **10,000 Super Contributors** with 6 accepted PRs! *(T&Cs apply)*  

For more details, visit 👉 [https://hacktoberfest.com/participation/](https://hacktoberfest.com/participation/)

---

## 🧭 Rules  

### 1️⃣ No DSA Codes ❌  
Do **not** submit DSA (Data Structures & Algorithms) codes or basic coding problem solutions.  
Such submissions will be marked as **spam** and may **disqualify you from Hacktoberfest** participation.

---

### 2️⃣ What You Can Contribute ✅  
You can contribute in one of the following ways:

- 🧩 **Create a webpage** using **HTML, CSS, and JavaScript** (perfect for beginners).  
- ⚙️ **Contribute to the current project** — improve the **PowerShell Showcase** (UI, responsiveness, scripts, or new features).  
- 💻 **Work on your own project** — it can be based on:
  - 📱 Android  
  - 🌐 Web Development  
  - 🤖 Machine Learning  
  - ⚙️ Robotics  
  - 🐍 Python  
  - 🧠 Any other tech stack (as long as it’s functional and adds value)

💡 Make sure your contribution is **meaningful**, **functional**, and **worthy enough** to be merged.

---

### 3️⃣ Add Snapshots or Deployment Link 🖼️  
Every project submission must include **one** of the following:
- 📸 Screenshots of your working project, **or**
- 🔗 A deployed/live link (GitHub Pages, Netlify, etc.)

This helps reviewers verify your work quickly and fairly.

---

### 4️⃣ Follow & Support 🌟  
- Make sure to **follow [Shubham](https://github.com/shubham7668)** on GitHub.  
- Don’t forget to **star ⭐ the repository** to show your support and help it grow.

---

### ⚠️ Note  
- 🚫 Do **not** push incomplete or non-working projects.  
- 🕵️ All submissions will be **reviewed thoroughly** before approval.  
- 🧨 Pull requests violating these rules will be marked as **invalid/spam**.

---

> 🧠 **Tip:** Read the [CONTRIBUTING.md](./CONTRIBUTING.md) file carefully before opening a Pull Request to ensure fast approval!

---

## ➕ How to add a new script (docs/scripts.json)

To add a new PowerShell script to the showcase, edit `docs/scripts.json` and add an object with these fields:

- name (string) — human friendly title  
- description (string) — short summary of the script  
- code (string) — the script body (use `\n` for new lines inside the JSON string)  
- github (string, optional) — a link to the source or reference repo/file  
- demoOutput (string, optional) — the text that will be typed into the demo console

Example entry:
{
  "name": "Clean Temp Folder",
  "description": "Remove old files from %TEMP%",
  "code": "Get-ChildItem $env:TEMP -Recurse | Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-30) } | Remove-Item -Force -Recurse",
  "github": "https://github.com/your/repo/blob/main/clean-temp.ps1",
  "demoOutput": "Removed 42 files"
}

Notes:
- When testing locally, serve `docs/` over HTTP (e.g. `npx http-server docs`) because `fetch('scripts.json')` will fail on file://.
- Keep `code` as a single JSON string; escape newlines (`\n`) and quotes as needed.
- Add meaningful descriptions and demoOutput to improve reviewer experience.

---

## 📜 LICENSE
  
This project is licensed under the [MIT License](https://github.com/shubham7668/Hacktoberfest/blob/main/LICENSE).  

---

### ❤️ Support the Community
If you like this initiative:
- ⭐ **Star this repository**
- 🧑‍💻 **Contribute**
- 🔁 **Share** with friends and colleagues

Let’s make open source even more awesome together! 💪✨
