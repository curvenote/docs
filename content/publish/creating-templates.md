---
title: Creating Curvenote Templates
description: Guide for template creators, lab leads, and journal staff
tags: []
keywords: []
---

This guide is for template creators: lab leads standardizing their group's workflow, journal staff providing submission templates, or community members creating specialized templates for others to use.

## Who Should Create Templates?

Templates are valuable when you want to:
- **Standardize workflows** in a research lab or organization
- **Collect consistent metadata** from authors or contributors
- **Provide starting points** for specific types of content
- **Enforce community standards** for publications or documentation

Common template creators include:
- Research lab leads and PIs
- Journal editors and staff
- Course instructors
- Documentation maintainers
- Community organizers

## Overview of the Template System

A Curvenote template consists of:

1. **A GitHub repository** with your content structure and files
2. **A `curvenote.yml`** defining project configuration
3. **Optional `template.yml`** with customized initialization questions
4. **Documentation** explaining the template's purpose and use

When someone initializes from your template, they:
1. Clone your repository
2. Answer your customized questions (or defaults)
3. Get a configured project ready for their content

## Part 1: Setting Up Your Template Repository

### Repository Structure

A basic template repository might look like:

```
my-template/
├── curvenote.yml          # Project configuration (YAML)
├── template.yml           # Custom initialization questions (optional YAML)
├── README.md              # Template documentation (Markdown)
├── index.md               # Landing page
├── example-article.md     # Example content
├── references.bib         # Bibliography (optional)
└── images/                # Image assets
    └── logo.svg
```

### Essential Files

#### curvenote.yml

Your template must include a `curvenote.yml` file. This provides the default configuration:

```yaml
version: 1
project:
  title: Template Name
  description: Brief description of what this template is for
  keywords: []
  authors: []
  # Add any default settings your template needs
```

You can include more specific configuration based on your template's purpose. The person using your template will customize these values during initialization.

### Using Extends for Cleaner Configuration

The `extends` field in `curvenote.yml` allows you to separate standard organizational content from project-specific content. This is a core MyST feature that points to another YAML file to extend.

#### Why Use Extends?

When creating templates for a lab, journal, or organization, you often have:
- Standard information that stays the same (lab name, venue, affiliations)
- Common abbreviations and references
- Organization-specific settings

By moving these to a separate file, template users see a cleaner `curvenote.yml` with only the fields they need to customize.

#### Basic Structure

Create a base configuration file (e.g., `_curvenote-base.yml`):

```yaml
# _curvenote-base.yml
version: 1
project:
  venue: Rock Scientists Journal
  subject: Geology
  abbreviations:
    GSA: Geological Society of America
    IUGS: International Union of Geological Sciences
  affiliations:
    - id: lab
      institution: Smith Geophysics Research Lab
      department: Earth Sciences
      address: University of Example
```

Then reference it in your main `curvenote.yml`:

```yaml
# curvenote.yml
version: 1
extends: _curvenote-base.yml
project:
  title: My Research Project
  authors: []
  keywords: []
```

#### What to Put in the Base File

**Good candidates for the base file:**
- `venue` - Journal or conference name
- `subject` - Field of study
- `abbreviations` - Standard acronyms in your field
- `affiliations` - Lab or institutional information
- `github` - Organization GitHub URL
- `bibliography` - Standard reference files
- `numbering` - Consistent numbering schemes
- `options` - Template-specific settings

**Keep in the main file:**
- `title` - Project-specific
- `description` - Project-specific
- `authors` - Changes per project
- `keywords` - Project-specific
- Any fields users customize during `curvenote init`

#### Complete Example: Lab Template

For a research lab providing a standard template:

```yaml
# _lab-defaults.yml
version: 1
project:
  venue: Smith Lab Internal Reports
  subject: Seismology
  github: https://github.com/smith-lab
  bibliography:
    - references.bib
    - _lab-common-refs.bib
  abbreviations:
    PGA: Peak Ground Acceleration
    GMM: Ground Motion Model
    PSHA: Probabilistic Seismic Hazard Analysis
  affiliations:
    - id: smith-lab
      institution: Smith Geophysics Research Lab
      department: Earth Sciences
      address: State University, 123 Campus Drive
      url: https://smithlab.edu
  options:
    numbering:
      heading_1: true
      heading_2: true
```

```yaml
# curvenote.yml (what users see and edit)
version: 1
extends: _lab-defaults.yml
project:
  title: Summer 2024 Field Campaign Results
  description: Analysis of seismic data from Western Pacific
  authors:
    - name: Jane Researcher
      affiliation: smith-lab
      orcid: 0000-0002-1234-5678
  keywords:
    - earthquake monitoring
    - field study
```

#### Benefits for Template Users

