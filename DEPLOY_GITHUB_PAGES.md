# Deploy To GitHub Pages

## 1) Initialize git in this folder

```bash
cd "/Users/thirtha/Projects /blackhole-portfolio"
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
```

## 2) Create a GitHub repo

Use one of these:

1. `thirtha17.github.io` (recommended for your main personal site URL)
2. `blackhole-portfolio` (project site URL with repo path suffix)

Then connect your local folder:

```bash
git remote add origin https://github.com/thirtha17/REPO_NAME.git
git push -u origin main
```

Replace `REPO_NAME` with your actual repository name.

## 3) Enable Pages in GitHub

In your repo:

1. Go to `Settings` -> `Pages`
2. Under `Build and deployment`, set `Source` to `GitHub Actions`

The included workflow (`.github/workflows/pages.yml`) will deploy automatically on each push to `main`.

## 4) Your live URL

1. If repo is `thirtha17.github.io`: `https://thirtha17.github.io/`
2. If repo is `blackhole-portfolio`: `https://thirtha17.github.io/blackhole-portfolio/`

