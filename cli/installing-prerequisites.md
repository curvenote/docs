---
title: Install Node.js Prerequisites
short_title: Node.js Setup
---

# Install Node.js Prerequisites

## Overview
Install Node.js version 14 or higher to use the Curvenote CLI for creating and managing scientific content

Node.js is the JavaScript runtime required to run the Curvenote CLI. Choose the installation method that best fits your system and workflow preferences.

## Before You Start

Make sure you have:
- Administrative access to your system (for global installation)
- Stable internet connection for download
- Understanding of your system's package manager
- Terminal or command prompt access

## 1. Choose Installation Method

Select the best method for your system:

**Manual Installation**: Download from nodejs.org (all platforms)

**Package Managers**: Use system package managers (recommended)

**Version Managers**: Use nvm or similar tools (advanced users)

**Virtual Environments**: Use conda or nodeenv (isolated environments)

## 2. Manual Installation

Download and install from the official website:

**Visit**: https://nodejs.org/

**Download**: LTS (Long Term Support) version

**Install**: Follow platform-specific instructions

**Verify installation:**
```shell
node --version
npm --version
```

## 3. Package Manager Installation

**macOS (Homebrew):**
```shell
brew install node
```

**Ubuntu/Debian:**
```shell
sudo apt update
sudo apt install nodejs npm
```

**Windows (Chocolatey):**
```shell
choco install nodejs
```

**CentOS/RHEL:**
```shell
sudo yum install nodejs npm
```

## 4. Version Manager Installation

**nvm (Linux/macOS):**
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

**nvm-windows:**
Download from https://github.com/coreybutler/nvm-windows

**Install specific version:**
```shell
nvm install 18.17.0
nvm use 18.17.0
```

## 5. Virtual Environment Installation

**Conda/Mamba:**
```shell
conda install -c conda-forge 'nodejs>=18,<19'
```

**nodeenv (Python users):**
```shell
pip install nodeenv
nodeenv -n 18.17.0 my_env
source my_env/bin/activate
```

## 6. Verify Installation

Test that Node.js is properly installed:

```shell
node --version
npm --version
```

**Expected output:**
```
v18.17.0
9.6.7
```

**Check PATH:**
```shell
which node
which npm
```

## Next Steps

- [Install Curvenote CLI →](./installing.md)
- [Set Up Authentication →](./authentication.md)
- [Create Your First Project →](../Getting Started/create-project.md)

---

💡 **Tip:** Use the LTS (Long Term Support) version of Node.js for the most stable experience. Even-numbered versions (16, 18, 20) are recommended.

⚡ **Important: Node.js Requirements**

- **Version requirement**: Node.js 14.0.0 or higher
- **npm requirement**: npm 6.0.0 or higher
- **LTS versions**: Use even-numbered releases (16, 18, 20)
- **PATH setup**: Ensure node and npm are in your system PATH
- **Permissions**: May need sudo/admin access for global installation
