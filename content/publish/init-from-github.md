---
title: Using GitHub Templates
description: Initialize Curvenote projects from GitHub templates for standardized workflows
tags: []
keywords: []
---

GitHub templates provide a standardized starting point for your Curvenote projects. Whether you're joining a research lab, submitting to a journal, or following your team's workflow, templates help ensure consistency and save time on initial setup.

## What are Curvenote Templates?

Curvenote templates are GitHub repositories that contain:
- Pre-configured `curvenote.yml` project settings
- Standard content structure and files
- Optional `template.yml` for customized initialization questions
- Documentation and examples specific to the template's purpose

Templates are ideal for:
- **Research labs** standardizing their publication workflow
- **Journals** providing submission templates to authors
- **Courses** distributing consistent assignment structures
- **Teams** sharing documentation standards

## Quick Start

Initialize a project from a GitHub template:

```bash
curvenote init --github https://github.com/username/template-repo
```

The command will:
1. Clone the repository to your local machine
2. Guide you through customization questions
3. Set up your project configuration
4. Optionally start a local server

## The Initialization Experience

When you initialize from a GitHub template, Curvenote walks you through several steps:

### Step 1: Repository Cloning

```bash
$ curvenote init --github https://github.com/rock-scientists/article-template

🔗 Initializing from GitHub template...

📥 Cloning repository to article-template...
✓ Repository cloned successfully
📄 Found curvenote.yml
📖 Loading project configuration...
✓ Project configuration loaded: Rock Scientists Article Template
```

### Step 2: Template Questions

If the template includes a `template.yml` (YAML) file, you'll be asked customized questions. Otherwise, you'll see default questions:

```bash
📋 Customizing your project...

Project title: [e.g., My Research Project]
» Seismic Analysis of the Western Pacific

Subtitle: [e.g., A concise description]
» Understanding earthquake patterns in subduction zones

Description: [e.g., A longer description for social media]
» This study analyzes seismic data from the Western Pacific subduction zone 
  to identify patterns in earthquake distribution and magnitude.
```

### Step 3: Author Information with Lookup

The author question supports multiple input methods:

```bash
Add author(s): [ORCID, GitHub username, or comma-separated list]
» 0000-0002-1234-5678

  Fetching ORCID 0000-0002-1234-5678...
  ✓ Found: Dr. Jane Smith
    Email: jane.smith@university.edu
    Affiliation: University of Geoscience

Add another author? (y/n) » y

Add author(s): [ORCID, GitHub username, or comma-separated list]
» github:jdoe

  Fetching GitHub user jdoe...
  ✓ Found: John Doe
    Email: john.doe@institution.org
    GitHub: https://github.com/jdoe

Add another author? (y/n) » n
```

### Step 4: Additional Metadata

```bash
Keywords: [e.g., science, research]
» seismology, tectonics, subduction zones, earthquake analysis

✓ Project configured successfully!

Would you like to start the local server now? (Y/n) » y
```

## Author Information Lookup

Curvenote can automatically fetch author details from public sources, making it easy to add complete metadata:

### Using ORCID

**What you provide:** ORCID URL or ID
```
https://orcid.org/0000-0002-1234-5678
```
or just
```
0000-0002-1234-5678
```

**What Curvenote fetches:**
- Full name
- Email address (if public)
- Institutional affiliations
- ORCID identifier

**Example:**
```bash
Add author(s): » 0000-0002-1234-5678

  Fetching ORCID 0000-0002-1234-5678...
  ✓ Found: Dr. Sarah Johnson
    Email: sarah.johnson@uni.edu
    Affiliation: Department of Earth Sciences, State University
    ORCID: 0000-0002-1234-5678
```

### Using GitHub Username

**What you provide:** GitHub username (with or without @)
```
github:username
```
or
```
@username
```

**What Curvenote fetches:**
- Display name
- Email address (if public)
- GitHub profile URL
- ORCID (if listed in GitHub profile)

**Example:**
```bash
Add author(s): » github:jsmith

  Fetching GitHub user jsmith...
  ✓ Found: James Smith
    Email: james@example.com
    GitHub: https://github.com/jsmith
    ORCID: 0000-0003-9999-8888 (from profile)
```

### Manual Entry

If automatic lookup isn't possible, you can enter information manually:

```bash
Add author(s): » Jane Doe

  Could not find ORCID or GitHub profile
  
  Email: » jane.doe@university.edu
  Affiliation: » Physics Department, Research University
  ORCID (optional): » 0000-0001-2345-6789
```

### Multiple Authors

You can add multiple authors in one line by separating them with commas:

