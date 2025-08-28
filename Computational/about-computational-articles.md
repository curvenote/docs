---
title: Computational Articles
short_title: Computational Articles
---

# Computational Articles

## Overview
Create publication-quality computational articles that combine interactive figures, executable code, and rich narrative content for reproducible scientific research

Computational articles represent the next generation of scientific publishing, where research papers include not just static figures and text, but interactive visualizations, executable code, and computational environments that readers can explore and reproduce. Curvenote provides the infrastructure to create these advanced publications that bridge the gap between traditional papers and computational notebooks.

## Before You Start

Make sure you have:
- A Curvenote project for your computational article
- Jupyter environment with required scientific libraries
- Research data and computational workflows ready
- Understanding of your target journal or publication venue
- Knowledge of reproducibility best practices
- Interactive visualization libraries installed (Plotly, Altair, Bokeh)

## 1. Understand Computational Article Types

Choose the right structure for your research:

### Computational Articles
**Structured around a core manuscript with attached supporting materials**

**Characteristics:**
- **Primary focus**: Strong narrative flow with integrated computational elements
- **Interactive figures**: In-context interactive visualizations that execute independently
- **Notebook integration**: Jupyter notebooks embedded within the main content
- **JupyterLab environment**: Readers can launch separate computational environment
- **Reusability**: Encourages further experimentation and code reuse

**Best for:**
- Research papers with computational components
- Articles requiring interactive data exploration
- Publications where reproducibility is crucial
- Papers with complex visualizations

