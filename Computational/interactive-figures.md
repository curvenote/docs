---
title: Create Interactive Figures
short_title: Interactive Figures
---

# Create Interactive Figures

## Overview
Create engaging, interactive visualizations that enhance your computational research and provide readers with dynamic exploration capabilities

Interactive figures transform static research visualizations into dynamic, explorable content that allows readers to zoom, pan, hover, and interact with your data. Curvenote supports a wide range of interactive plotting libraries, enabling you to create publication-quality interactive visualizations that work seamlessly in both Jupyter notebooks and published articles.

## Before You Start

Make sure you have:
- A Curvenote project with computational content
- Jupyter environment set up with interactive plotting libraries
- Data ready for visualization
- Understanding of your target audience and interaction needs
- Knowledge of supported plotting libraries

## 1. Choose Your Interactive Library

Select the right library for your visualization needs:

### Supported Python Libraries

**Plotly** - Most Popular Choice:
- **Best for**: Interactive web plots, dashboards, complex visualizations
- **Features**: Zoom, pan, hover, selection, animations
- **Use cases**: Scatter plots, line charts, 3D plots, heatmaps
- **Installation**: `pip install plotly`

**Altair** - Declarative Statistical Plots:
- **Best for**: Statistical visualizations, data exploration
- **Features**: Grammar of graphics, automatic interactivity
- **Use cases**: Scatter plots, bar charts, histograms, faceted plots
- **Installation**: `pip install altair vega_datasets`

**Bokeh** - Interactive Web Plots:
- **Best for**: Complex dashboards, real-time data
- **Features**: Custom interactions, streaming data, server integration
- **Use cases**: Time series, geographic plots, custom widgets
- **Installation**: `pip install bokeh`

**Matplotlib/Seaborn** - Static with Interactive Elements:
- **Best for**: Publication-quality static plots with basic interactivity
- **Features**: High-quality output, extensive customization
- **Use cases**: Scientific figures, statistical plots
- **Installation**: `pip install matplotlib seaborn`

### Supported R Libraries

**Plotly for R**:
- **Best for**: Interactive R plots
- **Features**: Same capabilities as Python Plotly
- **Installation**: `install.packages("plotly")`

**ggplot2 with plotly**:
- **Best for**: Grammar of graphics with interactivity
- **Features**: Convert ggplot2 to interactive plots
- **Installation**: `install.packages(c("ggplot2", "plotly"))`

**DT (DataTables)**:
- **Best for**: Interactive data tables
- **Features**: Sorting, filtering, pagination
- **Installation**: `install.packages("DT")`

## 2. Create Basic Interactive Plots

Start with fundamental interactive visualizations:

### Plotly Scatter Plot
```python
import plotly.express as px
import pandas as pd

# Load sample data
data = pd.read_csv('experiment_data.csv')

# Create interactive scatter plot
fig = px.scatter(data, 
                 x='x_value', 
                 y='y_value',
                 color='category',
                 size='magnitude',
                 hover_data=['condition', 'time'],
                 title='Interactive Scatter Plot')

# Customize layout
fig.update_layout(
    xaxis_title="X Variable",
    yaxis_title="Y Variable",
    font=dict(size=12),
    hovermode='closest'
)

fig.show()
```

### Altair Statistical Plot
```python
import altair as alt
import pandas as pd

# Create interactive Altair chart
chart = alt.Chart(data).mark_circle().encode(
    x='x_value:Q',
    y='y_value:Q',
    color='category:N',
    size='magnitude:Q',
    tooltip=['x_value', 'y_value', 'category', 'condition']
).interactive()

# Add title and properties
chart = chart.properties(
    title='Interactive Statistical Visualization',
    width=600,
    height=400
)

chart
```

### Bokeh Interactive Plot
```python
from bokeh.plotting import figure, show
from bokeh.io import output_notebook
import pandas as pd

# Enable notebook output
output_notebook()

# Create Bokeh figure
p = figure(title="Interactive Bokeh Plot", 
           x_axis_label='X Variable', 
           y_axis_label='Y Variable',
           tools="pan,box_zoom,wheel_zoom,reset,save")

# Add scatter plot
p.scatter(data['x_value'], data['y_value'], 
          size=8, alpha=0.6, color='blue')

show(p)
```

## 3. Advanced Interactive Features

Enhance your visualizations with advanced interactive capabilities:

