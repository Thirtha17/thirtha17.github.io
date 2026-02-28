# Deploy To GitHub Pages

## 1) Initialize git in this folder

```bash
cd "/Users/thirtha/Projects /blackhole-portfolio"
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
```

## 2) Create your GitHub Pages repo

Create this exact public repository under your account:

`Thirtha17.github.io`

Then connect your local folder:

```bash
git remote add origin https://github.com/Thirtha17/Thirtha17.github.io.git
git push -u origin main
```

## 3) Enable Pages in GitHub

In your repo:

1. Go to `Settings` -> `Pages`
2. Under `Build and deployment`, set `Source` to `GitHub Actions`

The included workflow (`.github/workflows/pages.yml`) will deploy automatically on each push to `main`.

## 4) Your live URL

`https://thirtha17.github.io/`