**Example**: [pyUserCalc](https://agu.curve.space/articles/NN0002)

### Computational Reports & Tutorials
**Structured like a "book" with comprehensive computational documentation**

**Characteristics:**
- **Primary focus**: Comprehensive documentation and exploration
- **Notebook collection**: Multiple notebooks within broader narrative
- **JupyterLab integration**: Readers can launch computational instances
- **In-place execution**: Optional execution within the report
- **Educational emphasis**: Step-by-step computational workflows

**Best for:**
- Tutorial and educational content
- Comprehensive research reports
- Methodological papers
- Software documentation

**Example**: [Tilt-Corrected BF-STEM](https://www.elementalmicroscopy.com/articles/EM000002)

## 2. Plan Your Article Structure

Design your computational article for maximum impact:

### Core Manuscript Structure
```{myst}
# Your Computational Article Title

## Abstract

Brief summary including computational approach and key findings.

## Introduction

Background, research objectives, and computational methodology overview.

## Methods

### Computational Environment
Description of software, libraries, and computational setup.

### Data Processing
Step-by-step data preparation and preprocessing workflow.

### Analysis Pipeline
Detailed computational analysis methods and algorithms.

## Results

### Interactive Visualizations
Key findings presented through interactive figures.

### Statistical Analysis
Computational results with supporting evidence.

## Discussion

Interpretation of computational results and implications.

## Code Availability

Information about code repositories and computational environments.

## References

Academic citations and computational resource references.
```

### Supporting Materials Organization
```
your-article/
├── manuscript.md              # Main article content
├── notebooks/
│   ├── data_processing.ipynb  # Data preparation workflow
│   ├── analysis.ipynb         # Main analysis notebook
│   └── visualizations.ipynb   # Interactive figure generation
├── data/
│   ├── raw/                   # Original data files
│   └── processed/             # Cleaned and processed data
├── src/
│   ├── utils.py              # Utility functions
│   └── analysis.py           # Analysis functions
├── requirements.txt          # Python dependencies
├── environment.yml           # Conda environment
└── README.md                 # Project documentation
```

## 3. Set Up Your Computational Environment

Create a reproducible computational environment:

### Python Environment Setup
```yaml
# environment.yml
name: computational-article
channels:
  - conda-forge
  - defaults
dependencies:
  - python=3.9
  - pandas>=1.5.0
  - numpy>=1.21.0
  - matplotlib>=3.5.0
  - seaborn>=0.11.0
  - plotly>=5.0.0
  - altair>=4.2.0
  - jupyterlab>=3.5.0
  - scipy>=1.9.0
  - scikit-learn>=1.1.0
  - pip
  - pip:
    - jupyterlab-myst>=0.2.0
    - myst-nb>=0.17.0
```

### Requirements File
```txt
# requirements.txt
pandas>=1.5.0
numpy>=1.21.0
matplotlib>=3.5.0
seaborn>=0.11.0
plotly>=5.0.0
altair>=4.2.0
scipy>=1.9.0
scikit-learn>=1.1.0
jupyterlab>=3.5.0
jupyterlab-myst>=0.2.0
myst-nb>=0.17.0
```

### System Dependencies
```txt
# apt.txt (for BinderHub)
gcc
gfortran
libopenblas-dev
liblapack-dev
```

## 4. Create Interactive Visualizations

Develop engaging interactive figures for your research:

### Data Loading and Preparation
```python
import pandas as pd
import numpy as np
import plotly.express as px
import altair as alt

# Load research data
data = pd.read_csv('data/processed/research_data.csv')

# Data preprocessing
data['date'] = pd.to_datetime(data['date'])
data['category'] = data['category'].astype('category')

print(f"Dataset shape: {data.shape}")
print(f"Date range: {data['date'].min()} to {data['date'].max()}")
print(f"Categories: {data['category'].unique()}")
```

### Interactive Scatter Plot
```python
# Create interactive scatter plot
fig = px.scatter(data, 
                 x='x_variable', 
                 y='y_variable',
                 color='category',
                 size='magnitude',
                 hover_data=['date', 'condition', 'notes'],
                 title='Interactive Research Results')

fig.update_layout(
    xaxis_title="Independent Variable",
    yaxis_title="Dependent Variable",
    font=dict(size=12),
    hovermode='closest'
)

fig.show()
```

### Statistical Visualization
```python
import altair as alt

# Create statistical chart
chart = alt.Chart(data).mark_circle().encode(
    x='x_variable:Q',
    y='y_variable:Q',
    color='category:N',
    size='magnitude:Q',
    tooltip=['x_variable', 'y_variable', 'category', 'condition']
).interactive()

chart = chart.properties(
    title='Statistical Analysis Results',
    width=600,
    height=400
)

chart
```

### Time Series Analysis
```python
import plotly.graph_objects as go

# Create time series plot
fig = go.Figure()

for category in data['category'].unique():
    subset = data[data['category'] == category]
    fig.add_trace(go.Scatter(
        x=subset['date'],
        y=subset['value'],
        mode='lines+markers',
        name=category,
        hovertemplate='Date: %{x}<br>Value: %{y}<br>Category: ' + category
    ))

fig.update_layout(
    title='Time Series Analysis by Category',
    xaxis_title='Date',
    yaxis_title='Value',
    hovermode='x unified'
)

fig.show()
```

## 5. Integrate Notebooks with Articles

Seamlessly combine computational notebooks with narrative content:

### Import Notebook Cells
```{myst}
## Data Analysis

Our computational analysis began with data preprocessing:

[Import code cell showing data loading and cleaning]

The cleaned dataset contained {numref}`Table %s <tab:summary>` observations across multiple variables.
```

### Reference Interactive Outputs
```{myst}
## Results

The interactive visualization below shows the key findings:

[Import interactive plot from notebook]

As shown in the plot, there is a clear relationship between variables X and Y.
Readers can zoom, pan, and hover over data points to explore the results.
```

### Cross-Reference Computational Elements
```{myst}
## Methods

The computational workflow consisted of three main steps:

1. **Data Preprocessing**: See {numref}`Figure %s <fig:data_flow>` for the data processing pipeline
2. **Statistical Analysis**: The analysis code is available in the attached notebook
3. **Visualization**: Interactive figures were generated using Plotly and Altair

### Computational Environment

All analyses were performed using Python 3.9 with the following key libraries:
- pandas 1.5.0 for data manipulation
- numpy 1.21.0 for numerical computations
- plotly 5.0.0 for interactive visualizations
- scipy 1.9.0 for statistical analysis
```

## 6. Configure Computational Features

Set up Curvenote's computational capabilities:

### Curvenote Configuration
```yaml
# curvenote.yml
version: 1
project:
  title: "Your Computational Article"
  description: "Research with interactive figures and computational notebooks"

  # Enable computational features
  jupyter: true
  computational: true

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
    environment: environment.yml
```

### BinderHub Integration
```yaml
# .binder/environment.yml
name: computational-article
channels:
  - conda-forge
  - defaults
dependencies:
  - python=3.9
  - pandas>=1.5.0
  - numpy>=1.21.0
  - matplotlib>=3.5.0
  - plotly>=5.0.0
  - altair>=4.2.0
  - jupyterlab>=3.5.0
  - pip
  - pip:
    - jupyterlab-myst>=0.2.0
```

## 7. Ensure Reproducibility

Implement best practices for computational reproducibility:

### Version Control
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial computational article setup"

# Create .gitignore
echo "*.ipynb_checkpoints/" >> .gitignore
echo "__pycache__/" >> .gitignore
echo "*.pyc" >> .gitignore
echo "data/raw/" >> .gitignore
echo "results/" >> .gitignore
```

### Data Management
```python
# data_management.py
import os
import hashlib
import pandas as pd

def create_data_manifest(data_dir):
    """Create manifest of all data files with checksums."""
    manifest = {}
    
    for root, dirs, files in os.walk(data_dir):
        for file in files:
            if file.endswith(('.csv', '.json', '.parquet')):
                filepath = os.path.join(root, file)
                with open(filepath, 'rb') as f:
                    checksum = hashlib.md5(f.read()).hexdigest()
                
                manifest[filepath] = {
                    'size': os.path.getsize(filepath),
                    'checksum': checksum,
                    'modified': os.path.getmtime(filepath)
                }
    
    return manifest

# Create manifest
manifest = create_data_manifest('data/')
pd.DataFrame(manifest).T.to_csv('data_manifest.csv')
```

### Random Seed Management
```python
# reproducibility.py
import numpy as np
import random

def set_random_seeds(seed=42):
    """Set random seeds for reproducibility."""
    np.random.seed(seed)
    random.seed(seed)
    
    # For PyTorch (if used)
    try:
        import torch
        torch.manual_seed(seed)
        if torch.cuda.is_available():
            torch.cuda.manual_seed(seed)
    except ImportError:
        pass
    
    # For TensorFlow (if used)
    try:
        import tensorflow as tf
        tf.random.set_seed(seed)
    except ImportError:
        pass

# Use in your analysis
set_random_seeds(42)
```

## 8. Publish and Share

Prepare your computational article for publication:

### Pre-Publication Checklist
- [ ] All code cells execute without errors
- [ ] Interactive figures work correctly
- [ ] Computational environment is reproducible
- [ ] Data files are properly organized
- [ ] Dependencies are documented
- [ ] Random seeds are set for reproducibility
- [ ] Code is well-documented and commented
- [ ] README file explains how to reproduce results

### Export Options
```bash
# Export to various formats
curvenote export --format pdf
curvenote export --format typst
curvenote export --format meca

# Deploy to Curvenote site
curvenote deploy
```

### Share Computational Environment
```markdown
## Computational Environment

This article was created using the following computational environment:

- **Python**: 3.9.0
- **Key Libraries**: pandas 1.5.0, numpy 1.21.0, plotly 5.0.0
- **JupyterLab**: 3.5.0
- **Operating System**: Ubuntu 20.04

### Reproducing Results

1. Clone the repository: `git clone [repository-url]`
2. Install dependencies: `conda env create -f environment.yml`
3. Activate environment: `conda activate computational-article`
4. Launch JupyterLab: `jupyter lab`
5. Open and run notebooks in order

### Interactive Features

- **Launch JupyterLab**: Click the "Launch Jupyter" button to open a computational environment
- **Interactive Figures**: Hover, zoom, and pan on interactive visualizations
- **Code Execution**: Run code cells directly in the article
```

## Next Steps

- [Learn about Computational Best Practices →](./best-practices.md)
- [Create Interactive Figures →](./interactive-figures.md)
- [Embed Notebooks in Computational Content →](./embed-notebooks.md)
- [Understand Live Compute →](../live-compute.md)
- [Explore Computational Tiers →](../computational-tiers.md)

---

💡 **Tip:** Start with a clear narrative structure and gradually integrate computational elements. Always test your interactive features before publication. Follow these computational article best practices:

- **Reproducibility first**: Ensure all results can be reproduced by readers
- **Interactive engagement**: Use interactive figures to enhance understanding
- **Clear documentation**: Provide comprehensive setup and usage instructions
- **Performance optimization**: Optimize interactive elements for web display
- **Version control**: Use git to track changes and enable collaboration
- **Testing**: Verify all computational elements work across platforms
