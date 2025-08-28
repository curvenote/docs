---
title: Embed Notebooks in Computational Content
short_title: Embed Notebooks
---

# Embed Notebooks in Computational Content

## Overview
Integrate Jupyter notebooks into your Curvenote articles and reports to create rich, interactive computational content

Embedding notebooks allows you to combine narrative text with executable code, interactive visualizations, and computational outputs. Curvenote provides seamless integration between Jupyter notebooks and articles, enabling you to create computational articles and reports that maintain the full power of Jupyter while providing a structured, publication-ready format.

## Before You Start

Make sure you have:
- A Curvenote project with computational content
- Jupyter notebooks (`.ipynb` files) ready to embed
- Understanding of notebook cell types and structure
- Access to the Curvenote editor interface
- Knowledge of MyST Markdown syntax

## 1. Understand Notebook Integration

Learn how notebooks work with Curvenote:

### Notebook Cell Types
Curvenote recognizes three types of Jupyter notebook cells:

**Code Cells**: 
- Contain executable code (Python, R, Julia, etc.)
- Can only be edited and run in Jupyter
- Display as read-only in Curvenote articles
- Produce output cells when executed

**Output Cells**:
- Contain results from code execution
- Can include text, images, tables, or interactive plots
- Automatically linked to their code cells
- Can be imported as figures in articles

**Markdown Cells**:
- Contain rich text and documentation
- Can be edited in both Jupyter and Curvenote
- Support MyST Markdown syntax
- Integrate seamlessly with article content

### Integration Workflow
```mermaid
graph LR
    A[Jupyter Notebook] --> B[Upload to Curvenote]
    B --> C[Edit in Curvenote]
    C --> D[Import Cells to Articles]
    D --> E[Publish Computational Content]
```

## 2. Upload and Link Notebooks

Add your Jupyter notebooks to Curvenote:

### Upload Pre-Executed Notebooks
```{important}
Always upload pre-executed notebooks to Curvenote so that outputs are visible and available for use.
```

**Step 1: Prepare Your Notebook**
1. **Execute all cells** in Jupyter Lab or Jupyter Notebook
2. **Save the notebook** with outputs included
3. **Verify all outputs** are displayed correctly

**Step 2: Upload to Curvenote**
1. **Navigate to your project** in Curvenote
2. **Click the Upload icon** (☁️⬆️) in the project panel
3. **Drag and drop** your `.ipynb` file or click to browse
4. **Click "DONE"** to complete the upload

```{figure} images/m59m7JQmWVyPjlASj9v3-UGpUYCC2QlQIhNSTYmEh-v1.mp4
:name: upload-notebook
:align: center
:width: 100%
```

### Link Local Notebooks
For notebooks you want to continue editing:

**Step 1: Link Existing Notebook**
1. **Copy the OXA link** from your Curvenote notebook
2. **Open your local Jupyter environment**
3. **Use the link** to establish the connection

**Step 2: Sync Changes**
```bash
# In your local Jupyter environment
# Make changes to your notebook
# Save the notebook
# Changes will sync to Curvenote
```

## 3. Import Notebook Cells

Bring notebook content into your articles:

### Import Output Cells as Figures
```{tip}
Output cells from notebooks can be imported as figures in your articles, maintaining their interactive properties.
```

**Step 1: Copy Cell Link**
1. **Open your notebook** in Curvenote
2. **Select the output cell** you want to import
3. **Click the ⋮ Options menu** in the upper right
4. **Select "Copy Link"**

**Step 2: Import into Article**
1. **Open your article** in Draft Mode
2. **Select the location** where you want the cell
3. **Paste the link** and press Enter
4. **The cell appears** as a block in your article

### Import Code Cells
```python
# Code cells can be imported for reference
# They will display as read-only code blocks
import pandas as pd
import matplotlib.pyplot as plt

# Your computational code here
data = pd.read_csv('experiment_data.csv')
plt.plot(data['x'], data['y'])
plt.show()
```

### Import Markdown Cells
```{myst}
# Markdown cells integrate seamlessly with articles
# They can be edited in both Jupyter and Curvenote

## Analysis Results

Our computational analysis revealed significant patterns in the data.
The results are shown in the interactive plot below.
```

## 4. Create Interactive Visualizations

Embed interactive plots and outputs:

### Supported Interactive Libraries
Curvenote supports interactive outputs from these libraries:

**Python Libraries**:
- **Plotly**: Interactive plots with zoom, pan, hover
- **Altair**: Declarative statistical visualizations
- **Bokeh**: Interactive web plots and dashboards
- **Matplotlib**: Static plots with publication quality
- **Seaborn**: Statistical data visualization
- **Pandas**: Interactive data tables

**R Libraries**:
- **Plotly**: Interactive R plots
- **ggplot2**: Static statistical plots
- **DT**: Interactive data tables
- **Leaflet**: Interactive maps

### Create Interactive Plots
```python
# Example: Create interactive Plotly plot
import plotly.express as px
import pandas as pd

# Load data
data = pd.read_csv('experiment_results.csv')

# Create interactive scatter plot
fig = px.scatter(data, x='x_value', y='y_value', 
                 color='category', size='magnitude',
                 hover_data=['condition', 'time'],
                 title='Interactive Experimental Results')

fig.show()
```

