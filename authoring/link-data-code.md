---
title: Link Data and Code
short_title: Link Data & Code
---

# Link Data and Code

## Quick Start
Connect your Curvenote articles to external datasets, code repositories, and computational resources for reproducible research

Curvenote provides multiple ways to link your content to external data sources, code repositories, and computational environments. This enables readers to access the underlying data, run your code, and reproduce your research findings.

## Before You Start

Make sure you have:
- A Curvenote project with content you want to link to data/code
- Access to external data sources or code repositories
- URLs or DOIs for the resources you want to link
- Understanding of your data's size and accessibility requirements

## 1. Link to External Datasets

Connect your articles to datasets stored in external repositories:

### Using DOIs for Datasets
For datasets with Digital Object Identifiers (DOIs):

**Example in your article:**

```markdown
## Data Availability

The dataset used in this analysis is available at:
[Dataset DOI: 10.5281/zenodo.1234567](https://doi.org/10.5281/zenodo.1234567)
```

**Code to access the data:**

```{code-cell} python
import pandas as pd

# Download dataset from DOI
data_url = "https://zenodo.org/record/1234567/files/dataset.csv"
data = pd.read_csv(data_url)
```

### Large-Scale Data Management
For datasets larger than 50GB, use dedicated repositories:

**Recommended repositories:**
- **Zenodo**: For datasets under 50GB with DOI support
- **Source Cooperative**: For open science projects
- **Field-specific repositories**: For specialized data types

**Configuration in `curvenote.yml`:**
```yaml
project:
  requirements:
    - environment.yml
  resources:
    - some_resource_file.csv
    - url: https://doi.org/123456.qwerty
      file: data/local_path_my_notebooks_expect.hd5
```

## 2. Link to Code Repositories

Connect your content to source code and computational notebooks:

### GitHub Integration
Link to GitHub repositories containing your code:

**Example in your article:**

```markdown
## Code Availability

The complete code for this analysis is available at:
[GitHub Repository](https://github.com/username/project-name)
```

**Code to set up the environment:**

```{code-cell} python
# Clone the repository
!git clone https://github.com/username/project-name.git
%cd project-name

# Install dependencies
!pip install -r requirements.txt
```

### Jupyter Notebook Integration
Link to specific notebooks or code cells:

**Example in your article:**

```markdown
## Analysis Code

The complete analysis is available in the Jupyter notebook:
[Analysis Notebook](https://github.com/username/project-name/blob/main/analysis.ipynb)
```

**Code to use the functions:**

```{code-cell} python
# Import functions from the repository
from analysis_functions import process_data, create_visualization

# Use the imported functions
results = process_data(dataset)
create_visualization(results)
```

## 3. Configure Computational Resources

Set up your project for reproducible computation:

### Environment Configuration
Define computational requirements in your project:

**Create `environment.yml`:**
```yaml
name: my-research
channels:
  - conda-forge
  - defaults
dependencies:
  - python=3.9
  - pandas
  - numpy
  - matplotlib
  - jupyter
  - pip
  - pip:
    - plotly
    - seaborn
```

**Reference in `curvenote.yml`:**
```yaml
project:
  requirements:
    - environment.yml
  computational:
    - binderhub: true
    - jupyter: true
```

### Data Resource Management
Configure data resources for automatic download:

```yaml
project:
  resources:
    # Local data files
    - data/experiment_results.csv
    - data/calibration_data.h5
    
    # External datasets with DOIs
    - url: https://doi.org/10.5281/zenodo.1234567
      file: data/external_dataset.csv
    
    # Large datasets
    - url: https://doi.org/123456.qwerty
      file: data/large_dataset.hd5
```

## 4. Create Interactive Data Links

Enable readers to interact with your data directly:

### Deep Dive Links
Create links that allow readers to explore data in detail:

**Example in your article:**

```markdown
## Data Exploration

Explore the dataset interactively:
[Interactive Data Explorer](https://your-site.curve.space/data-explorer)

## Key Findings

The analysis reveals significant patterns in the data:
- **Trend 1**: [View in Data Explorer](https://your-site.curve.space/data-explorer#trend1)
- **Trend 2**: [View in Data Explorer](https://your-site.curve.space/data-explorer#trend2)
```

### Launch Jupyter Integration
Enable readers to run your code:

**Example in your article:**

```markdown
## Reproduce This Analysis

Click the "Launch Jupyter" button above to run this analysis interactively.
```

**Code for data processing:**

```{code-cell} python
# This code will run in the Jupyter environment
import pandas as pd
import numpy as np

# Load the dataset
data = pd.read_csv('data/experiment_results.csv')

# Process the data
processed_data = data.groupby('condition').mean()
processed_data
```

## 5. Manage Large Datasets

Handle datasets that are too large for direct inclusion:

### Pre-fetching Large Data
Configure automatic data download during build:

```yaml
project:
  resources:
    # Large dataset will be downloaded during build
    - url: https://doi.org/123456.qwerty
      file: data/large_dataset.hd5
      pre_fetch: true
```

### Data Repository Integration
Link to external data repositories:

**Example in your article:**

```markdown
## Large Dataset Access

The full dataset (2.3TB) is available from:
[Data Repository](https://repository.example.com/dataset)
```

**Code to access sample data:**

```{code-cell} python
# Load sample data
sample_data = pd.read_csv('data/sample_dataset.csv')
sample_data.head()
```

## Next Steps

- [Add Interactive Figures →](./interactive-figures.md)
- [Organize Your Content →](./organize-content.md)
- [Create Computational Articles →](../computational-articles.md)

---

💡 **Tip:** Always provide both a DOI and a direct download link for your datasets to ensure long-term accessibility and immediate access.

⚡ **Important: Data and Code Best Practices**

- **Use DOIs**: Always obtain DOIs for datasets to ensure long-term accessibility
- **Version control**: Keep your code in version-controlled repositories
- **Documentation**: Provide clear instructions for reproducing your analysis
- **Data size**: Use external repositories for datasets larger than 50GB
- **Licensing**: Ensure your data and code have appropriate licenses for reuse
