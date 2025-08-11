---
title: Large Scale Data
---

> **Note** This feature is currently a work in progress. Some functionality described here may not be fully available yet but is planned for future updates.

### Managing Large Scale Data in Curvenote

When working with large datasets in scientific publishing, it’s important to ensure that the data is accessible, reproducible, and properly referenced. For datasets that require a Digital Object Identifier (DOI), we recommend using a data repository that can issue a DOI for long-term storage and access.

For datasets **below 50GB**, platforms like **Zenodo** are suitable for hosting the data and issuing a DOI. However, when dealing with **larger datasets**, alternative repositories are needed, especially in specialized fields.

### Current Approach: Data Downloads in Notebooks

Currently, a basic approach to managing large datasets is to have the associated **Jupyter Notebooks** download the dataset on-demand when the article is run. This ensures that the data is always available but may result in a poor user experience, especially with very large datasets, as downloading during execution can cause delays or interruptions.

### Integrating Large Datasets

Curvenote will allow you to define large datasets directly in the **curvenote.yml** file. This will enable a more seamless experience for handling large-scale data by ensuring that the data is available **before the article is built or run**, removing the need for runtime downloads.

```yaml
project:
  ...
  requirements:
    - environment.yml
  resources:
    - some_resource_file.csv
    - url: https://doi.org/123456.qwerty
      file: data/local_path_my_notebooks_expect.hd5
```

In this configuration:

- You can specify the **DOI** for the dataset under `resources`.
- The dataset will be downloaded and stored in the expected local path (`data/local_path_my_notebooks_expect.hd5`) during the build or container setup process.
- When the article is built into a **MECA archive**, this step will be handled automatically, ensuring that the large dataset is available without the need for runtime downloads.

### Optimizing the Data Experience

By linking large datasets directly through the `curvenote.yml` file, the dataset is pre-fetched during the container’s build or run phase. This offers several benefits:

- **Faster Setup**: Readers won't have to wait for large datasets to download when they engage with the article's interactive elements.
- **Consistency**: The dataset is always available in the location expected by the notebook or analysis, ensuring reproducibility.
- **Better Resource Management**: This approach minimizes unnecessary data transfers and optimizes the use of computational resources.

As we continue to develop this feature, we are working toward fully integrating large-scale data management into the Curvenote workflow, allowing for smoother handling of complex datasets. By leveraging data repositories, DOIs, and seamless integration with computational notebooks, Curvenote will offer a more efficient and scalable solution for large data-driven scientific publications.
