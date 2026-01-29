# Athlete Homeschool Landing Page

Lead capture page for "The Florida Athlete-Homeschool Blueprint" ebook.

## Setup

### 1. Configure Formspree

1. Create a free account at [formspree.io](https://formspree.io/)
2. Create a new form and copy your form endpoint (e.g. `https://formspree.io/f/xabcdefg`)
3. In `index.html`, replace `YOUR_FORM_ID` in the form action URL with your actual form ID

### 2. Add Your Content

- Replace the author photo placeholder: add a `headshot.jpg` and update the HTML
- Host your PDF ebook and link it in the success message
- Update the booking/discovery call link if applicable
- Update `og-image.jpg` for social sharing

## Deploy to Netlify

### Option A: Drag & Drop
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the project folder onto the page
3. Done — your site is live

### Option B: Git Deploy
1. Push this folder to a GitHub repo
2. In Netlify, click "Add new site" > "Import an existing project"
3. Connect your GitHub repo
4. Deploy settings: publish directory is the root (`/`)
5. Click "Deploy site"

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure and content |
| `style.css` | All styling (mobile-first, responsive) |
| `script.js` | Form validation, submission, smooth scroll |

## Customization

- **Colors**: Edit CSS custom properties in `:root` at the top of `style.css`
- **Copy**: Edit text directly in `index.html`
- **Business name**: Search for "Athlete Homeschool Consulting" in `index.html` and replace
