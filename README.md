
<p align="center">
  <a href="https://www.chromatic.com/">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
  </a>
</p>

<h1 align="center">
  Chromatic's Design Systems for Developers tutorial template
</h1>

This template ships with the main React configuration files you'll need to get up and running fast.

## 🚅  Quick start

1.  **Create the application.**

    Use [degit](https://github.com/Rich-Harris/degit) to get this template.

    ```shell
    # Clone the template
    npx degit chromaui/learnstorybook-design-system-template learnstorybook-design-system
    ```

1.  **Install the dependencies.**

    Navigate into your new site’s directory and install the necessary dependencies.

    ```shell
    # Navigate to the directory
    cd learnstorybook-design-system/

    # Install the dependencies
    yarn
    ```

1.  **Open the source code and start editing!**

    Open the `learnstorybook-design-system` directory in your code editor of choice and building your first component!

## 🔎 What's inside?

A quick look at the top-level files and directories included with this template.

    .
    ├── node_modules
    ├── public
    ├── src
    ├── .gitignore
    ├── .env
    ├── LICENSE
    ├── package.json
    ├── yarn.lock
    └── README.md


1.  **`node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages).

2.  **`public`**: This directory will contain the development and production build of the site.

3.  **`src`**: This directory will contain all of the code related to what you will see on your application.

4. **`.env`**: This file will contain the necessary environment variables for your application.

5.  **`.gitignore`**: This file tells git which files it should not track or maintain during the development process of your project.

6. **`LICENSE`**: The template is licensed under the MIT licence.

7. **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.

8. **`yarn.lock`**: This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(Do not change it manually).**

9. **`README.md`**: A text file containing useful reference information about the project.

## Contribute

If you encounter an issue with the template, we encourage you to open an issue in this template's repository.

## Learning Storybook

1. Read our introductory tutorial over at [Storybook tutorials](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/).
2. Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
2. See our official documentation at [Storybook](https://storybook.js.org/).


## Tutorial 2 - Building a Design system for production

## What is a Design System?
Design systems contain reusable UI components that help teams build complex, durable, and accessible user interfaces across projects. Since both designers and developers contribute to the UI components, the design system serves as a bridge between disciplines. It is also the “source of truth” for an organization’s common components.

There are three technical parts to a design system that we’ll talk about in this guide:

* 🏗 Common reusable UI components
* 🎨 Design tokens: Styling-specific variables such as brand colors and spacing
* 📕 Documentation site: Usage instructions, narrative, do’s and don'ts

## Components for a design system:
# Build components
* 📚 Storybook for UI component development and auto-generated docs
⚛️ React for declarative component-centric UI (via create-react-app)
* 💅 Styled-components for component-scoped styling
* ✨ Prettier for automatic code formatting
# Maintain the system
* 🚥 GitHub Actions for continuous integration
* 📐 ESLint for JavaScript linting
* ✅ Chromatic to catch visual bugs in components (by Storybook maintainers)
* 🃏 Jest for unit testing components
* 📦 npm for distributing the library
* 🛠 Auto for release management workflow
# Storybook addons
* ♿ Accessibility to check for accessibility issues during development
* 💥 Actions to QA click and tap interactions
* 🎛 Controls to interactively adjust props to experiment with components
* 📕 Docs for automatic documentation generation from stories

Reference to Storybook's Design system: https://github.com/storybookjs/design-system

## Steps

# Create an inventory
Manually cataloging screens in various web sites or apps to discern common UI patterns.
Useful heuristics:
* If a UI pattern is used more than three times, turn it into a reusable UI component.
& If a UI component is used in 3 or more projects/teams, put it in your design system.

In design system nomenclature global style variables are called “design tokens”.

## Code formatting and linting for hygiene
Design systems are collaborative, so tools that fix syntax and standardize formatting serve to improve contribution quality