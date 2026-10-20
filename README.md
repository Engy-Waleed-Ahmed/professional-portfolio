# Professional Portfolio Website

**Student:** Engy Waleed Ahmed Yousef Azaam
**Institution:** Delta Higher Institute for Computers
**Level:** Fourth-Year Computer Science / Information Technology student

## Project Overview

A modern, responsive, single-page personal portfolio built as a university practical assignment. It is a static website: no backend, no build tools, no package manager.

## Technologies Used

- HTML5 (semantic markup)
- CSS3 (custom properties, responsive media queries)
- Bootstrap 5.3 (grid, navbar, forms, utilities) via CDN
- Bootstrap Icons via CDN
- Google Fonts (Inter) via CDN
- Vanilla JavaScript

> Bootstrap, icons and the font load from a CDN, so an internet connection is needed the first time you open the page.

## Website Sections

Home, About Me, Education & Qualifications, Technical Skills, Featured Projects, Let's Connect (Contact), Footer.

## Main Features

- Sticky responsive navbar with mobile hamburger menu and active-link highlighting
- Hero section with entrance animation and profile image placeholder
- Smooth scrolling and a back-to-top button
- Skill cards, project cards with local SVG illustrations
- Contact form with validation (name, email format, subject, message)
- Honest form behaviour: it never claims a message was sent unless the visitor's email app opens (mailto)
- Automatic copyright year
- Scroll reveal animation that respects `prefers-reduced-motion`
- Keyboard accessible, visible focus states, skip link

## Folder Structure

```
professional-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── profile-placeholder.svg
│       ├── project-1.svg
│       ├── project-2.svg
│       └── project-3.svg
├── README.md
└── .gitignore
```

## How to Run

Double-click `index.html`, or open it in any modern browser. No installation is required.

## How to Customize

| What | Where |
| --- | --- |
| Email, phone, city, GitHub, LinkedIn | Contact section in `index.html` (replace the `[YOUR_...]` placeholders) |
| Make the form open your email app | Set `RECIPIENT_EMAIL` at the top of `js/script.js` |
| Profile photo | Replace `assets/images/profile-placeholder.svg` with your photo (or change the `src` in `index.html`; two places) |
| Skills | Skills section in `index.html`; remove the "Sample content" note once confirmed |
| Projects | Projects section: edit text, set real GitHub / demo links, remove `disabled` class, `aria-disabled` and `tabindex="-1"` from those buttons, remove the "Sample" tags |
| Footer social icons | Point the footer icon `href`s at your real profiles |
| Colors | CSS variables at the top of `css/style.css` |

The skills and projects shown are **sample content**. Replace them with your real work before submission.

## Upload to GitHub

1. Create an empty repository on github.com (no README), e.g. `professional-portfolio`.
2. In a terminal inside the project folder run:

```bash
git init
git add .
git commit -m "Add personal portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/professional-portfolio.git
git push -u origin main
```

## Optional: GitHub Pages Deployment

1. Open the repository on GitHub, then **Settings > Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`, then **Save**.
4. After a minute your site is live at `https://YOUR_USERNAME.github.io/professional-portfolio/`.
