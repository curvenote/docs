---
title: Submitting your work
---

```{tip} Objective
By the end of this guide you will be able to use the Curvenote CLI to submit your work to a venue, check it's status and submit updates to it.

The recommended starting point for this guide is a local MyST Project that you have already prepared using the [Preparing for Submission](preparing-for-submission.md) guide.

If you have piece of work you are trying to submit for real, following this guide will take you through that process.

If not then you can follow this guide with any MyST Project that builds to a website without issue and submit this to the `cn-testing` venue. If you don't have a project you can use the [MyST quickstart project](https://github.com/executablebooks/mystmd-quickstart).
```

## Pre-requisites

If you have not already done so:

- [Install the Curvenote CLI](installing.md) and setup your [API Token](authentication.md)
- Prepare a local folder containing your MyST submission OR clone the [quickstart project](https://github.com/executablebooks/mystmd-quickstart)
- Open a terminal / command prompt and `cd` into that folder

## Check your build

Check that your work builds as expected by running `curvenote start` and opening the resulting link in your web browser.

```{figure} images/curvenote-start.png
:label: fig:curvenote-start
:class: framed
The result of running `curvenote start` showing the link to the web based preview of the work and various output logs and in this case warnings. Errors and warnings such as those shown for broken cross references  should be addressed before making a submission.
```

You should check that no errors appear on in the terminal after running `curvenote start`. Errors and warnings can point to problems with your work that should be addressed before submission.

## The Venue

On Curvenote's platform you submit a work to a {term}`Site` ([learn about sites](../sites/index.md)).

In this guide, we'll assume the venue is a scientific journal that uses collections to organize it's publications by year and that at least one currently open for submission.

To proceed with a submission, ensure your know the venue and `collection` names and any other relevant information provided in the submission instructions by the venue.

If you are just practicing with a dummy submission, you can submit to `cn-testing`.

```{warning} Venues with restricted submission
:class: dropdown
Venues such as research group or private sites restrict submissions to a specific set of Curvenote users via a publishing team.

If this is the first time you are submitting to one of these venues you'll may need to contact your site administrator and ensure that your Curvenote user account has been added to the publishing team.
```

(doc:draft)=

## Submit a draft

So far using `curvenote start` and `curvenote check` has allowed you to screen for issues locally.

You can also submit a {term}`draft` to the venue which will allow you to check your submission using the venue's build system, preview it on the venue's website and if you are submitting a Computational Article or Notebook based Report, test the computational environment configuration is working correctly the venue's servers.

Drafts are completely standalone. They are not visible to or received by the venue's editorial team and are removed after 30 days. You can make as many draft submissions as you like and they are only accessible using the link that it returned by the CLI.

To submit a draft simple include the `--draft` argument when submitting:

```bash
% curvenote submit scipy --draft
```

Once the submit command is successfully completed, you will something like the following output:

```{figure} images/curvenote-submit-draft.png
:label: fig:curvenote-submit-draft
:class: framed
Final parts of the output from the `curvenote submit <venue> --draft` command showing upload information and a link to the _"build"_ on Curvenote. Use this link to review the build outcome and access a preview of your draft submission on the venue's website.
```

This like: https://sites.curvenote.com/build/018ee71b-9d20-760c-9090-d9e43d674112 to the _"build"_ information for your submission.

The build page lists some of the metadata from your submission, includes a {term}`preview` link and lists all of the passing and failing checks on your submission. Additional detail and documentation is included for each check, which you can use to resolve remaining issues or satisfy optional requirements from the venue.

```{figure} images/curvenote-build-page.png
:label: fig:curvenote-build-page
:class: framed
The build page for the `--draft` submission, although all submissions will generate a associated build page where you can access the preview and check summary.
```

Clicking on the _Preview_ button will open your submission in preview mode, where you will be able to see it within the theme/style of the venue's website.

```{figure} images/curvenote-draft-preview.png
:label: fig:curvenote-draft-preview
:class: framed
A preview of the draft submission.
```

You can use this to check that all parts of your submission are present and correct, including additional pages of supporting information. If you have submitted a Computational Article or Notebook based Report then you will also be able to test launching a Jupyter instance and any interactive figures or inline notebook computation that the venue enables.

## Submit your work (for real)

Once you have are happy with your submission, all your required checks pass and you have reviewed a draft submission - then it's time to submit for real. Once your submission is received by the venue their editorial team will be notified and process it according to their editorial workflow.

To make your submission for real simply type:

```bash
% curvenote submit <venue>
```

And follow the prompts. The process will be the same as you saw when submitting your draft, and you'll be able to check the result of the build and preview your submission.

### Collections and Kinds

Venues may use _Collections_ to organize their content and invite submissions from authors at particular times. Venues also use _Submission Kinds_ to identify a particular type of submission for example Conference Abstract, Research Paper, Research Letter, etc...

If a venue you are submitting to has multiple Submission Kinds available or mulitple Collections open, you will be prompted to select a Collection and/or Submission Kind.

```{figure} images/curvenote-submit-collections.png
:label: fig:curvenote-submit-collections
:class: framed
An toy example of a venue with multiple collections open for submission.
```

### Tracking your submission

Every MyST project has a unique `id`, and you can find this in the `curvenote.yml` or `myst.yml` file in your local folder. If you want to take a look, check for:

```{code-block} yaml
:filename: myst.yml or curvenote.yml
:linenos:
:emphasize-lines: 2
project:
    id: 838af10b-c919-48f8-98da-aadef3dab121
    ...
```

If you haven't yet committed your `curvenote/myst.yml` file to version control, then this is a good time to do so. Keeping this file and `id` is essential for easily updating your submission in future.

````{tip} Moving Faster
:class: dropdown
Once you are experienced with submitting using the CLI you may want to speed up the process. In which case you can make use of the additional command line arguments to minimize prompting.

To get help on the available options run:

```bash
% curvenote submit --help
Usage: curvenote submit [options] [venue]

Submit your work to a Venue

Arguments:
  venue                   Venue to submit the work to

Options:
  --kind <string>         Submit to the venue using this submission kind
  --collection <string>   Submit to this collection at the venue
  --draft                 Make an draft submission
  --new                   Start a new submission even if one already exists for the current work/venue
  -y, --yes               Use the defaults and answer "Y" to confirmations (default: false)
  --resume                If a file upload fails, try to resume before raising an error. (default: false)
  --max-size-webp <size>  Max image size to convert to webp format in MB (default: 1000)
  -h, --help              display help for command
```

Note the `--kind` and `--collection` options, as well as the `-y` option for skipping confirmatory prompts.

````

## Check submission status

Once your work has been submitted, you can monitor its status directly through the Curvenote CLI. To check the status of your submission, you can use the following command:

```bash
% curvenote submissions list
```

This command will list all of your submissions and their current statuses, such as "Pending", "In Review", "Rejected" or "Published."

## Submit an update

After your submission has been reviewed, you may need to make updates in response to feedback. To submit an updated version of your work, make the necessary changes to your local MyST project files and then simply re-run:

```bash
% curvenote submit <venue>
```

You can again make draft submissions as needed (using the `--draft` keyword) before updating your submission.
