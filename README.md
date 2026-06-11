# johnsonTyler0511.github.io

Personal portfolio of **Tyler Johnson** — senior robotics engineer in Boston.

**Live:** https://johnsontyler0511.github.io

## Stack

Hand-written HTML, modern CSS, and a small vanilla JS file. No frameworks, no build
step, no dependencies — `git push` to `main` is the deploy (GitHub Pages).

```
.
├── index.html        single-page portfolio
├── 404.html          not-found page
├── css/main.css      all styles (design tokens, layout, reveal animations)
├── js/main.js        reveal-on-scroll + scroll-spy (IntersectionObserver)
└── images/           project images, og-image, favicon.svg
```

## Local preview

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## License

Code is [MIT](LICENSE). Site content — text and images — is © Tyler Johnson,
all rights reserved.