```bash
Add author(s): » 0000-0002-1234-5678, github:jdoe, jane.smith@uni.edu

  Fetching ORCID 0000-0002-1234-5678...
  ✓ Found: Dr. Jane Smith

  Fetching GitHub user jdoe...
  ✓ Found: John Doe

  Processing: jane.smith@uni.edu
  Name: » Jane Smith
  Affiliation: » State University
```

## Completing Setup Later

You don't need to fill in all metadata during initial setup. Curvenote encourages you to:

1. **Focus on writing first** - Get your content down
2. **Return for metadata** - Run `curvenote init --improve` when ready
3. **Update before publication** - Ensure complete metadata before submission

### Using --improve

After writing your article, complete or update your metadata:

```bash
$ curvenote init --improve

🔄 Improving existing project configuration...

Project title: Seismic Analysis of the Western Pacific
» [Press Enter to keep current value]

Subtitle: Understanding earthquake patterns in subduction zones
» Comprehensive analysis of earthquake patterns in the Western Pacific subduction zone

Add author(s): Dr. Jane Smith, John Doe
» Dr. Jane Smith, John Doe, github:newcollaborator

  Fetching GitHub user newcollaborator...
  ✓ Found: Alex Chen
    Email: alex.chen@research.org

Keywords: seismology, tectonics, subduction zones
» seismology, tectonics, subduction zones, earthquake prediction, geohazards

📋 Summary of changes:
  • subtitle: Updated to more descriptive version
  • authors: Added Alex Chen
  • keywords: Added "earthquake prediction, geohazards"

Save these changes to curvenote.yml? (Y/n) » y

✅ Project configuration updated successfully!
```

## Command Options

### Specify Output Directory

Clone to a specific directory:

```bash
curvenote init --github https://github.com/username/template --output my-project
```

Or clone into the current directory:

```bash
curvenote init --github https://github.com/username/template --output .
```

### Non-Interactive Mode

For automation or scripts, use the `--yes` flag:

```bash
curvenote init --github https://github.com/username/template --yes
```

This uses default values where available and skips optional questions.

## Example: Rock Scientists Template

Here's a complete example using a fictional geoscience journal template:

```bash
$ curvenote init --github https://github.com/rock-scientists/submission-template

🔗 Initializing from GitHub template...

📥 Cloning repository to submission-template...
✓ Repository cloned successfully
📄 Found curvenote.yml
📖 Loading project configuration...
✓ Project configuration loaded: Rock Scientists Submission Template

📋 Customizing your project...

Rock Scientists requires specific metadata for submissions. 
Let's collect that information now.

Project title: [e.g., My Research Project]
» Mineral Composition Analysis of Oceanic Crust Samples

Subtitle: [e.g., A concise description]
» Geochemical analysis from the Mid-Atlantic Ridge

Add author(s): [ORCID, GitHub username, or comma-separated list]
» 0000-0002-5555-6666, 0000-0003-7777-8888

  Fetching ORCID 0000-0002-5555-6666...
  ✓ Found: Dr. Maria Garcia
    Affiliation: Institute of Marine Geology

  Fetching ORCID 0000-0003-7777-8888...
  ✓ Found: Dr. Robert Chen  
    Affiliation: Department of Geosciences, Ocean University

Primary rock types studied: [e.g., igneous, sedimentary]
» igneous, basalt, gabbro

Study site location: [e.g., Western Pacific]
» Mid-Atlantic Ridge, 23°N

Keywords: [e.g., geochemistry, petrology]
» geochemistry, petrology, oceanic crust, basalt, mid-ocean ridge

✓ Project configured successfully!

Would you like to start the local server now? (Y/n) » y

🌎 Starting local server...
🔌 Server started on port 3000!

    👉  http://localhost:3000  👈
```

## Tips for Using Templates

1. **Check the README**: Template repositories should include documentation on their purpose and customization options

2. **Understand custom questions**: Templates may ask domain-specific questions - read the hints provided

3. **Use ORCID when possible**: It provides the most complete and accurate author information

4. **Don't worry about perfection**: You can always run `curvenote init --improve` to update metadata later

5. **Review the generated config**: After initialization, check your `curvenote.yml` to see what was configured

6. **Explore the content**: Templates often include example content you can modify or replace

## Next Steps

After initializing from a template:

- **Review generated files**: Check what the template created
- **Customize content**: Replace example content with your own
- **Configure deployment**: Set up your domain in `curvenote.yml`
- **Start writing**: Focus on your content, metadata can be refined later
- **Deploy**: Use `curvenote deploy` when ready to publish

## See Also

- [Creating Templates](creating-templates.md) - Learn how to create your own templates
- [CLI Commands Reference](cli-commands.md) - Complete command documentation
- [Project Configuration](../write/frontmatter.md) - Understanding curvenote.yml

