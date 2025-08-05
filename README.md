# Migoi Films - Modern Single-Page Website

This is a modern, minimal, single-page scrolling website for Migoi Films, a nature and wildlife inspired photography and conservation effort.

## About The Design

This website is a single-page design with a fixed navigation bar and five full-screen sections:
1.  **Home:** Displays the logo and brand name.
2.  **Projects:** Links to key project areas.
3.  **Inquire:** A Call-to-Action (CTA) for collaboration.
4.  **About:** A brief about Migoi Films.
5.  **Contact:** Sitemap and contact information.

The site is designed to be visually driven, with each section featuring a full-screen background image.

## How to Use

This is a static website built with HTML, CSS, and JavaScript, designed for GitHub Pages.

### Customization

1.  **Content:** Edit `index.html` to change text content in any section.
2.  **Styling:** You can modify `style.css` for minor tweaks, but the core structure is built around the full-screen sections.
3.  **Background Images:** This is the most important part to customize. In `style.css`, find the section with the comment `/* Background Images for Each Section */`. You will see CSS rules for `#home`, `#projects`, `#cta`, `#about`, and `#contact`. Replace the `url(...)` placeholders with links to your own images. It's recommended to create an `images` folder in this directory, add your photos, and then link to them like `url('images/your-photo.jpg')`.
4.  **Scripts:** The `script.js` file handles smooth scrolling and navigation highlighting. No changes are needed unless you want to add more advanced functionality.

### Deploying to GitHub Pages

1.  Make sure your code is in a GitHub repository.
2.  Go to your repository's **Settings**.
3.  In the left sidebar, click on **Pages**.
4.  Under **Source**, select the branch you want to deploy from (usually `main` or `master`).
5.  Choose the `/(root)` folder.
6.  Click **Save**.
7.  Your website will be available at `https://<your-username>.github.io/<your-repository-name>/`. It might take a few minutes to become live.

---

Built with care for Migoi Films.
