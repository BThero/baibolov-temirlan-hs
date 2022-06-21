oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g hw-3
$ hw-3 COMMAND
running command...
$ hw-3 (--version)
hw-3/0.0.0 darwin-arm64 node-v16.14.0
$ hw-3 --help [COMMAND]
USAGE
  $ hw-3 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hw-3 hello PERSON`](#hw-3-hello-person)
* [`hw-3 hello world`](#hw-3-hello-world)
* [`hw-3 help [COMMAND]`](#hw-3-help-command)
* [`hw-3 plugins`](#hw-3-plugins)
* [`hw-3 plugins:install PLUGIN...`](#hw-3-pluginsinstall-plugin)
* [`hw-3 plugins:inspect PLUGIN...`](#hw-3-pluginsinspect-plugin)
* [`hw-3 plugins:install PLUGIN...`](#hw-3-pluginsinstall-plugin-1)
* [`hw-3 plugins:link PLUGIN`](#hw-3-pluginslink-plugin)
* [`hw-3 plugins:uninstall PLUGIN...`](#hw-3-pluginsuninstall-plugin)
* [`hw-3 plugins:uninstall PLUGIN...`](#hw-3-pluginsuninstall-plugin-1)
* [`hw-3 plugins:uninstall PLUGIN...`](#hw-3-pluginsuninstall-plugin-2)
* [`hw-3 plugins update`](#hw-3-plugins-update)

## `hw-3 hello PERSON`

Say hello

```
USAGE
  $ hw-3 hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/bthero/baibolov-temirlan-hs/blob/v0.0.0/dist/commands/hello/index.ts)_

## `hw-3 hello world`

Say hello world

```
USAGE
  $ hw-3 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `hw-3 help [COMMAND]`

Display help for hw-3.

```
USAGE
  $ hw-3 help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for hw-3.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `hw-3 plugins`

List installed plugins.

```
USAGE
  $ hw-3 plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ hw-3 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `hw-3 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ hw-3 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ hw-3 plugins add

EXAMPLES
  $ hw-3 plugins:install myplugin 

  $ hw-3 plugins:install https://github.com/someuser/someplugin

  $ hw-3 plugins:install someuser/someplugin
```

## `hw-3 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ hw-3 plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ hw-3 plugins:inspect myplugin
```

## `hw-3 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ hw-3 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ hw-3 plugins add

EXAMPLES
  $ hw-3 plugins:install myplugin 

  $ hw-3 plugins:install https://github.com/someuser/someplugin

  $ hw-3 plugins:install someuser/someplugin
```

## `hw-3 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ hw-3 plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ hw-3 plugins:link myplugin
```

## `hw-3 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ hw-3 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hw-3 plugins unlink
  $ hw-3 plugins remove
```

## `hw-3 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ hw-3 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hw-3 plugins unlink
  $ hw-3 plugins remove
```

## `hw-3 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ hw-3 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hw-3 plugins unlink
  $ hw-3 plugins remove
```

## `hw-3 plugins update`

Update installed plugins.

```
USAGE
  $ hw-3 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->