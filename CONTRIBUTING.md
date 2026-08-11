# Contributing Guidelines

Welcome to the Aastha Global Website Project.

This document defines the standard development workflow for all contributors.

---

# Development Workflow

1. Sync your local repository.

```bash
git checkout main
git pull origin main
```

2. Create a feature branch.

```bash
git checkout -b feature/<feature-name>
```

Example:

```bash
git checkout -b feature/create-navbar
```

3. Develop only the assigned GitHub Issue.

4. Test your changes locally.

```bash
npm install
npm run lint
npm run build
npm run dev
```

5. Commit your changes.

```bash
git add .
git commit -m "feat: create navigation bar"
```

Follow Conventional Commits:

- feat:
- fix:
- docs:
- refactor:
- style:
- chore:
- test:

6. Push your branch.

```bash
git push origin feature/<feature-name>
```

7. Create a Pull Request.

- Base Branch: `main`
- Link the issue using:

```
Closes #<issue-number>
```

8. Request review from:

```
@cmitesh2503
```

9. Wait for review.

Do **not** merge your own Pull Request.

10. Address review comments (if any).

11. After approval, the repository maintainer will merge the Pull Request.

---

# Branch Naming Convention

```
feature/<feature-name>
bugfix/<bug-name>
hotfix/<bug-name>
docs/<document-name>
chore/<task-name>
```

Examples:

```
feature/create-hero-section
docs/update-readme
chore/add-codeowners
```

---

# Pull Request Requirements

Every Pull Request must include:

- Related GitHub Issue
- Summary of changes
- Testing performed
- Screenshots (for UI changes)
- Completed PR template

---

# Coding Standards

- Follow the project folder structure.
- Keep components modular and reusable.
- Use meaningful variable and file names.
- Remove unused code before submitting.
- Keep commits focused on a single task.

---

# Do Not

- Push directly to `main`.
- Merge your own Pull Request.
- Modify unrelated files.
- Commit secrets, credentials, or API keys.
- Skip local testing.

---

# Need Help?

If the issue requirements are unclear, ask questions before starting development.

Thank you for contributing to Aastha Global IT Solution.