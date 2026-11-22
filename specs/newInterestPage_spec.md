# Specification: Create a New Interest Subpage

## 1. Objective

Automate the creation and integration of a new interest subpage on my personal website, following the existing website structure, design conventions, naming conventions, and Webpack configuration.

The new page must be consistent with existing interest subpages and accessible through a new card on the main `interests.html` page.

**Important:** Before making changes, inspect the existing repository and use similar pages as references. Do not introduce new design patterns, dependencies, or unnecessary refactoring.

## 2. Required User Inputs

Before implementation, ask the user for the following information:

1. **Event/Page Name:** The name of the new interest or event.
2. **Event Date:** The date to display on the main interests page.
3. **Local Asset Directory:** The absolute path containing photographs for the new page.
4. **Main Thumbnail:** The filename of the image to use for the card on `interests.html`.
5. **Page Description:** The introductory text or a short description of the event.

If any information is missing, ask the user before proceeding. Do not invent event details.

## 3. Implementation Workflow

### Step 1 — Inspect Existing Implementation

Before creating any files:

- Inspect the `interest_subpages` directory for existing HTML pages.
- Inspect `bundler_js` for corresponding JavaScript files.
- Review `src/interests.html` to understand how cards are structured.
- Identify the JavaScript file responsible for injecting thumbnail images into the main interests page.
- Review `webpack.config.js`, particularly the `HtmlWebpackPlugin` configuration and entry points.

Use the most relevant existing page as a reference.

Preserve existing HTML structure, CSS classes, layout, image galleries, and navigation conventions.

### Step 2 — Create the Interest Subpage HTML

**Target directory:** `interest_subpages/`

**Naming convention:** `interests_<eventName>.html`

Requirements:

- Follow the structure of existing interest subpages.
- Reuse existing CSS classes and styling.
- Include the page title, introduction, and image gallery.
- Use image wrappers and captions consistent with existing pages.
- Create five placeholder image elements initially, unless the user requests otherwise.
- Assign unique image IDs for JavaScript asset injection.
- Preserve the existing navigation and responsive layout.

Do not create new CSS files unless absolutely necessary.

### Step 3 — Create the JavaScript Asset Bundler

**Target directory:** `bundler_js/`

Create a corresponding JavaScript file following the existing naming convention.

Requirements:

- Follow the existing import structure for CSS and shared JavaScript.
- Import image assets from the user-provided local directory.
- Support `.jpg`, `.jpeg`, and `.png` file extensions as appropriate.
- Inject imported image assets into the corresponding HTML elements using their IDs.
- Initially configure up to five images.
- Use consistent and descriptive image identifiers.

Do not rename, move, or modify the original image files.

Ensure that asset imports and image IDs match exactly.

### Step 4 — Update Main Interests Page

**Target file:** `src/interests.html`

Add a new interest card following the existing card structure.

Requirements:

- Display the event title and date.
- Link the card to the newly created interest subpage.
- Include a thumbnail image element.
- Preserve existing card styling, layout, and responsive behaviour.
- Follow the existing ordering convention for cards, preferably newest first if that is the current convention.

Do not modify existing cards unnecessarily.

### Step 5 — Update Main Page Thumbnail Injection

Locate the JavaScript file responsible for injecting images into `interests.html`.

Requirements:

- Import the selected thumbnail image from the provided asset directory.
- Assign the imported image to the new card's image element.
- Follow the existing asset import and injection pattern.
- Ensure that the image element ID matches the new HTML card.

Avoid duplicate imports where practical.

### Step 6 — Update Webpack Configuration

**Target file:** `webpack.config.js`

Update the configuration to include the new interest subpage.

Requirements:

- Add the required JavaScript entry point following the existing naming convention.
- Add the corresponding `HtmlWebpackPlugin` instance.
- Ensure that the HTML template path is correct.
- Ensure that the output filename matches the intended subpage URL.
- Configure the correct JavaScript chunk for the new page.
- Preserve all existing Webpack configuration and plugins.

Do not change unrelated build settings.

## 4. Validation

After implementation:

1. Confirm that all new HTML and JavaScript files exist.
2. Verify that the new interest card links to the correct page.
3. Verify that all image imports resolve correctly.
4. Verify that image element IDs match their JavaScript references.
5. Confirm that the new page is registered correctly in Webpack.
6. Run the existing Webpack build command.
7. Check for compilation errors, missing assets, and broken references.

If the build fails, investigate and correct errors introduced by the changes.

Do not modify unrelated files to resolve pre-existing errors.

## 5. Implementation Constraints

- Reuse existing website components and conventions.
- Maintain consistency with the current visual design.
- Do not introduce new libraries or dependencies.
- Do not refactor unrelated code.
- Do not overwrite existing pages.
- Do not modify or delete original image files.
- Use the existing Webpack asset management approach.
- Ask for clarification when a required detail cannot be determined from the repository.

## 6. Expected Deliverables

Upon completion, provide a concise summary containing:

- New HTML file created.
- New JavaScript bundler file created.
- Existing files modified.
- New page URL or relative path.
- Number of image placeholders configured.
- Webpack build status.
- Any outstanding issues requiring manual attention.

**Completion criterion:** The new interest page is integrated into the website, accessible through the main interests page, and successfully included in the Webpack build.