### Multi-Panel Interactive Plots
```python
import plotly.graph_objects as go
from plotly.subplots import make_subplots

# Create subplots
fig = make_subplots(
    rows=2, cols=2,
    subplot_titles=('Scatter Plot', 'Line Plot', 'Histogram', 'Box Plot'),
    specs=[[{"secondary_y": False}, {"secondary_y": False}],
           [{"secondary_y": False}, {"secondary_y": False}]]
)

# Add scatter plot
fig.add_trace(
    go.Scatter(x=data['x_value'], y=data['y_value'], 
               mode='markers', name='Scatter'),
    row=1, col=1
)

# Add line plot
fig.add_trace(
    go.Scatter(x=data['time'], y=data['value'], 
               mode='lines', name='Time Series'),
    row=1, col=2
)

# Add histogram
fig.add_trace(
    go.Histogram(x=data['value'], name='Distribution'),
    row=2, col=1
)

# Add box plot
fig.add_trace(
    go.Box(y=data['value'], name='Box Plot'),
    row=2, col=2
)

fig.update_layout(height=800, title_text="Multi-Panel Interactive Plot")
fig.show()
```

### Interactive Time Series
```python
import plotly.graph_objects as go

# Create time series plot
fig = go.Figure()

# Add traces for different conditions
for condition in data['condition'].unique():
    subset = data[data['condition'] == condition]
    fig.add_trace(go.Scatter(
        x=subset['time'],
        y=subset['value'],
        mode='lines+markers',
        name=condition,
        hovertemplate='Time: %{x}<br>Value: %{y}<br>Condition: ' + condition
    ))

# Update layout
fig.update_layout(
    title='Interactive Time Series Analysis',
    xaxis_title='Time',
    yaxis_title='Value',
    hovermode='x unified',
    showlegend=True
)

fig.show()
```

### 3D Interactive Plots
```python
import plotly.graph_objects as go

# Create 3D scatter plot
fig = go.Figure(data=[go.Scatter3d(
    x=data['x_value'],
    y=data['y_value'],
    z=data['z_value'],
    mode='markers',
    marker=dict(
        size=8,
        color=data['category'],
        colorscale='Viridis',
        opacity=0.8
    ),
    text=data['condition'],
    hovertemplate='X: %{x}<br>Y: %{y}<br>Z: %{z}<br>Condition: %{text}'
)])

fig.update_layout(
    title='3D Interactive Scatter Plot',
    scene=dict(
        xaxis_title='X Variable',
        yaxis_title='Y Variable',
        zaxis_title='Z Variable'
    )
)

fig.show()
```

## 4. Customize Interactive Behavior

Tailor interactions to your specific needs:

### Custom Hover Information
```python
import plotly.express as px

# Create custom hover template
fig = px.scatter(data, x='x_value', y='y_value', color='category')

fig.update_traces(
    hovertemplate="<b>Point Details</b><br>" +
                  "X: %{x:.2f}<br>" +
                  "Y: %{y:.2f}<br>" +
                  "Category: %{marker.color}<br>" +
                  "<extra></extra>"
)

fig.show()
```

### Interactive Selection and Filtering
```python
import plotly.express as px
from plotly.subplots import make_subplots

# Create linked subplots
fig = make_subplots(rows=1, cols=2)

# Main scatter plot
fig.add_trace(
    go.Scatter(x=data['x_value'], y=data['y_value'], 
               mode='markers', name='Main Plot',
               selectedpoints=[],
               selected=dict(marker=dict(color='red')),
               unselected=dict(marker=dict(color='blue', opacity=0.3))),
    row=1, col=1
)

# Histogram of selected points
fig.add_trace(
    go.Histogram(x=data['x_value'], name='Distribution'),
    row=1, col=2
)

fig.update_layout(
    title='Interactive Selection Plot',
    dragmode='select'
)

fig.show()
```

### Animation and Transitions
```python
import plotly.express as px

# Create animated scatter plot
fig = px.scatter(data, x='x_value', y='y_value', 
                 color='category', animation_frame='time',
                 size='magnitude', hover_name='condition')

fig.update_layout(
    title='Animated Interactive Plot',
    updatemenus=[dict(
        type="buttons",
        showactive=False,
        buttons=[dict(label="Play",
                     method="animate",
                     args=[None, {"frame": {"duration": 500, "redraw": True},
                                  "fromcurrent": True}])]
    )]
)

fig.show()
```

## 5. Performance Optimization

Optimize your interactive plots for web display:

### Efficient Data Handling
```python
def create_efficient_plot(data, max_points=10000):
    """Create efficient interactive plot for large datasets."""
    
    # Sample data if too large
    if len(data) > max_points:
        plot_data = data.sample(n=max_points, random_state=42)
        title_suffix = f" (showing {max_points:,} of {len(data):,} points)"
    else:
        plot_data = data
        title_suffix = ""
    
    # Create plot
    fig = px.scatter(plot_data, x='x_value', y='y_value', 
                     color='category', size='magnitude',
                     title=f'Interactive Plot{title_suffix}')
    
    return fig

# Use the function
fig = create_efficient_plot(large_dataset, max_points=5000)
fig.show()
```