When someone initializes from your template:
1. **Cleaner main file** - Only project-specific content is visible
2. **Less to edit** - Standard fields are already configured
3. **Consistency** - Everyone uses the same base settings
4. **Updates** - Fix the base file to update all projects
5. **Focus** - Users think about their content, not boilerplate

#### Including Base Files in Your Template

When creating your template repository:

```
my-lab-template/
├── _lab-defaults.yml      # Base configuration (extends from this)
├── _lab-common-refs.bib   # Shared references
├── curvenote.yml          # Main config (extends _lab-defaults.yml)
├── template.yml           # Custom questions
├── README.md              # Documentation
└── content/
    └── example.md
```

**Document it in your README:**
```markdown
## Template Structure

This template uses `extends` to keep your `curvenote.yml` clean:
- `_lab-defaults.yml` - Lab-standard settings (don't edit)
- `curvenote.yml` - Your project-specific settings (edit this)

The base file includes our standard abbreviations, lab affiliation, 
and citation style. You only need to focus on your project's title, 
authors, and keywords.
```

#### When Not to Use Extends

Skip `extends` if:
- You're creating a simple, standalone template
- There's no shared organizational content
- Users will fork/modify everything anyway
- The extra file adds more confusion than clarity

For most lab, journal, or organizational templates, however, `extends` significantly improves the user experience.

#### README.md

Your README should explain:
- What the template is for
- Who should use it
- What custom questions it asks
- Any special configuration or requirements
- How to get started

Example:
```markdown
# Rock Scientists Submission Template

This template provides a standardized starting point for submitting 
articles to Rock Scientists, the premier journal for geological research.

## What's Included

- Pre-configured article structure
- Rock Scientists citation style
- Required metadata fields
- Example figures and tables

## Getting Started

```bash
curvenote init --github https://github.com/rock-scientists/submission-template
```

You'll be asked to provide:
- Article title and abstract
- Author information (ORCID recommended)
- Primary rock types studied
- Study site location
- Keywords


### Content Structure

Include example content that users can modify or replace:

- **Placeholder articles** showing structure and formatting
- **Example figures** with proper captions and references  
- **Sample bibliography** demonstrating citation style
- **Template sections** for common content types

Keep it minimal - users should be able to easily remove what they don't need.

## Part 2: Generating template.yml

Once you have a working Curvenote project, generate a `template.yml` (YAML configuration) file:

```bash
$ cd my-template
$ curvenote init --write-template

✓ Created template.yml at /path/to/my-template/template.yml

  Edit this file to customize initialization questions.
  Run cn init --github <url> to use it.
```

This creates a `template.yml` (YAML file) with default questions:

```yaml
# Curvenote Init Template Configuration
# This file customizes the questions asked during 'cn init'
#
# ... (helpful comments) ...

name: curvenote init
version: 1
questions:
  - id: title
    field: project.title
    enabled: true
    type: text
    message: "Project title:"
    placeholder: "e.g., My Research Project"
    hint: null
    default: null
    required: false

  - id: subtitle
    field: project.subtitle
    enabled: true
    type: text
    message: "Subtitle:"
    placeholder: "A concise, single line description"
    hint: "Keep it short - this appears as a tagline"
    default: null
    required: false

  - id: description
    field: project.description
    enabled: true
    type: text
    message: "Description:"
    placeholder: "A longer description suitable for social media and listings"
    hint: "Used for social media and article listings"
    default: null
    required: false

  - id: authors
    field: project.authors
    enabled: true
    type: people
    message: "Add author(s):"
    placeholder: "ORCID, GitHub username, or comma-separated list"
    hint: "You can add multiple authors separated by commas"
    default: null
    required: false

  - id: keywords
    field: project.keywords
    enabled: true
    type: list
    message: "Keywords:"
    placeholder: "e.g., science, research, data analysis"
    hint: "Help others discover your project"
    default: null
    required: false
```

## Part 3: Customizing template.yml

### Configuration Options

Each question can be customized with these properties:

#### enabled (boolean)
Set to `false` to skip a question:
```yaml
- id: subtitle
  enabled: false  # Won't be asked
```

#### message (string)
The prompt shown to users:
```yaml
message: "What is your article title?"
```

Make it clear and specific to your community's needs.

#### placeholder (string)
Example text shown in gray:
```yaml
placeholder: "e.g., Seismic Analysis of Pacific Subduction Zones"
```

Provide realistic examples relevant to your domain.

#### hint (string)
Additional context shown before the question:
```yaml
hint: "The title should clearly describe your study area and methods"
```

Use hints to explain requirements or provide guidance.

#### default (string)
Pre-filled value that users can accept or change:
```yaml
default: "Lab Group Name"
```

Useful for organization-specific fields.

#### required (boolean)
Make a question mandatory:
```yaml
required: true
```

Users must provide a value to continue.

#### field (string)
Where the answer is stored in `curvenote.yml`:
```yaml
field: project.title          # Standard field
field: project.journal_issue  # Custom field
```

### Question Types

#### Type: text

Single-line text input for titles, descriptions, etc.

```yaml
- id: study_location
  field: project.study_location
  enabled: true
  type: text
  message: "Primary study site:"
  placeholder: "e.g., Western Pacific, North Atlantic"
  hint: "Include geographic region or coordinates if applicable"
  required: false
