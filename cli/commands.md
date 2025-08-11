---
title: Commands
---

This has the list of all commands for the Curvenote CLI, you can use the help `curvenote -h` on any command and this will print the help for the command or service. To see the version of Curvenote, use `curvenote -v`. For debugging, use the `-d` or `--debug` flag and all debug commands will be logged, use this if any commands fail.

## Getting Started

These commands are designed with prompts to get you started easily and point you to other information on how to get started.

### curvenote init

Creates a project from a directory or clones a remote Curvenote project.

- `-y` or `--yes`: Follows the defaults for initializing a project.
- `--write-toc`: Write an explicit table of contents.

After calling `curvenote init` you will have a local folder with a `curvenote.yml` that defines all site and project settings.

### curvenote clone

Clone a remote Curvenote project, and brings all markdown, notebooks, and site configuration to your local folder.

**Optional arguments**

- `[remote]`: specify the remote project URL, e.g. `https://curvenote.com/@templates/web` if this is not supplied, the CLI will ask you for a remote project URL.
- `[folder]`: specify the local folder to clone into, must not exist. When paired with `-y` below the folder will be chosen as `content/name` where `name` is the name of the Curvenote project.

**Flags**

- `-y` or `--yes`: Follows the defaults for which local folder to clone to, you must provide a remote.

If you are cloning in a folder that already contains a site, then this command will also add the project to your curvenote `site.projects` list as well as an entry into the navigation.

## Working Locally

### curvenote start

Start a local server that live-reloads when you make changes.

- `-c` or `--clean`: clean all cached content, including images. Clean is called before a `curvenote deploy`.
- `-f` or `--force`: force re-install all dependencies. Helpful to reset the curvenote web server as well as pull any new changes.
- `--branch`: Branch to clone from <https://github.com/curvenote/curvenote>. Helpful for testing out new features or in development.
- `--keep-host`: The `HOST` environment variable is by default `localhost`, and will be changed by default. Setting this flag will allow the `HOST` environment variable to be passed into the web server, and may cause it to crash if it is malformed.

### curvenote build

Build all content locally, this is called by `start` and `deploy`. You can use this to write a table of contents, or check links or any other issues without starting a server.

- `-c` or `--clean`: clean all cached content, including images. Clean is called before a `curvenote deploy`.
- `-f` or `--force`: force re-install all dependencies. Helpful to reset the curvenote web server as well as pull any new changes.
- `--branch`: Branch to clone from <https://github.com/curvenote/curvenote>. Helpful for testing out new features or in development.
- `--write-toc`: Write an explicit table of contents.
- `-ci`: Skip the installation and just create build folders for deployment. Helpful when working in a continuous integration system, like [deploying from GitHub](./github-action.md).
- `--strict`: Summarize build warnings and stop on any errors.
- `--check-links`: Check all links to external websites resolve.

## Deploying

### curvenote deploy

- `-y` or `--yes`: Do not ask if you are sure you want to deploy!
- `-f` or `--force`: force re-install all dependencies. Helpful to reset the curvenote web server as well as pull any new changes.
- `-ci`: Skip the installation and just create build folders for deployment. Helpful when working in a continuous integration system, like [deploying from GitHub](./github-action.md).
- `--strict`: Summarize build warnings and stop on any errors.
- `--check-links`: Check all links to external websites resolve.

Use the `site.domains` setting in your `curvenote.yml` to configure which site to deploy to.

## Syncing Content

### curvenote pull

Pull content from a remote Curvenote project or document. This command will overwrite any local content.

- `[path]`: the path to a local project folder or file with a remote configured, if omitted all content will be pulled.
- `-y` or `--yes`: Do not ask if you want to override the files.

You can pull both an entire project, or a single file.
