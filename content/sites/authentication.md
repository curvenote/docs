---
title: Authentication
description: ''
---

Most translation and export functionality is local and **does not** require you to be logged into Curvenote. Additionally, the API for any public content on Curvenote does not require you to be authenticated. However, if you want to sync content from your _private_ Curvenote projects to a local folder, modify any online projects, or deploy a website you will need to be authenticated.

The Curvenote CLI works on an API token that can be generated from your personal settings on [curvenote.com](https://curvenote.com).

## Creating an API Token

API Tokens allow you to access your Curvenote content programmatically.

🛠️ You can create an API token by clicking [here](https://curvenote.com/profile?settings=true&tab=profile-api) if you are signed in or navigating to your **Personal Settings**, which are available under your avatar in the top right.

```{figure} images/settings-api-token.png
:name: FdFCmj6QcJ
:align: center
:width: 70%

Access the API Token by navigating to your **Personal Settings** by clicking on your avatar in the top right.
```

🛠️ Click on the **Generate New Token**, and give you token a description that you can recognize lated if you need to revoke it. You will be shown a screen that allows you to copy the API token for the next step.

```{figure} images/settings-api-copy-token.png
:name: rm1dO7qLHx
:align: center
:width: 70%

Ensure that you copy your token for the next step. You will not be able to access this token again.
```

🛠️ Copy the API Token. You will not be able to see this token again, so be sure to copy it!

## Sign In to Curvenote using the CLI

🛠️ Sign into the Curvenote CLI using the command:

```python
curvenote token set
```

You will be asked for an API Token which you copied from your API Access settings in Curvenote (see above). The command will store a local config file that has your API token to be used for future calls to the library.

### Validate you are signed in

🛠️ You can validate that you are signed in using the command:

```shell
curvenote auth list
```

This will print your username and email or tell you that you are not authenticated.
This command will also list any other accounts that you can login as.

### Changing Profiles

If you have multiple Curvenote accounts, for example, as a bot for a submission system, you can switch profiles using:

```shell
curvenote token select
```

This will bring up a prompt to select which account you should use for the Curvenote API.

### Authenticating on a Server

You can also override the config path by having a `CURVENOTE_TOKEN` in your environment, this is helpful when using the Curvenote CLI from a continuous integration system or on a server, for example, when [deploying from a GitHub Action](https://curvenote.com/oxa:Eh6WvY9NT46Ds4lE3OqJ/rVruBYk1hDZL2Ca9a6UQ).

```shell
export CURVENOTE_TOKEN="API_TOKEN"
```

:::{warning} `CURVENOTE_TOKEN` environment variable takes priority
If the environment variable is present, it will have precedence over any token you have set previously.
The CLI will notify you through a log message about which token is being used.
:::

Alternatively, you can use the `curvenote token set $ENV_VAR` to set the token programmatically; we recommend not to paste your token into the command line directly as that will create an entry in your terminal history.

## Sign Out of Curvenote

To sign out of the Curvenote CLI, you can call:

```shell
curvenote token delete
```

This will remove the local config file with the API token in it. Note, if you have signed into the CLI using the environment variable, you can unset that using `unset CURVENOTE_TOKEN`. To confirm that you are logged out you can run the command `curvenote auth list` as before, and it should inform you that you are not authenticated.

## User and Session Tokens

The CLI handles all session creation and token refresh if you use the user token created in the Curvenote API.
The user token that is provided by Curvenote is a signed JWT, that allows you to login and get a session token. The user token cannot be used for the API generally, instead a session token must be used. To get a session token, `POST` to the `/login` endpoint with an `Authorization` header that includes the user token provided by Curvenote; note that this URL is the audience field (`aud`) of the JWT. The response will validate your user token and provide a session token that can be used on any API endpoint. If you get a `401 Not Authorized` response from the server, your session token may have expired and you can use the above technique to refresh your session token.
