---
title: Editorial Process: From Submission to Publication
short_title: Editorial Process
---

# Publishing Workflow

## Overview
Navigate the complete publishing workflow from submission to publication, including peer review, revisions, and final acceptance through Curvenote's collaborative platform

## Before You Start
- Ensure your article is complete and ready for submission
- Have your author information and affiliations ready
- Understand the journal's scope and requirements
- Prepare for the peer review process

## 1. Submit Your Article

Submit your paper by creating a pull request to the journal's repository:

- **Fork the repository** to your GitHub account
- **Create a new branch** for your submission
- **Add your manuscript** to the appropriate folder (e.g., `papers`)
- **Open a pull request** to merge your branch into the main repository
- **Include all required metadata** (authors, affiliations, abstract, DOIs)

The pull request serves as the primary hub for discussion and review.

## 2. Automated Checks and Preview

Upon submission, automated checks verify your submission:

- **Template compliance** - Ensures adherence to journal formatting
- **Metadata validation** - Checks for required author information
- **Reference verification** - Validates DOI inclusion in citations
- **Preview generation** - Creates a live preview accessible via GitHub comment

Address any failed checks before proceeding to review.

## 3. Editorial Assignment

An editor is assigned to oversee your submission:

- **Scope assessment** - Editor evaluates if your topic fits the journal
- **Quality review** - Initial evaluation of submission completeness
- **Process guidance** - Editor explains next steps and timeline
- **Reviewer selection** - Editor identifies appropriate peer reviewers

## 4. Peer Review Process

Reviewers provide feedback through the GitHub pull request:

- **Expert evaluation** - Subject matter experts assess your work
- **Public discussion** - All feedback is visible and transparent
- **Inline comments** - Specific suggestions for improvements
- **General feedback** - Overall assessment and recommendations

Reviewers are tagged (`@username`) for notifications and communication.

## 5. Author Revisions

Respond to reviewer feedback with revisions:

- **Address comments** - Make changes based on reviewer suggestions
- **Update pull request** - Add new commits with your revisions
- **Explain changes** - Provide context for major modifications
- **Iterate as needed** - Multiple revision cycles may be required

## 6. Final Decision and Acceptance

The editor makes the final decision:

- **Reviewer satisfaction** - All reviewers must approve the final version
- **Editor approval** - Assigned editor reviews final submission
- **Merge to main** - Pull request is merged, indicating acceptance
- **Publication preparation** - Article moves to publication phase

## 7. Publication and Distribution

Your accepted article becomes publicly available:

- **Curvenote publication** - Article is published on the platform
- **DOI assignment** - Permanent identifier is assigned
- **Journal listing** - Article appears on the journal's website
- **Community announcement** - Publication is shared through appropriate channels

## Next Steps
- Learn about [Managing Authors and Contributors](../authoring/manage-authors.md)
- Understand [Export Options](./export-pdf.md)
- Explore [Site Configuration](site-design/layout-and-theme.md)
- Review [Citation Management](authoring/citations.md)

---

💡 **Tip:** Set up GitHub notifications for your pull request to stay informed about all comments and changes. Use the "Watch" button on your PR to receive email updates for every activity.

⚡ **Important: First-Time Publishing Tips**

**Before Submission:**
- **Test your build locally**: Run `curvenote build` to catch formatting issues before submission
- **Check all links**: Verify that all internal links and external references work correctly
- **Preview your article**: Use `curvenote start` to see exactly how your article will appear
- **Validate metadata**: Ensure all author ORCIDs, affiliations, and DOIs are correct

**During Review:**
- **Use GitHub's "Resolve" feature**: Mark comments as resolved when you've addressed them
- **Reference specific commits**: When responding to reviewers, mention which commit addresses their concern
- **Keep commits focused**: Make separate commits for different types of changes (formatting vs. content)
- **Test after each major change**: Rebuild and preview after significant revisions

**Common Pitfalls to Avoid:**
- **Don't force-push**: Use regular commits instead of rewriting history
- **Don't ignore automated checks**: Address all failed checks before requesting review
- **Don't submit incomplete work**: Ensure all sections, figures, and references are complete
- **Don't forget to update the abstract**: If you make significant changes, update your abstract accordingly

**Pro Tips:**
- **Use draft PRs**: Start with a draft pull request to get early feedback before formal submission
- **Set up branch protection**: Protect your main branch to prevent accidental merges
- **Create a checklist**: Use GitHub's task lists to track what needs to be done
- **Backup your work**: Keep a local copy of your article in case you need to revert changes
