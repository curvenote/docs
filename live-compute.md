---
title: Live Compute
---

### BinderHub and REES

To continue you should be familiar with the public My Binder service, hosted at https://mybinder.org, if not please [read the docs](https://mybinder.readthedocs.io/en/latest/) and try using it. Your Computational Article or Report will be using a version of Binder ({term}`BinderHub`) behind the scenes, however, it is private and hosted by Curvenote and is therefore much faster to start as we cache our users images (see [](./computational-tiers.md)).

BinderHub supports a range of different configuration files and options that are designed to help you get a collection of code and notebooks running in a reproducible manner. The specification for that is called REES and you can read more about [the different configuration files here](https://repo2docker.readthedocs.io/en/latest/config_files.html).

You'll see that many of these are just the standard dependency management files (like `requirements.txt` or `environment.yml`) that you will be used to from working in a python or R environment.

#### Add MyST Markdown support to Jupyter Lab

To include support for MyST Markdown in you can simply add `jupyterlab-myst` as a dependency in your `requirements.txt` or `environment.yml` files. This will mean that any MyST markdown syntax in your `.md` files or notebooks will be properly rendered.

### Running on mybinder.org

A good initial test of your computational environment setup is to ensure that your code and notebooks work on mybinder.org - that should be your first step and probably means getting your work into a public repo on GitHub.

```{tip}
If you are not able to use the public mybinder.org service, perhaps because you cannot make your work public, then you can still proceed with the following steps and use Curvenote's [draft submissions](#submit-a-draft) for testing.
```

### Configuration via Frontmatter

Beyond running on the mybinder.org service, your environment needs a little more configuration before it is ready for use as an Article or Report. This is a matter of including additional frontmatter fields in your `curvenote.yml` or `myst.yml`.

Here is an example:

```yaml
version: 1
project:
  ...
  jupyter: true
  exports:
    - format: meca
  requirements:
    - requirements.txt
    - apt.txt
  resources:
    - src/**/*
    - example.csv
    - model.pkl
```

`jupyter`
: (boolean) Enables or disables computation

`exports[format:meca]`
: ([list:exports](https://mystmd.org/guide/frontmatter#frontmatter-exports)) The `exports` list should include a `meca` export. You may have other exports listed, like `pdf`, that is fine too. The MECA archive is used to collect and store the entire reproducible environment behind your article or report

`requirements`
: (list:string) This is a list of the REES compatible files that should be included in your submission

`resources`
: This is a list of files, folders, or glob patterns, that should be included in your submission. Note that all files listed in your `_toc.yml` will be automatically included.

### Testing on my computer

To confirm that your submission builds run:

```bash
curvenote export meca
```

You will be able to see a `*.zip` file in the `_build/exports` folder, confirm that this zip file contains your expected environment.

### Testing in the Venue's environment

Next you can test your submission in the Venue's environment by submitting a _Draft_. To start working with draft submissions go to the [Submitting you Work](submitting-your-work.md) guide.
