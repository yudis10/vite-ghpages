# React + TypeScript + Vite

- Add "homepage": "https://(username).github.io/(repo-name)" in package.json,
- Add "deploy": "vite build && gh-pages -d dist" under scripts in package.json
- install gh-pages >> npm install gh-pages
- add base: "/repo-name" in vite.config.ts,
- push the repo to github and run "npm run deploy"
