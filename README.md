# ESLint & Prettier (Code Quality)

## Objective

The objective of Day 19 was to understand and implement code-quality tools in a React Native TypeScript project using ESLint and Prettier.

The main goals were:

- Understand why linting is important.
- Review the existing ESLint configuration.
- Review and use the existing Prettier configuration.
- Identify and fix formatting issues.
- Run ESLint and verify the project for lint errors.
- Configure Prettier to ignore generated and unrelated files.
- Understand how linting and formatting can be integrated into a development workflow.
- Understand the role of pre-commit hooks such as Husky.

---

## Technologies Used

- React Native
- TypeScript
- ESLint
- Prettier
- npm
- Git

---

## ESLint

ESLint is used to analyze JavaScript and TypeScript code and identify potential problems or violations of coding rules.

It can detect issues such as:

- Unused variables
- Incorrect imports
- Invalid or problematic React patterns
- Incorrect hook usage
- Inconsistent coding practices
- Other rule violations configured by the project

The project already had ESLint configured through:

```text
.eslintrc.js