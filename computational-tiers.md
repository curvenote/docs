---
title: Computational Tiers
---

Curvenote provides a range of **compute services** to support the interactive and computational aspects of your articles. These services are delivered through a private {term}`BinderHub`, ensuring that all computational environments are isolated and securely managed. We also **store the images** used in these environments to ensure that they can be accessed quickly, minimizing the time it takes for readers to start interacting with your article's computational components.

Each **tier** is designed to scale according to your needs, allowing you to select the appropriate level of compute resources depending on the expected **traffic** and **complexity** of your article's interactive features.

It’s important to note that the **initial load** of an article does **not trigger compute resources** to be used. Compute is only engaged when a reader opts to interact with the figures or execute the computational steps independently, ensuring optimal use of resources.

### Compute Tier Descriptions

```{list-table} Curvenote offers three main computational tiers.
:header-rows: 1
:label: tab:computational-tiers

* - Name
  - Description
* - **Tier 1** \
    Shared compute
  - The entry-level compute service, private to Curvenote customers, is provided as part of our infrastructure for **lab groups** and small **independent journals/collections**. It includes access to **shared end-user servers**, which are ideal for lightweight interactive visualizations and smaller datasets.
* - **Tier 2** \
    Dedicated single instance
  - In this tier, we provide a **dedicated single-instance host** for a journal or project. This setup ensures improved **availability** of compute resources, allowing more consistent performance when readers request servers for interactive tasks. This service can be **scaled** based on the journal’s specific needs and traffic demands.
* - **Tier 3** \
    Dedicated cluster-based hub
  - For larger projects or journals that require substantial compute resources, we offer a **dedicated cluster-based hub**. This option provides enhanced **availability and reliability**, with more efficient use of compute resources as traffic or computational requirements increase. This is the most scalable option and becomes cost-effective at higher compute usage levels.
```

### Choosing the Right Tier

The tier you select should be based on the **scale** of your project and the **interaction complexity** within your articles. If your readers are primarily interacting with lightweight visualizations, the **shared compute** tier may be sufficient. For larger journals or projects that expect high levels of interaction and require more **consistent availability**, a **dedicated instance** or **cluster-based hub** will provide the necessary performance and reliability.

Where computation is required it is necessary to connect to a compute service to start a service for the reader, on demand. This scales based on **concurrent users**, which is defined as a user who is actively connected to our servers within the same 45 minute time period.

### Key Features Across All Tiers

- **Private BinderHub**: All compute services are managed through a secure, private BinderHub, ensuring that each journal or article’s resources are isolated and managed independently.
- **Stored Images for Speed**: We store computational images, ensuring **fast access** for readers when they begin interacting with articles.
- **Scale as Needed**: Each tier is scalable based on consultation, so you can tailor the compute environment to the specific needs of your project.

### When Compute Resources Are Triggered

It is important to note that Curvenote articles remain fully readable without being connected to a compute service, in some cases these can also include interactive graphs and data without the need for connected computation although this is content dependent. Compute resources are only engaged when a reader chooses to interact beyond the static content of an article. This may include:

- Exploring **interactive figures** and widgets.
- **Executing code** or rerunning analyses embedded in a Jupyter Notebook.
- Engaging with datasets or models in real-time.

This ensures that the resources are only used when needed, optimizing the use of compute power while maintaining an efficient, reader-friendly experience.

### Consultation and Setup

Setting up the right compute environment for your journal or project is done in **consultation** with Curvenote. Our team will help assess your expected traffic, computational needs, and any specific requirements your articles may have. This ensures that you receive the right tier and scaling options from the start, providing both reliability and cost-efficiency.

For more information or to get started with your compute tier, please [contact us](https://curvenote.com/demo).
