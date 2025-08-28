---
title: Computational Best Practices
short_title: Best Practices
---

# Computational Best Practices

## Overview
Follow best practices for creating reproducible, maintainable, and scalable computational research with Curvenote

Creating computational articles and reports requires careful attention to reproducibility, dependency management, and performance optimization. This guide provides comprehensive best practices for developing computational content that works reliably across different environments and scales effectively with your audience.

## Before You Start

Make sure you have:
- A Curvenote project with computational content
- Understanding of your target computational tier
- Access to version control (Git)
- Knowledge of your programming language ecosystem
- Clear documentation requirements

## 1. Environment Management

Set up reproducible computational environments:

### Use REES-Compatible Configuration Files
Create standard dependency management files that work with BinderHub:

**Python (`requirements.txt`):**
```txt
# Core scientific packages
pandas>=1.5.0
numpy>=1.21.0
matplotlib>=3.5.0
seaborn>=0.11.0

# Interactive visualization
plotly>=5.0.0
altair>=4.2.0

# Jupyter and MyST support
jupyterlab>=3.5.0
jupyterlab-myst>=0.2.0

# Specific versions for reproducibility
scikit-learn==1.2.0
scipy==1.9.0
```

**Conda (`environment.yml`):**
```yaml
name: my-research
channels:
  - conda-forge
  - defaults
dependencies:
  - python=3.9
  - pandas>=1.5.0
  - numpy>=1.21.0
  - matplotlib>=3.5.0
  - jupyterlab>=3.5.0
  - pip
  - pip:
    - plotly>=5.0.0
    - altair>=4.2.0
    - jupyterlab-myst>=0.2.0
```

**R (`install.R`):**
```r
# Install required R packages
install.packages(c(
  "tidyverse",
  "ggplot2",
  "dplyr",
  "knitr",
  "rmarkdown"
))

# Install from Bioconductor if needed
if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")
BiocManager::install(c("DESeq2", "edgeR"))
```

### System Dependencies
For packages requiring system libraries, use `apt.txt`:

```txt
# System packages for scientific computing
gcc
gfortran
libblas-dev
liblapack-dev
libhdf5-dev
libnetcdf-dev
```

## 2. Reproducibility Standards

Ensure your computational work can be reproduced by others:

### Set Random Seeds
```python
import numpy as np
import random
import os

# Set seeds for reproducibility
np.random.seed(42)
random.seed(42)

# For TensorFlow/PyTorch
import tensorflow as tf
tf.random.set_seed(42)

# For R
set.seed(42)
```

### Document Package Versions
```python
# Create a version tracking script
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

print("Package versions for reproducibility:")
print(f"pandas: {pd.__version__}")
print(f"numpy: {np.__version__}")
print(f"matplotlib: {plt.matplotlib.__version__}")
print(f"seaborn: {sns.__version__}")
```

### Version Control Best Practices
```bash
# Initialize git repository
git init

# Create .gitignore for computational projects
echo "*.ipynb_checkpoints/" >> .gitignore
echo "__pycache__/" >> .gitignore
echo "*.pyc" >> .gitignore
echo ".ipynb_checkpoints/" >> .gitignore
echo "data/raw/" >> .gitignore
echo "results/" >> .gitignore

# Commit environment files
git add requirements.txt environment.yml
git commit -m "Add reproducible environment configuration"
```

## 3. Data Management

Handle data efficiently and reproducibly:

### Data Organization
```
project/
├── data/
│   ├── raw/          # Original, unprocessed data
│   ├── processed/    # Cleaned and processed data
│   └── external/     # External datasets
├── notebooks/        # Jupyter notebooks
├── src/             # Source code
├── results/         # Output files
└── docs/            # Documentation
```

