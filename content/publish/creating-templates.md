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

## Questions?

Contact submissions@rockscientists.org
```

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

  - id: corresponding_author_email
    field: project.corresponding_author_email
    enabled: true
    type: text
    message: "Corresponding author email:"
    placeholder: "email@institution.edu"
    required: true

  - id: rock_types
    field: project.rock_types
    enabled: true
    type: list
    message: "Primary rock types studied:"
    placeholder: "e.g., sedimentary, igneous, metamorphic, basalt, granite"
    hint: "List major rock types relevant to your study"
    required: true

  - id: study_location
    field: project.study_location
    enabled: true
    type: text
    message: "Study site location:"
    placeholder: "e.g., Mid-Atlantic Ridge, 23°N or Western Pacific Subduction Zone"
    hint: "Provide geographic location with coordinates if applicable"
    required: true

  - id: geological_age
    field: project.geological_age
    enabled: true
    type: text
    message: "Geological age/period (if applicable):"
    placeholder: "e.g., Cretaceous, Paleozoic, Recent"
    required: false

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

  # Disable subtitle as it's not used in Rock Scientists format
  - id: subtitle
    enabled: false
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

  - id: lab_group
    field: project.lab_group
    enabled: true
    type: text
    message: "Lab group:"
    default: "Smith Geophysics Research Lab"
    required: true

  - id: project_lead
    field: project.authors
    enabled: true
    type: people
    message: "Project lead:"
    placeholder: "ORCID or GitHub username"
    hint: "The primary investigator for this project"
    required: true

  - id: team_members
    field: project.contributors
    enabled: true
    type: people
    message: "Team members:"
    placeholder: "Comma-separated ORCIDs or GitHub usernames"
    hint: "Additional researchers who contributed to this project"
    required: false

  - id: project_type
    field: project.project_type
    enabled: true
    type: text
    message: "Project type:"
    placeholder: "e.g., Field Study, Lab Analysis, Literature Review"
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

  # Disable description and subtitle
  - id: description
    enabled: false
  - id: subtitle
    enabled: false
```

### Example 3: Course Assignment Template

For instructors distributing assignments:

```yaml
name: curvenote init
version: 1
questions:
  - id: title
    field: project.title
    enabled: true
    type: text
    message: "Assignment title:"
    placeholder: "e.g., Lab 3: Seismic Wave Analysis"
    required: true

  - id: student_name
    field: project.authors
    enabled: true
    type: people
    message: "Student name:"
    placeholder: "Your GitHub username or name"
    hint: "This will appear as the author of your submission"
    required: true

  - id: course_code
    field: project.course_code
    enabled: true
    type: text
    message: "Course code:"
    default: "GEOL-301"
    required: true

  - id: semester
    field: project.semester
    enabled: true
    type: text
    message: "Semester:"
    default: "Fall 2024"
    required: true

  - id: due_date
    field: project.due_date
    enabled: true
    type: text
    message: "Due date:"
    placeholder: "e.g., 2024-10-15"
    required: false

  # Disable fields not relevant for assignments
  - id: subtitle
    enabled: false
  - id: description
    enabled: false
  - id: keywords
    enabled: false
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

### Testing Locally

Before publishing, test your template thoroughly:

```bash
# 1. Create a test directory
$ mkdir ../test-my-template
$ cd ../test-my-template

# 2. Initialize from your local template
$ curvenote init --github file:///absolute/path/to/my-template

# 3. Go through the questions as a user would
# 4. Verify the output in curvenote.yml
# 5. Test the content structure
```

Test with different scenarios:
- Skip optional questions
- Provide various author formats (ORCID, GitHub, manual)
- Test required vs. optional fields
- Verify custom fields appear in `curvenote.yml`

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

### README Best Practices

Your README should include:

```markdown
# Template Name

One-line description of what this template is for.

## Purpose

Who should use this template and why.

## What's Included

