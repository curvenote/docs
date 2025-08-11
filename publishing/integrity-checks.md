---
title: Integrity Checks
---

Curvenote offers a comprehensive set of **integrity checks** that ensure your documents meet a venue's quality standards before submission. These checks automate the process of verifying the structure, content, and metadata in your work, helping authors avoid common issues that could delay or prevent successful submission.

### Types of Integrity Checks

The integrity checks available in Curvenote cover a range of essential elements in your publication, including:

- **References**: Ensuring all citations and bibliographic references are properly formatted and linked.
- **Links**: Verifying that all external and internal links (e.g., cross-references) are functional and correctly formatted.
- **Author Identifiers**: Checking that all authors have valid identifiers such as **ORCID IDs**.
- **Funding Information**: Ensuring that funding sources and acknowledgments are included when required by the venue.
- **Metadata Completeness**: Checking for required metadata, such as keywords, publication types, and affiliations, to ensure that your submission meets the venue's specific requirements.
- **Plagiarism and Integrity Checks**: Optionally running content through **plagiarism checks** or other integrity validation services via third-party integrations.

These automated checks help streamline the submission process, minimize rejection risks, and ensure that the manuscript meets the venue's requirements before the formal submission.

### Check your Build

Before running the full suite of integrity checks, you should ensure that your project builds without any errors or warnings. This can be done by running the `curvenote start` command:

```bash
% curvenote start
```

Once this command is executed, you will receive a link to a web-based preview of your work. Additionally, the terminal will output any warnings or errors encountered during the build process.

```{figure} images/curvenote-start-warnings.png
:class: framed
:label: fig:curvenote-start-warnings
The result of running `curvenote start`, showing the link to the web-based preview of the work and various output logs, including warnings. Errors and warnings such as those shown for broken cross-references should be addressed before submission.
```

You should resolve any errors or warnings that appear in the terminal output before proceeding with your submission. Errors could include missing metadata, broken cross-references, or invalid links. Refer to the [Metadata](../publishing/metadata.md) page or the [MyST Markdown documentation](https://mystmd.org) for guidance on addressing these issues.

### Automated Checks for Venue Requirements

Each venue you submit to may have different requirements, such as specific metadata fields or formatting guidelines. Curvenote runs a set of **automated checks** to help you verify that your submission conforms to these standards before making the final submission. This ensures a smoother submission process and reduces the likelihood of rejection.

You can run the venue-specific checks at any time using the following command:

```bash
% curvenote check <venue>
```

For example, to check your submission against the requirements for SciPy, you would run:

```bash
% curvenote check scipy
```

The terminal will then display a report summarizing the checks performed and any issues detected. Required fields and checks will be flagged in **red**, while optional metadata checks will be flagged in **yellow**. Here’s an example output:

```{figure} images/curvenote-check-scipy.png
:class: framed
:label: fig:curvenote-check-scipy
The result of running `curvenote check <venue>` on a local folder containing a MyST project. The **Corresponding Author** check fails and red signifies that a _required_ check has failed, while **ORCID** and **CRediT Roles** check flag missing _optional_ metadata. The content of the manuscript also contains a DOI which has been validated.
```

In this example:

- The **Corresponding Author** check failed, meaning this required field must be addressed before submission.
- The **ORCID** and **CRediT Roles** checks flagged missing but **optional** metadata. Including this optional metadata could enhance your submission but is not strictly required.

### Structural Checks

In addition to metadata validation, Curvenote checks the structural elements of your manuscript to ensure completeness and consistency. This includes:

- **Section Headings**: Verifying that section headings follow the appropriate hierarchy and format.
- **Figures and Tables**: Ensuring that figures and tables are properly referenced, captioned, and formatted according to venue guidelines.
- **Citations and References**: Validating that all references are properly cited in the manuscript and appear in the bibliography.

These structural checks ensure that your submission is professionally formatted and free of common errors.

<!--
### Third-Party Integrity and Plagiarism Checks

In addition to Curvenote's built-in structural and metadata checks, some venues may require additional **integrity checks**, such as **plagiarism detection** or content validation against specific guidelines. Curvenote integrates with third-party services to provide these checks, ensuring that your content adheres to both ethical and professional standards.

For example:

- **Plagiarism Detection**: Verifies that your manuscript does not contain content from external sources without proper attribution. We use iThenticate for this service.
- **External Content Validation**: For images, we use proofig to check your images against external databases or standards to ensure consistency and accuracy.

These third-party checks can be enabled or disabled depending on the submission guidelines for the specific venue.
-->
