---
title: Integrated Previews for Continuous Publication
short_title: Integrated Previews
---

Curvenote provides seamless integration with GitHub to enable **integrated previews** of your work as you collaborate, write, and revise. This feature ensures that every time a change is committed to a branch or a pull request (PR) is opened, a **preview** or **draft** version of the manuscript is automatically generated. These previews make it easy for you and your collaborators to see how your content will appear in its final form before it is officially published, reducing errors and improving the workflow.

This dynamic preview system enhances transparency in the editorial process, offering collaborators and reviewers a near-final experience of the content, complete with interactive elements and full functionality, long before the manuscript is finalized.

### How It Works

By setting up [Curvenote’s GitHub Action](./github-actions.md) in your repository, integrated previews are automatically created with every commit or pull request. Depending on your configuration, these can take the form of:

- **Drafts**: Generated for every commit on any branch, showing the latest state of the document.
- **Submissions**: A more formal preview that can be reviewed by peers or collaborators. This is typically generated when the pull-request is merged or tagged for review as part of preparing the content for final submission.

This system enables a **live publishing workflow** where every change is tracked and immediately reflected in a shareable web preview.

### Workflow Integration

Upon every commit or pull request:

1. **GitHub Action** runs automatically in the background.
2. The action generates a web-based preview of your content, building it in real-time.
3. A link to the preview is made available in the GitHub repository, enabling collaborators, reviewers, and authors to view the latest changes directly.

:::{figure} ./images/github-preview-comment.png
:class: framed
:label: fig:github-preview-comment
With the appropriate tag added to a PR, the checks and
:::

### Benefits of Integrated Previews

The integrated preview system in Curvenote is designed to support fast-paced, collaborative scientific writing and publishing. Some of the key benefits include:

Instant Feedback
: Every commit creates a live preview, giving authors and reviewers instant access to how the manuscript will look and function.

Collaborative Review
: Team members and collaborators can review and comment on the live version of the document, offering real-time feedback on content, structure, and interactive elements.

Error Reduction
: By previewing the manuscript with each commit or PR, you can catch formatting, structural, or computational errors early in the process, ensuring a smoother final submission.

Interactive Elements
: Even in preview mode, interactive figures, Jupyter notebooks, and other dynamic content are fully functional, allowing for a complete review experience.

### Continuous science practices

Curvenote’s integrated preview system supports a **continuous publication** workflow, where updates are reflected in real-time, and authors have the ability to publish work _incrementally_. This ensures that:

- **Drafts evolve continuously** as changes are committed, making the entire editorial and review process more efficient.
- **Collaboration** becomes seamless, as all contributors have immediate access to the latest version of the manuscript without the need to manually generate and distribute drafts.
- **Final versions** are built on top of a thoroughly reviewed and iterated base, ensuring a more reliable and error-free submission process.
