---
title: Write a Scientific Paper using Jupyter
short_title: Write using Jupyter
---

# Writing a Scientific Paper using Jupyter

## Quick Start
Create publication-quality scientific papers using Jupyter notebooks with Curvenote, combining code execution, interactive outputs, and rich documentation

Jupyter notebooks (`.ipynb` files) are perfect for scientific papers that include computational work, data analysis, or interactive visualizations. Curvenote provides first-class support for Jupyter notebooks, allowing you to create documents that combine executable code, interactive outputs, and publication-quality documentation seamlessly.

## Before You Start

Make sure you have:
- A Curvenote project to write your paper in
- Jupyter environment installed (JupyterLab or Jupyter Notebook)
- Python or other programming language set up
- Data files or computational resources ready
- Access to the Curvenote editor interface

## 1. Set Up Your Jupyter Environment

Install and configure Jupyter for scientific writing:

### Install Jupyter
```bash
# Install JupyterLab (recommended)
pip install jupyterlab

# Or install classic Jupyter Notebook
pip install notebook
```

### Start Jupyter
```bash
# Start JupyterLab
jupyter lab

# Or start classic Jupyter Notebook
jupyter notebook
```

### Install Scientific Libraries
```bash
# Common scientific Python packages
pip install pandas numpy matplotlib seaborn plotly altair
```

## 2. Structure Your Scientific Paper

Organize your notebook with clear sections using Markdown cells:

### Create Paper Sections
```{myst}
# Title of Your Scientific Paper

## Abstract

Brief summary of your research question, methods, and key findings.

## Introduction

Background information, research objectives, and significance of your work.

## Methods

Detailed description of your computational approach, data sources, and analysis methods.

## Results

Presentation of your findings with interactive visualizations and statistical analysis.

## Discussion

Interpretation of results, implications, and future research directions.

## References

Citations and bibliography using academic reference formats.
```

### Use Markdown for Narrative
```{myst}
## Data Analysis

We analyzed the experimental dataset using Python's pandas library. Previous work by @smith2023 showed similar patterns in the data.

The analysis revealed three key findings:

1. **Finding 1**: Description of the first significant result
2. **Finding 2**: Description of the second significant result  
3. **Finding 3**: Description of the third significant result

See {numref}`Figure %s <fig:results>` for a visualization of our results.
```

## 3. Write and Execute Code Cells

Add computational content to your scientific paper:

### Data Loading and Preprocessing
```{code-cell} python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load experimental data
data = pd.read_csv('experiment_data.csv')

# Basic data exploration
print(f"Dataset shape: {data.shape}")
print(f"Columns: {list(data.columns)}")
print("\nFirst few rows:")
print(data.head())
```

### Statistical Analysis
```{code-cell} python
# Perform statistical analysis
results = data.groupby('condition').agg({
    'value': ['mean', 'std', 'count', 'min', 'max']
}).round(3)

print("Statistical Summary by Condition:")
print(results)

# Calculate confidence intervals
from scipy import stats
confidence_intervals = data.groupby('condition')['value'].apply(
    lambda x: stats.t.interval(0.95, len(x)-1, loc=x.mean(), scale=stats.sem(x))
)
print(f"\n95% Confidence Intervals: {confidence_intervals}")
```

### Create Publication-Quality Plots
```{code-cell} python
# Set up publication-quality plotting
plt.style.use('seaborn-v0_8-whitegrid')
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))

# Plot 1: Box plot
sns.boxplot(data=data, x='condition', y='value', ax=ax1)
ax1.set_title('Distribution by Condition')
ax1.set_xlabel('Experimental Condition')
ax1.set_ylabel('Measured Value')

# Plot 2: Scatter plot
sns.scatterplot(data=data, x='time', y='value', hue='condition', ax=ax2)
ax2.set_title('Value Over Time')
ax2.set_xlabel('Time (minutes)')
ax2.set_ylabel('Measured Value')

plt.tight_layout()
plt.show()
```

## 4. Add Interactive Visualizations

Create engaging interactive plots that remain functional in Curvenote:

### Interactive Scatter Plots
```{code-cell} python
import plotly.express as px

# Create interactive scatter plot
fig = px.scatter(data, x='x_value', y='y_value', 
                 color='category', size='magnitude',
                 hover_data=['condition', 'time'],
                 title='Interactive Results Visualization')

fig.update_layout(
    xaxis_title="X Variable",
    yaxis_title="Y Variable",
    font=dict(size=12)
)

fig.show()
```

### Statistical Visualizations
```{code-cell} python
import altair as alt

# Create interactive Altair chart
chart = alt.Chart(data).mark_circle().encode(
    x='x_value:Q',
    y='y_value:Q',
    color='category:N',
    size='magnitude:Q',
    tooltip=['x_value', 'y_value', 'category', 'condition']
).interactive()

chart.properties(
    title='Interactive Statistical Visualization',
    width=600,
    height=400
)
```