- List of files and structure
- Any pre-configured settings
- Example content

## Getting Started

```bash
curvenote init --github https://github.com/username/template-name
```

## Custom Questions

This template asks for:
- **Field name**: Description and why it's needed
- **Another field**: Purpose and expected format

## Metadata Requirements

- Required fields (must be provided)
- Optional fields (can skip)
- Format expectations

## Support

How to get help or ask questions.

## License

Template license information.
```

### Example Repository README

Here's a complete example for Rock Scientists:

```markdown
# Rock Scientists Submission Template

Official article template for submissions to Rock Scientists, the international
journal of geological research.

## Purpose

This template provides a standardized starting point for Rock Scientists 
submissions, ensuring all required metadata is collected and articles follow 
the journal's structure and style guidelines.

## What's Included

- Pre-configured Rock Scientists article structure
- GSA citation style
- Example figures with proper captions
- Sample geology-specific content sections
- Required metadata fields via custom template.yml

## Getting Started

```bash
curvenote init --github https://github.com/rock-scientists/submission-template
```

You'll be guided through providing:
- Article title and abstract
- Author information (ORCID required)
- Rock types and study location
- Geological age/period
- Keywords and funding information

## Metadata Requirements

### Required Fields

- **Title**: Descriptive article title
- **Abstract**: 250 words or less
- **Authors**: All authors with ORCID identifiers
- **Corresponding author email**: For editorial contact
- **Rock types**: Primary rock types in your study
- **Study location**: Geographic location with coordinates
- **Keywords**: 5-10 keywords from GSA Thesaurus

### Optional Fields

- **Geological age/period**: If applicable to your study
- **Funding source**: Grant numbers and funding agencies

## Writing Your Article

After initialization:

1. Replace example content with your research
2. Add figures to the `images/` directory
3. Update `references.bib` with your citations
4. Run `curvenote start` to preview locally

## Before Submission

Run `curvenote init --improve` to review and complete all metadata before 
submitting to the journal.

## Questions?

Contact the editorial team:
- Email: submissions@rockscientists.org
- Website: https://rockscientists.org/submit

## License

This template is available under the MIT License.
```

## Best Practices Summary

### For Template Creators

1. **Keep questions focused** - Only ask for information you really need
2. **Provide clear examples** - Use realistic placeholders from your domain
3. **Use hints effectively** - Explain why you're asking and what format you expect
4. **Encourage ORCID** - It provides the most complete author metadata
5. **Test thoroughly** - Try your template as a new user would
6. **Document everything** - Clear README with examples and expectations
7. **Make improvement easy** - Encourage users to run `--improve` later

### For Field-Specific Templates

1. **Use domain terminology** - Speak your community's language
2. **Collect relevant metadata** - Ask for discipline-specific information
3. **Provide domain examples** - Show realistic examples from your field
4. **Set appropriate defaults** - Pre-fill organization-specific values
5. **Link to standards** - Reference community vocabularies and ontologies

### For Lab/Organization Templates

1. **Standardize naming** - Consistent project and file naming
2. **Include branding** - Lab logo and standard styling
3. **Pre-configure settings** - Default funding, affiliations, etc.
4. **Provide examples** - Show proper structure with example projects
5. **Version your template** - Update as workflows evolve

## Next Steps

- Create your first template repository
- Generate and customize `template.yml`
- Test with your team or community
- Publish to GitHub
- Share with your community
- Iterate based on feedback

## Additional Resources

- [Using GitHub Templates](init-from-github.md) - User guide for your template users
- [CLI Commands Reference](cli-commands.md) - Complete command documentation  
- [Project Configuration](../write/frontmatter.md) - Understanding curvenote.yml
- [MyST Markdown Guide](../write/mystmd.md) - Content formatting

---

**Questions or feedback?** Open an issue on the [Curvenote repository](https://github.com/curvenote/curvenote) or contact support@curvenote.com.

