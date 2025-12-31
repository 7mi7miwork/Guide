# Minecraft Coding Hub

An educational, multilingual web platform designed to teach Minecraft coding concepts using Visual Blocks, Python, and JavaScript. This project is optimized for GitHub Pages and provides a themed experience matching the Minecraft aesthetic.

## Features
-   **Multilingual Support**: Toggle between English, German, and Traditional Chinese.
-   **Responsive Minecraft Design**: Pixel-perfect buttons, dirt/grass textures, and terminal-style code viewers.
-   **Path-based Learning**: Separate modules for Blocks (MakeCode), Python, and JavaScript/TypeScript.
-   **i18n System**: Custom JSON-based translation logic that persists user preference in `localStorage`.

## Prerequisites
-   A web browser (Chrome, Firefox, Safari, or Edge).
-   To see it live locally, a simple HTTP server (like VS Code Live Server) is recommended due to browser security restrictions on local `fetch()` calls.

## Installation & Setup
1.  **Clone the Repository**:
    git clone https://github.com/your-username/minecraft-coding-hub.git
2.  **Navigate to the folder**:
    cd minecraft-coding-hub
3.  **Run Locally**:
    If you have Python installed, run:
    python -m http.server 8000
    Then open `http://localhost:8000` in your browser.

## Deployment to GitHub Pages
1.  Create a new repository on GitHub.
2.  Push this code to the `main` branch.
3.  Go to **Settings** > **Pages**.
4.  Under **Build and deployment**, select **Branch: main** and click **Save**.
5.  Your site will be live at `https://your-username.github.io/minecraft-coding-hub/`.

## Project Structure
-   `index.html`: The landing page with language selection and course cards.
-   `assets/css/style.css`: All Minecraft-themed styles and layout.
-   `assets/js/i18n.js`: The translation engine.
-   `locales/*.json`: Translation files for all supported languages.
-   `languages/`: Subdirectories for specific coding tutorials.

## Customization
-   **Adding Screenshots**: Replace the `div.screenshot-placeholder` elements in the HTML files with `<img>` tags pointing to your Minecraft screenshots in `assets/images/`.
-   **Adding Languages**: Create a new `.json` file in `locales/` (e.g., `fr.json`) and add a button to the `lang-switcher` in the HTML files.

## Troubleshooting
-   **Translations not loading**: Ensure you are running the project through a web server (localhost). Browsers often block local file fetching (`file://`) for security reasons.
-   **Broken Links**: Ensure you keep the relative paths (`../../`) in the subdirectories consistent when adding new pages.