### Time Series Analysis
```{code-cell} python
import plotly.graph_objects as go

# Create time series plot
fig = go.Figure()

for condition in data['condition'].unique():
    subset = data[data['condition'] == condition]
    fig.add_trace(go.Scatter(
        x=subset['time'],
        y=subset['value'],
        mode='lines+markers',
        name=condition,
        hovertemplate='Time: %{x}<br>Value: %{y}<br>Condition: ' + condition
    ))

fig.update_layout(
    title='Time Series Analysis by Condition',
    xaxis_title='Time',
    yaxis_title='Value',
    hovermode='x unified'
)

fig.show()
```

## 5. Add Citations and References

Include academic citations using MyST syntax:

### Literature Review Section
```{myst}
## Literature Review

Recent studies have shown significant progress in this field @jones2023; @brown2022. 
The work by @smith2023 provides a comprehensive framework for understanding these patterns.

Our approach builds upon the methodology described by @wilson2021, extending it to handle 
larger datasets and more complex experimental conditions.
```

### Create Bibliography
Add a bibliography section to your paper:

```{myst}
## References

```{bibliography}
:style: apa
```
```

### BibTeX File Example
Create a `references.bib` file:
```bibtex
@article{jones2023,
  title={Recent advances in computational methods for scientific analysis},
  author={Jones, A. and Wilson, B. and Davis, C.},
  journal={Nature},
  year={2023},
  volume={123},
  pages={456--789},
  doi={10.1038/nature12345}
}

@article{brown2022,
  title={Novel approaches to data analysis in experimental sciences},
  author={Brown, C. and Miller, D.},
  journal={Science},
  year={2022},
  volume={456},
  pages={123--456},
  doi={10.1126/science.abc1234}
}

@article{smith2023,
  title={A comprehensive framework for scientific computing},
  author={Smith, J. and Johnson, K.},
  journal={Computational Science},
  year={2023},
  volume={78},
  pages={234--567},
  doi={10.1016/j.compsci.2023.123456}
}
```

## 6. Cross-Reference Content

Link to figures, tables, and sections throughout your paper:

### Reference Figures and Tables
```{myst}
## Results

Our analysis produced several key visualizations. The main results are shown in {numref}`Figure %s <fig:main_results>`, 
and detailed statistics are presented in {numref}`Table %s <tbl:statistics>`.

## Discussion

As shown in {numref}`Figure %s <fig:main_results>`, the data reveals clear patterns that support our hypothesis.
The statistical analysis presented in {numref}`Table %s <tbl:statistics>` confirms the significance of these findings.
```

### Section References
```{myst}
## Methods

Our computational approach follows the methodology described in {numref}`Section %s <sec:data_preprocessing>`.

## Data Preprocessing
:label: sec:data_preprocessing

Detailed description of data preprocessing steps...
```

## 7. Ensure Reproducibility

Make your research reproducible with proper documentation:

### Set Random Seeds
```{code-cell} python
import numpy as np
import random

# Set seeds for reproducibility
np.random.seed(42)
random.seed(42)

print("Random seeds set for reproducible results")
```

### Document Dependencies
```{code-cell} python
# Document package versions for reproducibility
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import altair as alt

print("Package versions for reproducibility:")
print(f"pandas: {pd.__version__}")
print(f"numpy: {np.__version__}")
print(f"matplotlib: {plt.matplotlib.__version__}")
print(f"seaborn: {sns.__version__}")
print(f"plotly: {px.__version__}")
```

### Error Handling
```{code-cell} python
def load_data_safely(filepath):
    """Load data with proper error handling."""
    try:
        data = pd.read_csv(filepath)
        print(f"Successfully loaded {len(data)} rows from {filepath}")
        return data
    except FileNotFoundError:
        print(f"Error: File {filepath} not found")
        return None
    except Exception as e:
        print(f"Error loading data: {e}")
        return None

# Use the safe loading function
data = load_data_safely('experiment_data.csv')
```

## 8. Publish Your Jupyter Paper

Export and deploy your scientific paper:

### Export to Curvenote
```bash
# Initialize a Curvenote project
curvenote init my-scientific-paper

# Add your notebook
curvenote add paper.ipynb

# Build and preview
curvenote build
curvenote serve
```

### Configure Project Settings
Create `curvenote.yml`:
```yaml
project:
  title: "My Scientific Paper"
  description: "Computational analysis of experimental data"
  
  # Enable Jupyter features
  jupyter:
    execute: true
    interactive: true
    
  # Computational environment
  computational:
    binderhub: true
    jupyter: true
    
  # Bibliography
  bibliography:
    - references.bib
```

### Deploy Your Paper
```bash
# Deploy to curve.space
curvenote deploy

# Your paper will be available at:
# https://your-paper.curve.space
```

## Next Steps

- [Add Citations and References →](./citations.md)
- [Create Interactive Figures →](./figures-and-images.md)
- [Organize Your Content →](./organize-content.md)
- [Learn about Computational Articles →](../computational-articles.md)

---

💡 **Tip:** Start with a clear structure using Markdown cells, then add code cells for your analysis. Use interactive visualizations to engage readers and make your research more accessible.

⚡ **Important: Jupyter Best Practices**

- **Clear documentation**: Use Markdown cells to explain your methodology
- **Reproducible code**: Set random seeds and document dependencies
- **Interactive outputs**: Use libraries that remain interactive in Curvenote
- **Version control**: Save versions of your notebook as you develop
- **Collaboration**: Share your notebook with colleagues for review and feedback