```

**Use for:**
- Titles and subtitles
- Descriptions and abstracts
- Single values (issue numbers, study sites, etc.)

#### Type: list

Comma-separated values for keywords, tags, etc.

```yaml
- id: rock_types
  field: project.rock_types
  enabled: true
  type: list
  message: "Primary rock types studied:"
  placeholder: "e.g., sedimentary, igneous, metamorphic"
  hint: "Separate multiple types with commas"
  required: false
```

**Use for:**
- Keywords and tags
- Multiple categories or classifications
- Lists of items

Users enter: `basalt, granite, gneiss`  
Stored as: `["basalt", "granite", "gneiss"]`

#### Type: people

Author, editor, or contributor information with automatic lookup.

```yaml
- id: authors
  field: project.authors
  enabled: true
  type: people
  message: "Add author(s):"
  placeholder: "ORCID, GitHub username, or comma-separated list"
  hint: "ORCID provides the most complete author information"
  required: true
```

**Use for:**
- Authors
- Editors (use `field: project.editors`)
- Contributors (use `field: project.contributors`)

**Lookup capabilities:**
- **ORCID**: Fetches name, email, affiliations, ORCID
- **GitHub**: Fetches name, email, GitHub URL, optional ORCID
- **Manual**: Prompts for name, email, affiliation

## Part 4: Community-Specific Examples

### Example 1: Rock Scientists Journal Template

A geoscience journal collecting specific metadata:

```yaml
name: curvenote init
version: 1
questions:
  - id: title
    field: project.title
    enabled: true
    type: text
    message: "Article title:"
    placeholder: "e.g., Mineral Composition Analysis of Oceanic Crust Samples"
    hint: "Use a descriptive title that clearly indicates your research focus"
    required: true

  - id: abstract
    field: project.description
    enabled: true
    type: text
    message: "Abstract:"
    placeholder: "A concise summary of your research and findings"
    hint: "Keep to 250 words or less. This will be used for article listings."
    required: true

  - id: authors
    field: project.authors
    enabled: true
    type: people
    message: "Author(s):"
    placeholder: "ORCID, GitHub username, or comma-separated list"
    hint: "Rock Scientists requires ORCID for all authors. Add authors in order of contribution."
    required: true

  - id: keywords
    field: project.keywords
    enabled: true
    type: list
    message: "Keywords:"
    placeholder: "e.g., geochemistry, petrology, mineralogy, tectonics"
    hint: "5-10 keywords for discoverability. Use terms from GSA Thesaurus when possible."
    required: true

  - id: funding
    field: project.funding
    enabled: true
    type: text
    message: "Primary funding source:"
    placeholder: "e.g., NSF Grant EAR-1234567"
    hint: "Include grant numbers if applicable"
    required: false

  # Omit subtitle as it's not used in Rock Scientists format
  # - id: subtitle
```

### Example 2: Research Lab Template

A lab group standardizing their workflow:

```yaml
name: curvenote init
version: 1
questions:
  - id: title
    field: project.title
    enabled: true
    type: text
    message: "Project title:"
    placeholder: "e.g., Summer 2024 Field Campaign Results"
    required: true


  - id: authors
    field: project.authors
    enabled: true
    type: people
    message: "Author(s):"
    placeholder: "ORCID, GitHub username, or comma-separated list"
    hint: "The primary invetigators who carried out this work."
    required: true

  - id: team_members
    field: project.contributors
    enabled: true
    type: people
    message: "Team members:"
    placeholder: "Comma-separated ORCIDs or GitHub usernames"
    hint: "Additional researchers who contributed to this project"
    required: false

  - id: funding_source
    field: project.funding
    enabled: true
    type: text
    message: "Funding source:"
    default: "NSF Grant EAR-9876543"
    required: false

  - id: keywords
    field: project.keywords
    enabled: true
    type: list
    message: "Research areas:"
    placeholder: "e.g., seismology, tectonics, geophysics"
    required: false

  # Disable description and subtitle by omission
  # - id: description
  # - id: subtitle
