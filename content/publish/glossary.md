---
title: Curvenote Glossary
description: Product glossary for Curvenote and list of terms in the Curvenote ecosystem
---

## Curvenote Solution

There are multiple parts to a Curvenote Solution that allow for the authoring and publishing of content.

:::{glossary}
Curvenote Platform
: Curvenote's submission and hosting system, handles the {term}`venue` generation, site theming, permission management, {term}`collection` and {term}`submission` management, persistent storage, authorization, and serves content and sites through APIs. Any submission can go through {term}`Curvenote Checks`, can be given a DOI, and archived.

    :::{figure} ./images/infrastructure.mp4
    The Curvenote Platform dashboard to display various {term}`venue`s, and {term}`submission` management. This is showing content from the [2023 SciPy Proceedings](https://proceedings.scipy.org/) (CC-BY-3.0).
    :::

Curvenote Editor
: The online [Curvenote editor](https://curvenote.com) provides a WYSIWYG authoring experiences, with integrated references, real-time collaboration, version management, and commenting. A document can be exported to either a PDF, LaTeX or Word Document or published to a {term}`Curvenote Venue <Curvenote Venues>`. The editing experience works directly with Jupyter Notebooks, and can display {term}`Interactive Figures`.

    :::{figure} ./images/writing.mp4
    The Curvenote Editor is a WYSIWYG authoring experience showing content from "The Clp1 R140H mutation alters tRNA metabolism and mRNA 3′ processing in mouse models of pontocerebellar hypoplasia" [@doi:10.1073/pnas.2110730118, CC-BY-4.0].
    :::

Curvenote Venues
: Curvenote Venues are customized websites that can scale from a single paper, to a private lab-group website, to a research institute, to a full online library (multiple journals, micro-publications, protocols etc.). There are default themes for articles, books, conference-proceedings, lab-groups, private consortiums and journals.

    :::{figure} ./images/venues.mp4
    Various examples of content from the Curvenote ecosystem, including [AGU Showcase](https://agu.curve.space), [SciPy Proceedings](https://proceedings.scipy.org), [Applied Geophysics](https://appliedgeophysics.org), [Elemental Microscopy](https://elementalmicroscopy.com/), [Physiome](https://journal.physiomeproject.org/), [Agrogeo 2024, Conference Abstracts](https://agrogeo24.curve.space). All content shown is CC-BY-4.0.
    :::

Command Line Tools
: The Curvenote CLI allows you to interact with the {term}`Curvenote Platform`, submit, {term}`check a work <Curvenote Checks>`. The CLI has been open-sourced and upstreamed into the Jupyter Community (through {term}`MyST Markdown`) this includes all of Curvenote's templates for exporting to different journal formats or custom PDFs (~400 journals). In addition to building websites and PDFs, you can modify or check {term}`submission`s, publish or submit a new {term}`work` or website.

    :::{figure} ./images/cli-check.mp4
    The command line tools for Curvenote running {term}`Curvenote Checks` for DOIs and structural information and metadata.
    :::

:::

## Modules

:::{glossary}
Reading Experience
: We are building intuitive, reading experience that is designed around access to information where and when you need it: this includes citations, figures, equations, interactivity, and abbreviations. We are aiming for a delightful, web-first reading experience.

    :::{figure} ./images/reading.mp4
    Deep dive links in a research article, see [demo](https://agu.curve.space/articles/NN0001). (CC-BY-4.0)
    :::

Integrated Computation
: Live graphs can be embedded directly in your documentation or articles with computation backed by Jupyter or JupyterLite – running locally, on Binder, or directly in your browser.

    :::{figure} ./images/compute.mp4
    Interactive physics in an article using SimPEG, see [demo](https://simpeg.xyz/tle-finitevolume/). (CC-BY-SA-3.0)
    :::

Interactive Figures
: Curvenote enables the sharing and publication of interactive figures, such as Plotly, Altair, Bokeh and others that contain their data and provide interactivity. These figures may not require live computation (i.e. a Jupyter Server to be running). It is also possible to have interactive figures through {term}`Integrated Computation`, which requires a live Jupyter environment (see {term}`Launch Jupyter`).

    :::{figure} ./images/altair.mp4
    Interactive exploration of earthquake data in a paper by [Steve Purves](https://www.stevejpurves.com/la-palma-earthquakes/interactive-plots) (CC-BY-SA-4.0).
    :::

Launch Jupyter
: {term}`Interactive Figures` may require a computational server to be running, we use Jupyter to power computations.

    :::{figure} ./images/launch-jupyter.mp4
    Launching Jupyter from an interactive article for the _Notebooks Now!_ showcase, [see article](https://agu.curve.space/articles/NN0002) (CC-BY-NC-4.0, hosted by Curvenote).
    :::

Deep Dive Links
: Deep-dive links allow you to get information to your reader as fast as possible, and they can deep-dive all the way to computations, code and {term}`interactive figures`.

    :::{figure} ./images/links.mp4
    Deep dive links as shown in the [MyST Markdown documentation](https://mystmd.org) (CC-BY-4.0)
    :::

Curvenote Checks
: Curvenote provides checks for the structure of a document to ensure it meets automated quality controls for things like references, links, author identifiers (e.g. ORCID), or funding information. These checks can also include integrity or plagiarism checks or 3rd party integrations against the submitted content.

    :::{figure} ./images/checks-ui.mp4
    Administration of checks in the {term}`Curvenote Platform` dashboard.
    :::

:::

## Schema and Database Objects

:::{glossary}

Work
: A _"work"_ refers to the original content created and owned by an author, encompassing articles and {term}`notebook`s, or other scholarly outputs (i.e. the research {term}`compendium`). Works are owned by the author and can be submitted to multiple {term}`venue`s, allowing for broader dissemination and engagement within the academic or professional community.

Work Version
: A _"work version"_ is a specific instance of a {term}`work` that encapsulates changes or updates made by the author over time. Each version maintains a record of its evolution, reflecting revisions, additions, or corrections.

Submission Version
: A _"submission version"_ is a particular iteration of a {term}`work` that is submitted to a {term}`venue`. This version is tracked to document the progression and evaluation of the submission through the editorial and review processes at the venue.

Venue
: A _"venue"_ may refer to a journal, conference website, research group, blog or private site hosted on the Curvenote platform. A venue is organized into {term}`collections <collection>` which can take {term}`submissions <submission>`.

Submission Kind
: A {term}`venue` can accept submission _"kinds"_. For example, _Abstract_, _Research Article_, _Letter_, _Poster_ or conceivably anything automated {term}`checks` that are run on each submission kind.

Checks
: Checks are specific to the {term}`submission kind` and can include checks on structure, integrity, manuscript content, plagiarism, image-manipulation, etc.

Notebook
: A _"notebook"_ refers to an interactive document used for coding, data analysis, visualization, and narrative text. Commonly associated with {term}`Jupyter` Notebooks or Markdown notebooks, these documents combine executable code blocks with rich text elements, such as equations, images, and annotations, allowing for dynamic and interactive educational or research presentations.

Compendium
: A research _compendium_ is a set of articles, {term}`notebooks <notebook>`, associated data and computational environment that is organized and presented in a comprehensive and accessible manner.

Submission
: A _"submission"_ refers to the article or {term}`compendium` submitted to a {term}`venue` by an author or group of authors. Each submission is versioned to track changes and revisions over time. A submission can be submitted as a {term}`draft`.

Draft
: A _"draft"_ is a preliminary version of a {term}`submission` that can be uploaded to a {term}`venue` for testing purposes. Drafts allow authors to utilize the venue's build system to check their submissions, preview them on the venue's website, and, in the case of Computational Articles or Notebook-based Reports, ensure the computational environment configuration functions correctly on the venue's servers.
: Drafts are standalone and are not visible to the editorial team, are not formally received by the venue, and are automatically deleted after 30 days.

Collection
: A collection is a way to organize submissions in a {term}`venue` publications by year and that at least one currently open for submission.

Preview
: A _"preview"_ is displayable or viewable version of a {term}`submission` that is used primarily for peer review purposes. The preview can be public or private, depending on the editorial workflow, and allows reviewers and potentially other stakeholders to see how the submission will appear upon publication, facilitating a thorough evaluation of its content, formatting, and overall presentation. The preview helps to ensure that the submission meets the required standards and guidelines of the {term}`venue` before final approval and publication.

:::

## External Tools

:::{glossary}

Jupyter
: Jupyter is an open-source project that supports interactive data science and scientific computing across over 40 programming languages. Jupyter provides tools to create and share documents that contain live code, equations, visualizations, and narrative text. Uses for Jupyter include data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, and much more. Jupyter has evolved to include several components, such as Jupyter {term}`Notebook`s, {term}`JupyterHub`, and {term}`JupyterLab`.

Binder
: A free, public service for running reproducible interactive computing environments. Binder is a 100% open source infrastructure that is run by members of the Jupyter community. The underlying technology behind the Binder project is BinderHub.

BinderHub
: The underlying technology of https://mybinder.org, BinderHub is an open source tool that runs on Kubernetes and utilizes a JupyterHub in order to provide live, reproducible interactive computing environments that users host on GitHub.

Google Colab
: A Jupyter Notebook service from Google that provides access to free computing resources, including GPUs and TPUs.

JupyterLab
: JupyterLab is a web-based interactive development environment for Jupyter notebooks, code, and data. It serves as the next-generation graphical user interface for Project Jupyter, offering all the familiar building blocks of the classic Jupyter Notebook (like notebooks, terminals, text editors, file browsers, rich outputs, etc.) in a flexible and powerful user interface. JupyterLab enables users to work with documents and activities such as Jupyter notebooks, text editors, terminals, and custom components in a more integrated and modular fashion, thereby providing a more comprehensive and integrated development environment for scientific computing and data science workflows.

JupyterHub
: A core open source tool from the Jupyter community, JupyterHub allows you to deploy an application that provides remote data science environments to multiple users. It can be deployed in the cloud, or on your own hardware.

MyST Markdown
: MyST Markdown (<https://mystmd.org>) is an ecosystem of open-source, community-driven tools designed to revolutionize scientific communication. The authoring framework supports blogs, online books, scientific papers, reports and journals articles.
: The initial version of `mystmd` was release by Curvenote as the Curvenote {term}`Command Line Tools` under the MIT license, and later transferred to the ExecutableBooks team who run MyST Markdown.

MECA
: Manuscript Exchange Common Approach NISO standard. https://www.niso.org/standards-committees/meca Paired with {term}`JATS`, Curvenote uses {term}`MECA` to package archived, reproducible bundles for all computational articles.

JATS
: Defines a set of XML elements and attributes for tagging journal articles and describes three article models. https://jats.nlm.nih.gov/

:::

## Technologies

:::{glossary}

CDN
: Content delivery network is a network of servers or resources linked together with the aim of providing uniform replicated access to content as quickly and cost effectively as possible.

Serverless Edge Network
: Edge serverless is an evolution of cloud serverless where computing resources that deliver serverless functions are geographically closer to the end user.

Shared Tenancy
: A deployment or architecture where multiple customers (tenants) share the same application and infrastructure resources. Each tenant's data and configurations are logically separated but physically reside on the same servers. This model is often used to maximize resource utilization and reduce costs while ensuring data isolation and security between tenants.

Single Tenancy
: A deployment or architecture where each customer (tenant) has their own dedicated instance of the application and underlying infrastructure. This setup ensures that no two tenants share any resources, such as databases or servers. Single tenancy offers enhanced security, greater control over the environment, and customization options, but typically comes at a higher cost due to the dedicated resources required for each tenant.

Google Cloud
: A suite of cloud computing services offered by Google that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube. Google Cloud provides a range of services including computing, data storage, data analytics, and machine learning.

Firebase
: A well established platform developed by Google for creating web applications. Firebase's primary functionality revolves around its real-time database and backend services, which includes real time client APIs, NoSQL databases and authentication (SSO) providers.

PostgreSQL
: An open-source, advanced object-relational database management system (DBMS) known for its stability, robustness, and performance with features that support both SQL (relational) and JSON (non-relational) querying. PostgreSQL is widely used by developers for a variety of applications, particularly in scenarios requiring complex queries, extensive data integrity, and compatibility with standards.

Vercel
: A cloud platform for static sites and Serverless Functions that provides developers with a collaborative and optimized deployment system. Vercel is designed to integrate with databases and modern web development frameworks, and excels at providing robust, fast, global access to web applications and content via it's {term}`Serverless Edge Network` technology.

Supabase
: An open-source alternative to {term}`Firebase`, Supabase provides developers with a suite of tools to quickly build and scale modern web applications. It offers features similar to Firebase but with a backend that leverages {term}`PostgreSQL`, allowing for powerful relational database management and real-time capabilities.

Headless CMS
: A Headless CMS (Content Management System) is a back-end-only content management system that separates the content repository ("body") from the presentation layer ("head"). It provides content via an API for display on different platforms or devices.
:::