### Lazy Loading for Large Datasets
```python
import plotly.graph_objects as go

def create_lazy_loading_plot(data, chunk_size=1000):
    """Create plot with lazy loading for very large datasets."""
    
    # Create initial plot with first chunk
    initial_data = data.head(chunk_size)
    
    fig = go.Figure(data=go.Scatter(
        x=initial_data['x_value'],
        y=initial_data['y_value'],
        mode='markers',
        name='Data Points'
    ))
    
    # Add loading indicator
    fig.update_layout(
        title='Large Dataset Plot (Lazy Loading)',
        updatemenus=[{
            'buttons': [{
                'label': 'Load More Data',
                'method': 'restyle',
                'args': [{'x': [data['x_value'][:chunk_size*2]],
                          'y': [data['y_value'][:chunk_size*2]]}]
            }],
            'direction': 'down',
            'showactive': True,
        }]
    )
    
    return fig
```

## 6. Embed in Curvenote Articles

Integrate interactive figures into your computational content:

### Import from Jupyter Notebooks
```{myst}
## Results

Our analysis produced the following interactive visualization:

[Interactive plot imported from notebook output cell]

The plot shows significant differences between experimental conditions.
```

### Reference Interactive Figures
```{myst}
## Interactive Analysis

As shown in the interactive plot above, the data reveals clear patterns.
Readers can zoom, pan, and hover over data points to explore the results.

### Key Findings

1. **Pattern 1**: Description of the first pattern visible in the interactive plot
2. **Pattern 2**: Description of the second pattern visible in the interactive plot
3. **Pattern 3**: Description of the third pattern visible in the interactive plot
```

### Cross-Reference Interactive Content
```{myst}
## Discussion

The interactive visualization in {numref}`Figure %s <fig:interactive_results>` 
allows readers to explore the data in detail. Users can:

- **Zoom in** on specific regions of interest
- **Hover over points** to see detailed information
- **Filter by category** to focus on specific groups
- **Export the plot** for further analysis
```

## 7. Best Practices

Follow these guidelines for effective interactive figures:

### Design Principles
- **Purpose-driven**: Ensure interactivity adds value to understanding
- **Intuitive**: Make interactions obvious and discoverable
- **Performance**: Optimize for smooth interaction experience
- **Accessibility**: Provide alternative static versions when needed

### Technical Guidelines
- **Pre-execute notebooks**: Always include outputs when uploading
- **Test interactions**: Verify all interactive features work correctly
- **Optimize data size**: Use sampling or aggregation for large datasets
- **Provide context**: Include clear titles, labels, and descriptions

### Publication Considerations
- **Static fallbacks**: Ensure content is readable without interactivity
- **Cross-platform**: Test on different browsers and devices
- **Loading times**: Optimize for reasonable load times
- **Documentation**: Provide instructions for using interactive features

### Library-Specific Tips

**Plotly**:
- Use `fig.update_layout()` for consistent styling
- Leverage `fig.update_traces()` for bulk updates
- Consider using `fig.write_html()` for standalone files

**Altair**:
- Use the grammar of graphics for consistent plots
- Leverage automatic interactivity features
- Combine with `altair_saver` for static exports

**Bokeh**:
- Use `output_notebook()` for Jupyter integration
- Leverage custom callbacks for advanced interactions
- Consider Bokeh server for real-time updates

## 8. Troubleshooting

Handle common issues with interactive figures:

### Common Problems and Solutions

**Plot Not Displaying**:
```python
# Check if plotly is properly installed
import plotly
print(plotly.__version__)

# Ensure proper output mode
import plotly.io as pio
pio.renderers.default = "notebook"
```

**Performance Issues**:
```python
# Reduce data size for better performance
def optimize_for_web(data, max_points=5000):
    if len(data) > max_points:
        return data.sample(n=max_points, random_state=42)
    return data

# Use efficient data types
data = data.astype({
    'category': 'category',
    'value': 'float32'
})
```

**Interactive Features Not Working**:
```python
# Ensure proper hover configuration
fig.update_traces(
    hoverinfo='all',
    hovertemplate='<b>%{fullData.name}</b><br>' +
                  'X: %{x}<br>' +
                  'Y: %{y}<br>' +
                  '<extra></extra>'
)
```

## Next Steps

- [Learn about Computational Best Practices →](./best-practices.md)
- [Embed Notebooks in Computational Content →](./embed-notebooks.md)
- [Understand Live Compute →](../live-compute.md)
- [Explore Computational Tiers →](../computational-tiers.md)

---

💡 **Tip:** Start with simple interactive plots and gradually add complexity. Always test your interactive figures in the final publication environment. Follow these interactive figure best practices:

- **Purpose-driven design**: Ensure interactivity enhances understanding
- **Performance optimization**: Optimize for smooth user experience
- **Accessibility**: Provide alternatives for non-interactive environments
- **Testing**: Verify all interactive features work across platforms
- **Documentation**: Provide clear instructions for using interactive features
- **Fallbacks**: Ensure content is readable without interactivity
:::
