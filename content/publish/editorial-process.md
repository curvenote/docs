---
title: Overview of Editorial Process
short_title: Overview
---

The editorial process we describe in this guide involves a single, centralized GitHub repository where all operations — submission, review, revision, and acceptance — are managed.
This approach leverages the collaborative aspects of GitHub for peer-review and can offer full transparency of the editorial decisions, and represents a relatively simple editorial workflow. Below is a general overview of the editorial process, which can be tailored to specific venues and editorial teams.

Submission
: Authors submit their papers by forking the repository, creating a new branch and adding their manuscript or {term}`compendium` into a folder (e.g. `papers`). They the author opens a pull request (PR) to merge their branch into the main branch of the repository. The PR serves as the primary hub for discussion and review of the paper.

Check and Preview
: Upon submission, automated {term}`checks` are run via a GitHub Action. These verify that the {term}`submission` meets basic requirements such as adherence to templates and inclusion of necessary scholarly metadata such as author names, affiliations, abstracts, and inclusion of DOIs in references. A {term}`preview` of the work is created and accessible through a GitHub comment.

Editorial Workflow
: An editor is generally assigned to the submission after initial checks. This editor is responsible for overseeing the review process. They assess the paper's scope and topic to ensure it fits the publication's criteria and, if so, moves it forward in the review process.

Reviewer Recruitment
: The assigned editor recruits reviewers who are experts in the subject matter of the paper. These reviewers are tasked with evaluating the submission's quality, novelty, and accuracy. These reviewers are `@tagged` in the GitHub pull request, which facilitates all notifications and communication between the authors and the reviewers.

Review Process
: Reviewers access the {term}`preview` of the {term}`submission` and provide their feedback directly on the pull request through GitHub comments. This feedback can include both general comments and specific, inline suggestions for changes. The review process is transparent, with discussions visible publicly, which encourages thorough and constructive critiques.

Author Revisions
: Based on the feedback from reviewers, the author may make revisions to the submission. This often involves updating the pull request with new commits that reflect the changes suggested by the reviewers. The process of review and revision can cycle multiple times depending on the paper's initial quality and the extent of required revisions.

Final Decision
: Once the reviewers and the assigned editor(s) are satisfied with the revisions, the editor makes a decision on the paper. If accepted, the final version of the paper is merged into the main branch. The PR's merge signifies formal acceptance of the paper.

Publication
: After acceptance, the {term}`submission` is accessible in Curvenote and can be assigned a DOI and including the new publication on the journal's website or announcing through other channels.

This workflow is inspired by the Journal of Open Source Software (JOSS) and SciPy Proceedings, and is designed foster a community-oriented approach where the _process_ is as open as the _content_.