### Data Loading Functions
```python
def load_data_safely(filepath, **kwargs):
    """Load data with proper error handling and logging."""
    try:
        if filepath.endswith('.csv'):
            data = pd.read_csv(filepath, **kwargs)
        elif filepath.endswith('.h5'):
            data = pd.read_hdf(filepath, **kwargs)
        else:
            raise ValueError(f"Unsupported file format: {filepath}")
        
        print(f"Successfully loaded {len(data)} rows from {filepath}")
        return data
    except FileNotFoundError:
        print(f"Error: File {filepath} not found")
        return None
    except Exception as e:
        print(f"Error loading data: {e}")
        return None

# Use the function
data = load_data_safely('data/processed/experiment_results.csv')
```

### Large Data Handling
For datasets larger than 50GB:

```yaml
# In curvenote.yml
project:
  resources:
    # Use external repositories for large datasets
    - url: https://doi.org/10.5281/zenodo.1234567
      file: data/external/large_dataset.h5
    - url: https://doi.org/10.5281/zenodo.7654321
      file: data/external/another_dataset.csv
```

## 4. Performance Optimization

Optimize your computational content for different tiers:

### Memory Management
```python
# Use generators for large datasets
def process_large_file(filepath, chunk_size=10000):
    """Process large files in chunks to manage memory."""
    for chunk in pd.read_csv(filepath, chunksize=chunk_size):
        # Process each chunk
        processed_chunk = process_chunk(chunk)
        yield processed_chunk

# Use efficient data structures
import numpy as np

# Use appropriate dtypes
data = pd.read_csv('large_file.csv', dtype={
    'id': 'int32',
    'value': 'float32',
    'category': 'category'
})
```

### Caching Results
```python
import joblib
from functools import lru_cache

# Cache expensive computations
@lru_cache(maxsize=128)
def expensive_calculation(parameter):
    """Cache results of expensive calculations."""
    # Your expensive computation here
    return result

# Use joblib for larger objects
def train_model(data, parameters):
    """Train model with caching."""
    cache_file = f"model_cache_{hash(str(parameters))}.pkl"
    
    try:
        model = joblib.load(cache_file)
        print("Loaded model from cache")
    except FileNotFoundError:
        model = train_expensive_model(data, parameters)
        joblib.dump(model, cache_file)
        print("Trained and cached new model")
    
    return model
```

## 5. Interactive Content Design

Create engaging and efficient interactive visualizations:

### Choose Appropriate Libraries
```python
# For static, publication-quality plots
import matplotlib.pyplot as plt
import seaborn as sns

# For interactive web plots
import plotly.express as px
import plotly.graph_objects as go

# For declarative statistical plots
import altair as alt

# For complex dashboards
import dash
from dash import dcc, html
```

### Optimize Interactive Plots
```python
# Use efficient plotting for large datasets
def create_efficient_plot(data, max_points=10000):
    """Create efficient interactive plot for large datasets."""
    if len(data) > max_points:
        # Sample data for plotting
        plot_data = data.sample(n=max_points, random_state=42)
    else:
        plot_data = data
    
    fig = px.scatter(plot_data, x='x', y='y', 
                     hover_data=['category', 'value'],
                     title='Interactive Plot (sampled for performance)')
    
    return fig

# Use appropriate plot types
def choose_plot_type(data_size, data_type):
    """Choose appropriate plot type based on data characteristics."""
    if data_size > 10000:
        return 'histogram'  # Efficient for large datasets
    elif data_type == 'categorical':
        return 'bar'        # Good for categorical data
    else:
        return 'scatter'    # Default for small datasets
```

## 6. Error Handling and Validation

Implement robust error handling for computational content:

### Input Validation
```python
def validate_input_data(data, required_columns, data_types):
    """Validate input data before processing."""
    # Check required columns
    missing_columns = set(required_columns) - set(data.columns)
    if missing_columns:
        raise ValueError(f"Missing required columns: {missing_columns}")
    
    # Check data types
    for col, expected_type in data_types.items():
        if col in data.columns:
            actual_type = str(data[col].dtype)
            if expected_type not in actual_type:
                raise TypeError(f"Column {col} has type {actual_type}, expected {expected_type}")
    
    # Check for missing values
    missing_count = data[required_columns].isnull().sum()
    if missing_count.any():
        print(f"Warning: Missing values found: {missing_count[missing_count > 0]}")
    
    return True
```