```

## Part 5: The Improve Workflow

The `--improve` flag is a key feature for template maintenance and metadata completion.

### How --improve Works

When someone runs `curvenote init --improve` on a project:

1. Curvenote loads the existing `curvenote.yml`
2. Checks for a `template.yml` (uses defaults if not found)
3. Re-asks enabled questions, showing current values
4. Users can keep, modify, or add values
5. Shows a summary of changes before saving

### Example: Completing Metadata After Writing

A typical workflow:

```bash
# User clones your template and starts writing
$ curvenote init --github https://github.com/rock-scientists/template
# ... answers basic questions ...
# ... focuses on writing the article ...

# Later, before submission, they complete metadata
$ curvenote init --improve

🔄 Improving existing project configuration...

Article title: Seismic Analysis of Western Pacific
» [Press Enter to keep, or type new value]

Abstract: Initial study of seismic patterns
» Comprehensive analysis of earthquake distribution in the Western Pacific 
  subduction zone using 15 years of seismological data

Author(s): Dr. Jane Smith
» Dr. Jane Smith, github:collaborator, 0000-0003-9999-8888

  Keeping: Dr. Jane Smith
  
  Fetching GitHub user collaborator...
  ✓ Found: John Collaborator
  
  Fetching ORCID 0000-0003-9999-8888...
  ✓ Found: Dr. Maria Garcia

Rock types studied: 
» basalt, oceanic crust, sedimentary deposits

Study location: Western Pacific
» Western Pacific Subduction Zone, 145°E, 20-35°N

Keywords: seismology, earthquakes
» seismology, earthquakes, subduction zones, tectonics, geohazards

📋 Summary of changes:
  • abstract: Extended with more detail
  • authors: Added John Collaborator, Dr. Maria Garcia
  • rock_types: Added new field with ["basalt", "oceanic crust", "sedimentary deposits"]
  • study_location: More specific coordinates
  • keywords: Added "subduction zones, tectonics, geohazards"

Save these changes to curvenote.yml? (Y/n) » y

✅ Project configuration updated successfully!
```

### When to Use --improve

**Encourage template users to run `--improve`:**
- After completing their initial writing
- Before submitting to a journal or repository
- When adding new collaborators
- To refine metadata for publication
- When updating an existing project

**As a template creator, you can:**
- Include it in your README as a recommended step
- Document it as part of your submission workflow
- Use it yourself to update template metadata

### Benefits of the Improve Workflow

1. **Write first, metadata later** - Don't interrupt creative flow
2. **Easy updates** - Add authors or refine information
3. **Guided completion** - Template questions ensure nothing is missed
4. **Safe changes** - Preview before saving
5. **Standardization** - Everyone follows the same metadata process

## Part 6: Adding Authors

The `--add-authors` command provides a quick way to add authors to existing projects.

### Basic Usage

```bash
# Interactive mode
$ curvenote init --add-authors

Add author(s): » 0000-0002-5555-6666

  Fetching ORCID 0000-0002-5555-6666...
  ✓ Found: Dr. Robert Chen
    Affiliation: Ocean Research Institute

Add another author? (y/n) » n

✅ Author added successfully!
```

### Adding Multiple Authors at Once

```bash
$ curvenote init --add-authors "0000-0002-1111-2222, github:jsmith, jane@uni.edu"

  Fetching ORCID 0000-0002-1111-2222...
  ✓ Found: Dr. Alice Johnson

  Fetching GitHub user jsmith...
  ✓ Found: John Smith

  Processing: jane@uni.edu
  Name: » Jane Doe
  Affiliation: » State University
  ORCID (optional): »

✅ 3 authors added successfully!
```

### When to Use --add-authors

- Quick author additions without re-answering all questions
- Adding collaborators mid-project
- Scripts or automation
- When you only need to update authors

For more comprehensive updates, use `--improve` instead.

## Part 7: Testing and Publishing Your Template

### Common Issues and Troubleshooting

**template.yml not being used:**
- Ensure the file is named exactly `template.yml`
- Check YAML syntax (use a YAML validator)
- Verify it's in the repository root

**Questions not appearing:**
- Check `enabled: true` for questions you want
- Verify proper indentation in YAML
- Make sure `name: "curvenote init"` is correct

**ORCID/GitHub lookup not working:**
- Users need internet connection for lookups
- Invalid ORCIDs/usernames fall back to manual entry
- This is expected behavior, not an error

**Custom fields not appearing:**
- Custom fields are added to `curvenote.yml`
- They won't appear in the Curvenote web interface
- They're preserved in the YAML file

### Publishing to GitHub

Once tested, publish your template:

```bash
# 1. Initialize git if not already done
$ git init
$ git add .
$ git commit -m "Initial template"

# 2. Create a GitHub repository
# (Use GitHub web interface or CLI)

# 3. Push your template
$ git remote add origin https://github.com/username/my-template.git
$ git push -u origin main
```

**Repository Settings:**
- Make it **public** for community templates
- Or **private** for organization-specific templates
- Add topics/tags for discoverability: `curvenote`, `template`, your domain
- Include a comprehensive README
