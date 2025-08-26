---
title: Export Your Scientific Paper to PDF and Typst
short_title: Export to PDF/Typst
description: Step-by-step tutorial for exporting your Curvenote scientific papers to professional PDF and Typst formats
---

# Export Your Scientific Paper to PDF and Typst

## Overview
Export your Curvenote scientific papers to professional PDF and Typst formats for submission to journals, preprint servers, or sharing with collaborators

This tutorial guides you through exporting your scientific papers from Curvenote to both PDF and Typst formats. Whether you're submitting to a journal, uploading to a preprint server, or sharing with colleagues, this tutorial covers the complete export workflow for both formats.

## Before You Start

Make sure you have:
- A completed scientific paper in Curvenote
- Your paper saved as a version (not in draft mode)
- Author information and affiliations ready
- Target journal or publication venue requirements
- Curvenote CLI installed (for advanced export options)

## 1. Choose Your Export Format

### PDF Export
**Best for**: Journal submissions, preprint servers, final publications, sharing with non-technical audiences

**Advantages**:
- Universal compatibility
- Fixed formatting
- Professional appearance
- Widely accepted by journals

### Typst Export
**Best for**: Modern publishing workflows, fast compilation, clean source files, version control

**Advantages**:
- Fast compilation
- Clean, readable source code
- Modern syntax
- Excellent for version control

## 2. Prepare Your Paper for Export

### Save Your Work
1. **Exit draft mode** - Click "STOP EDITING" in the article header
2. **Save your version** - Click "SAVE VERSION" to include all changes
3. **Verify content** - Check that all figures, citations, and formatting are correct
4. **Review metadata** - Ensure author information and affiliations are complete

```{important}
Only saved versions can be exported. Draft mode changes are not included unless you save a version.
```

### Check Your Content
- **Figures and images** are properly formatted and captioned
- **Citations and references** are complete and properly linked
- **Mathematical equations** render correctly
- **Tables and data** are properly formatted
- **Cross-references** work correctly

## 3. Export to PDF

### Web-Based Export (Recommended for most users)

#### Step 1: Access Export Options
1. **Navigate to your article** in Curvenote
2. **Click the download icon** (⬇) in the article header
3. **Select "Export As"** from the dropdown menu
4. **Choose "PDF" format** and click "Next"

#### Step 2: Select a Template
1. **Browse available templates** - View thumbnails of different layouts
2. **Preview templates** - Hover over thumbnails for expanded previews
3. **Consider your audience** - Select templates appropriate for your publication venue
4. **Click "Select"** on your chosen template

**Popular templates**:
- **Default**: Clean, professional layout
- **Nature**: Journal-specific formatting
- **Science**: Academic journal style
- **IEEE**: Technical conference format
- **ACM**: Computer science journal style

#### Step 3: Configure Template Options
1. **Fill in required fields**:
   - Author name and affiliation
   - Email address
   - Abstract (if using tagged blocks)
   - Acknowledgments (if applicable)

2. **Optional settings**:
   - Additional metadata
   - Custom formatting options
   - Special requirements

3. **Click "Next"** to proceed

#### Step 4: Export and Download
1. **Click "EXPORT"** to start the process
2. **Wait for processing** - The system generates your PDF
3. **Monitor progress** - You can exit the window during processing
4. **Download your PDF**:
   - From export popup: Click the cloud download icon (☁️⬇️)
   - From article header: Click download icon and select "Download PDF"

### CLI-Based Export (Advanced users)

#### Install Dependencies
```bash
# Install jtex for LaTeX/PDF export
pip install jtex

# Install LaTeX distribution (if not already installed)
# For Ubuntu/Debian
sudo apt-get install texlive-full

# For macOS
brew install --cask mactex

# For Windows
# Download and install MiKTeX from https://miktex.org/
```

#### Export Command
```bash
# Basic PDF export
curvenote export pdf

# Export with specific template
curvenote export pdf --template nature

# Export with custom output name
curvenote export pdf --output my_paper.pdf

# Export specific version
curvenote export pdf --version v1.2
```

#### Generated Files
```
my-curvenote-pdf/
├── _build/
│   ├── main.tex
│   ├── class_file.cls
│   ├── images/
│   └── other files...
├── main.pdf
└── main.log
```

## 4. Export to Typst

### CLI-Based Export (Typst requires CLI)

#### Install Typst Compiler
```bash
# Using Cargo (Rust package manager)
cargo install typst-cli

# For macOS (using Homebrew)
brew install typst

# For Windows (using Chocolatey)
choco install typst

# For Ubuntu/Debian
curl -L https://github.com/typst/typst/releases/latest/download/typst-x86_64-unknown-linux-gnu.tar.gz | tar xz
sudo mv typst /usr/local/bin/
```