### Graceful Degradation
```python
def create_visualization(data, interactive=True):
    """Create visualization with graceful degradation."""
    try:
        if interactive and len(data) < 5000:
            # Create interactive plot
            fig = px.scatter(data, x='x', y='y')
            return fig
        else:
            # Fall back to static plot
            fig, ax = plt.subplots()
            ax.scatter(data['x'], data['y'])
            return fig
    except Exception as e:
        # Fall back to basic plot
        print(f"Interactive plot failed: {e}")
        fig, ax = plt.subplots()
        ax.plot(data['x'], data['y'])
        return fig
```

## 7. Testing and Validation

Test your computational content thoroughly:

### Unit Testing
```python
import unittest
import pandas as pd
import numpy as np

class TestDataProcessing(unittest.TestCase):
    def setUp(self):
        """Set up test data."""
        self.test_data = pd.DataFrame({
            'x': [1, 2, 3, 4, 5],
            'y': [2, 4, 6, 8, 10]
        })
    
    def test_data_loading(self):
        """Test data loading function."""
        result = load_data_safely('test_data.csv')
        self.assertIsNotNone(result)
        self.assertEqual(len(result), 5)
    
    def test_calculation(self):
        """Test mathematical calculations."""
        result = expensive_calculation(42)
        self.assertIsNotNone(result)
        self.assertGreater(result, 0)

# Run tests
if __name__ == '__main__':
    unittest.main()
```

### Integration Testing
```bash
# Test your environment on mybinder.org
# 1. Push your code to a public GitHub repository
# 2. Visit https://mybinder.org
# 3. Enter your repository URL
# 4. Test that your notebooks run correctly

# Test MECA export locally
curvenote export meca
# Check the generated zip file contains all expected files
```

## 8. Documentation and Metadata

Provide comprehensive documentation for your computational work:

### Project Configuration
```yaml
# curvenote.yml
version: 1
project:
  title: "My Computational Research"
  description: "Reproducible analysis of experimental data"
  
  # Enable computation
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
    - apt.txt
  
  # Resources
  resources:
    - data/processed/*
    - models/*.pkl
    - src/**/*
  
  # Computational settings
  computational:
    binderhub: true
    jupyter: true
```

### README Documentation
```markdown
# Computational Research Project

## Overview
Brief description of the research and computational approach.

## Setup
1. Install dependencies: `pip install -r requirements.txt`
2. Download data: `python scripts/download_data.py`
3. Run analysis: `jupyter lab`

## Reproducing Results
1. Follow the notebooks in order: `01_data_preprocessing.ipynb`, `02_analysis.ipynb`
2. All random seeds are set for reproducibility
3. Results are saved in `results/` directory

## Data Sources
- Primary dataset: DOI 10.5281/zenodo.1234567
- External validation: DOI 10.5281/zenodo.7654321

## Computational Requirements
- Python 3.9+
- 8GB RAM recommended
- GPU optional (CUDA 11.0+)
```

## Next Steps

- [Learn about Computational Articles →](../computational-articles.md)
- [Understand Live Compute →](../live-compute.md)
- [Explore Computational Tiers →](../computational-tiers.md)
- [Link Data and Code →](../authoring/link-data-code.md)

---

💡 **Tip:** Start with a simple, reproducible environment and gradually add complexity as needed. Test your setup on mybinder.org before publishing. Follow these key principles:

- **Reproducibility first**: Always set random seeds and document package versions
- **Environment management**: Use REES-compatible configuration files
- **Performance optimization**: Choose appropriate computational tiers and optimize for your audience
- **Error handling**: Implement robust error handling and graceful degradation
- **Testing**: Test your environment thoroughly before publishing
- **Documentation**: Provide clear setup and reproduction instructions
