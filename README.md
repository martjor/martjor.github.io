# Website Documentation

This project uses a custom Jekyll theme with a decoupled CV system. Data is stored in YAML, and styling is handled via a structured CSS Grid system.

## 1. Updating the Resume (`_data/resume.yaml`)

The CV content is driven by `_data/resume.yaml`. Follow this schema when adding or updating entries:

### Schema Overview

| Section | Key | Type | Description |
| :--- | :--- | :--- | :--- |
| **Basics** | `basics` | Object | Name, label, email, and research interests. |
| **Education** | `education` | Array | Objects with `institution`, `location`, `degree`, `date`. |
| **Employment** | `employment` | Array | Objects with `position`, `department`, `institution`, `date`, etc. |
| **Research** | `research` | Array | Objects with `role`, `institution`, `pis`, `date`, and `highlights` (list). |
| **Publications**| `publications`| Array | Objects with `authors`, `title`, `journal`, `link`. |
| **Conferences** | `conferences` | Array | Objects with `title`, `organization`, `date`, `type`. |
| **Awards** | `awards` | Array | Objects with `title`, `organization`, `date`. |
| **Teaching** | `teaching` | Array | Objects with `role`, `institution`, `date`, and `highlights`. |
| **Coursework** | `coursework` | Array | Objects with `institution` and `courses` (list). |
| **Languages** | `languages` | Array | Objects with `language` and `fluency`. |

### Date Format
Use abbreviated month names for consistency (e.g., `Aug. 2023`, `May 2028 (expected)`, `Present`).

---

## 2. CV Styling API (`assets/css/style.scss`)

The CV uses a **Structural Grid System** to decouple data from aesthetics.

### Grid Layout: `.cv-section`
Every major section should be wrapped in this grid:
```html
<div class="cv-section">
  <div class="cv-label">Section Title</div>
  <div class="cv-content">
    <!-- Content goes here -->
  </div>
</div>
```
- **`.cv-label`**: Fixed width (180px), **Chinampa Green**, Bold, Uppercase.
- **`.cv-content`**: Flexible width, contains the detailed information.

### Item Headers: `.resume-item`
Used for entries that have a clear "Title on Left, Date on Right" structure:
```html
<div class="resume-item">
  <h3 class="institution-name"><strong>Institution Name</strong></h3>
  <span class="resume-date">Date Range</span>
</div>
```

---

## 3. Deployment

The site is configured to deploy automatically to **GitHub Pages** using **GitHub Actions**.

### Prerequisites
1.  Ensure your code is pushed to the `init` branch (current default).
2.  In your GitHub repository settings:
    -   Go to **Settings** > **Pages**.
    -   Under **Build and deployment** > **Source**, select **GitHub Actions**.

### Automatic Deployment
Every time you push a change to the `init` branch, GitHub Actions will:
1.  Provision a Linux runner.
2.  Install Ruby and your project's dependencies.
3.  Build the Jekyll site.
4.  Deploy the static files to `https://martjor.github.io`.

### Monitoring
You can monitor the progress of builds under the **Actions** tab in your GitHub repository.