#### Export Command
```bash
# Basic Typst export
curvenote export typst

# Export with specific template
curvenote export typst --template article

# Export with custom output name
curvenote export typst --output my_paper.typ

# Export specific version
curvenote export typst --version v1.2
```

#### Compile Typst to PDF
```bash
# Compile the exported Typst file
typst compile my_paper.typ

# Compile with specific output
typst compile my_paper.typ --output my_paper.pdf

# Watch for changes (development mode)
typst watch my_paper.typ
```

#### Generated Files
```
my-curvenote-typst/
├── main.typ
├── references.bib
├── figures/
└── main.pdf (after compilation)
```

## 5. Configure Export Settings

### Project Configuration
Create or update `curvenote.yml` in your project:

```yaml
project:
  title: "My Scientific Paper"
  description: "Research paper for journal submission"
  
  # PDF export settings
  export:
    pdf:
      template: nature
      bibliography: references.bib
      figures: true
      tables: true
      
    # Typst export settings
    typst:
      template: article
      bibliography: references.bib
      figures: true
      tables: true
      
  # Bibliography settings
  bibliography:
    - references.bib
```

### Template Customization
For advanced users, you can customize templates:

```yaml
project:
  export:
    pdf:
      template: custom-nature
      template-path: ./templates/
      
    typst:
      template: custom-article
      template-path: ./templates/
```

## 6. Handle Common Export Issues

### PDF Export Issues

#### Missing Dependencies
```bash
# Install required LaTeX packages
tlmgr install amsmath amssymb geometry hyperref natbib
tlmgr install graphics graphicx subcaption booktabs
```

#### Template Not Found
```bash
# List available templates
curvenote templates list

# Use default template
curvenote export pdf --template default
```

#### Bibliography Issues
```bash
# Ensure BibTeX file is in project
# Check bibliography path in curvenote.yml
# Verify citation keys match BibTeX entries
```

### Typst Export Issues

#### Compilation Errors
```bash
# Check Typst syntax
typst compile --diagnostic-format=human my_paper.typ

# Verify Typst installation
typst --version
```

#### Missing Fonts
```bash
# Install additional fonts
# Typst includes many fonts by default
# Check font availability in your system
```

#### Template Compatibility
```bash
# Use basic template for compatibility
curvenote export typst --template basic

# Check template requirements
# Some templates may require specific Typst versions
```

## 7. Best Practices

### Before Export
- **Review your content** thoroughly
- **Test with different templates** to find the best fit
- **Check journal requirements** for formatting
- **Verify all citations** are properly formatted
- **Ensure figures** are high quality and properly captioned

### During Export
- **Use appropriate templates** for your target venue
- **Fill in all required metadata** completely
- **Test export with sample content** first
- **Keep export logs** for troubleshooting

### After Export
- **Review the exported document** carefully
- **Check formatting** matches requirements
- **Verify all content** is included correctly
- **Test file compatibility** with target systems
- **Backup exported files** for future reference

### Format-Specific Tips

#### PDF Best Practices
- **Use vector graphics** for figures when possible
- **Embed fonts** if required by journal
- **Check page limits** and formatting requirements
- **Verify PDF/A compliance** if required

#### Typst Best Practices
- **Use Typst's modern syntax** for better maintainability
- **Leverage fast compilation** for iterative development
- **Keep source files** for version control
- **Use Typst's template system** for consistency

## 8. Submit to Journals and Preprint Servers

### Journal Submission
1. **Check journal requirements** for file format and template
2. **Export with appropriate template** (Nature, Science, etc.)
3. **Review formatting** against journal guidelines
4. **Submit PDF or source files** as required

### Preprint Servers
1. **Choose appropriate server** (arXiv, bioRxiv, etc.)
2. **Export to required format** (usually PDF)
3. **Check file size limits** and compression requirements
4. **Upload and verify** submission

### Collaboration Sharing
1. **Export to universal format** (PDF for most users)
2. **Include source files** (Typst) for collaborators who can edit
3. **Use version control** for tracking changes
4. **Share via appropriate channels** (email, cloud storage, etc.)

## Next Steps

- [Learn about Export Templates →](../Publish/export-template-options.md)
- [Understand Tagging Blocks →](../Publish/export-tagging-blocks.md)
- [Explore CLI Export Options →](../cli/export.md)
- [Review Publishing Workflow →](../publishing/editorial-process.md)

---

💡 **Tip:** Export a test version with your chosen template before finalizing your paper to ensure the formatting meets your requirements.

⚡ **Important: Export Best Practices**

- **Always save versions** before exporting
- **Test with sample content** first
- **Keep export logs** for troubleshooting
- **Verify formatting** against target requirements
- **Backup exported files** for future reference