### Embed in Articles
```{myst}
## Results

Our analysis produced the following interactive visualization:

[Interactive plot will appear here when imported from notebook]

The plot shows significant differences between experimental conditions.
```

## 5. Structure Computational Articles

Organize your content effectively:

### Article Structure with Embedded Notebooks
```{myst}
# Computational Article Title

## Abstract

Brief summary of your computational research.

## Introduction

Background and research objectives.

## Methods

### Data Processing
[Import code cell showing data loading and preprocessing]

### Analysis Pipeline
[Import code cell showing analysis steps]

## Results

### Interactive Visualizations
[Import output cell with interactive plot]

### Statistical Analysis
[Import output cell with statistical results]

## Discussion

Interpretation of results and implications.

## Code Availability

The complete analysis is available in the embedded notebook.
```

### Mixed Content Approach
```{myst}
## Data Analysis

We analyzed the experimental dataset using Python's pandas library.

```{code-cell} python
# Import and process data
import pandas as pd
import numpy as np

data = pd.read_csv('experiment_data.csv')
print(f"Dataset shape: {data.shape}")
print(f"Columns: {list(data.columns)}")
```

The analysis revealed three key findings:

1. **Finding 1**: Description of the first result
2. **Finding 2**: Description of the second result  
3. **Finding 3**: Description of the third result

[Interactive visualization imported from notebook output cell]
```

## 6. Version Control and Collaboration

Manage notebook versions and collaborate effectively:

### Version Control
```{important}
Each notebook cell is versioned individually in Curvenote, allowing for precise tracking of changes.
```

**Cell Versioning**:
- **Individual cell versions**: Track changes to specific cells
- **Notebook versions**: Save complete notebook states
- **Cross-references**: Link to specific cell versions

**Version Management**:
1. **Save cell versions** as you develop
2. **Track changes** through version history
3. **Revert to previous versions** if needed
4. **Compare versions** to see differences

### Collaboration Features
```{myst}
## Collaborative Workflow

1. **Share notebooks** with collaborators
2. **Edit markdown cells** in Curvenote
3. **Edit code cells** in Jupyter
4. **Sync changes** automatically
5. **Review and approve** versions
```

## 7. Configure Computational Environment

Set up your project for notebook integration:

### Project Configuration
```yaml
# curvenote.yml
version: 1
project:
  title: "My Computational Article"
  description: "Research with embedded Jupyter notebooks"
  
  # Enable Jupyter features
  jupyter: true
  
  # Export formats
  exports:
    - format: meca
    - format: pdf
    - format: typst
  
  # Dependencies
  requirements:
    - requirements.txt
    - environment.yml
  
  # Resources
  resources:
    - notebooks/*.ipynb
    - data/processed/*
    - src/**/*
  
  # Computational settings
  computational:
    binderhub: true
    jupyter: true
```

### Environment Dependencies
```txt
# requirements.txt
pandas>=1.5.0
numpy>=1.21.0
matplotlib>=3.5.0
seaborn>=0.11.0
plotly>=5.0.0
altair>=4.2.0
jupyterlab>=3.5.0
jupyterlab-myst>=0.2.0
```

## 8. Best Practices

Follow these guidelines for effective notebook embedding:

### Notebook Preparation
- **Execute all cells** before uploading
- **Clear outputs** if notebooks are large
- **Use descriptive cell names** for easy identification
- **Include comprehensive documentation** in markdown cells

### Content Organization
- **Structure notebooks logically** with clear sections
- **Separate concerns** between different notebooks
- **Use consistent naming conventions**
- **Include setup and installation instructions**

### Performance Optimization
- **Limit notebook size** for faster loading
- **Use efficient data structures** and algorithms
- **Cache expensive computations** when possible
- **Optimize interactive plots** for web display

### Collaboration Guidelines
- **Document your workflow** clearly
- **Use version control** for all changes
- **Communicate changes** to collaborators
- **Test notebooks** in different environments

### Publication Readiness
- **Ensure reproducibility** with proper dependencies
- **Include data sources** and citations
- **Provide clear instructions** for reproduction
- **Test the complete workflow** before publishing

## Next Steps

- [Learn about Computational Best Practices →](./best-practices.md)
- [Create Computational Articles →](../computational-articles.md)
- [Understand Live Compute →](../live-compute.md)
- [Explore Computational Tiers →](../computational-tiers.md)

---

💡 **Tip:** Start with simple notebook embedding and gradually add complexity. Always test your embedded notebooks in the final publication environment. Follow these notebook embedding best practices:

- **Pre-execute notebooks**: Always upload notebooks with outputs included
- **Version control**: Use Curvenote's versioning for tracking changes
- **Interactive content**: Leverage supported libraries for engaging visualizations
- **Performance**: Optimize notebooks for web display and loading
- **Collaboration**: Use shared workflows for team development
- **Reproducibility**: Ensure all dependencies and data sources are documented
