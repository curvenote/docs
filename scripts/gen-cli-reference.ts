#!/usr/bin/env tsx
/**
 * gen-cli-reference.ts
 *
 * Generates Markdown reference pages for every command in the
 * `curvenote-cli` package and writes them into
 * `content/cli/commands/`. Run on every CLI release; commits the
 * output so reference pages are diffable in PRs.
 *
 * Usage:
 *   tsx scripts/gen-cli-reference.ts [--cli-src ../curvenote/packages/curvenote-cli/src]
 *
 * Strategy:
 *   1. Walk command files under `<cli-src>/{site,sync,submissions,works,check,export,docs}/`.
 *   2. For each top-level command group, extract the commander/yargs
 *      builder and read its name, description, options, and
 *      subcommands.
 *   3. Render a Markdown file per command group using the template
 *      below. Preserve the `<!-- generated, do not edit -->` banner
 *      so reviewers know not to hand-edit.
 *   4. Write into `content/cli/commands/<group>.md`.
 *
 * This file is currently a stub; it lays out the contract and the
 * structure. Implementation lands in a follow-up commit once the
 * scaffold is reviewed.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

interface CommandFlag {
  name: string;
  description: string;
  default?: string;
}

interface CommandSpec {
  name: string;
  description: string;
  usage: string;
  flags: CommandFlag[];
  subcommands: CommandSpec[];
  examples: string[];
  deprecated?: string;
}

const COMMAND_GROUPS = [
  'site',
  'sync',
  'submit',
  'submission',
  'works',
  'check',
  'export',
] as const;

const BANNER = '<!-- generated, do not edit -->';

function renderCommand(spec: CommandSpec, depth = 1): string {
  const heading = '#'.repeat(depth);
  const lines: string[] = [];
  lines.push(`${heading} \`curvenote ${spec.name}\``);
  lines.push('');
  if (spec.deprecated) {
    lines.push(`:::{warning} Deprecated`);
    lines.push(spec.deprecated);
    lines.push(':::');
    lines.push('');
  }
  lines.push(spec.description);
  lines.push('');
  lines.push('```bash');
  lines.push(spec.usage);
  lines.push('```');
  lines.push('');
  if (spec.flags.length) {
    lines.push(`${'#'.repeat(depth + 1)} Flags`);
    lines.push('');
    for (const flag of spec.flags) {
      const def = flag.default ? ` (default: \`${flag.default}\`)` : '';
      lines.push(`- \`${flag.name}\` — ${flag.description}${def}`);
    }
    lines.push('');
  }
  if (spec.examples.length) {
    lines.push(`${'#'.repeat(depth + 1)} Examples`);
    lines.push('');
    for (const example of spec.examples) {
      lines.push('```bash');
      lines.push(example);
      lines.push('```');
      lines.push('');
    }
  }
  for (const sub of spec.subcommands) {
    lines.push(renderCommand(sub, depth + 1));
  }
  return lines.join('\n');
}

function renderPage(spec: CommandSpec): string {
  return [
    '---',
    `title: curvenote ${spec.name}`,
    `description: ${spec.description}`,
    '---',
    '',
    BANNER,
    '',
    renderCommand(spec),
  ].join('\n');
}

function main() {
  const cliSrcArg = process.argv.find((a) => a.startsWith('--cli-src='));
  const cliSrc = cliSrcArg
    ? cliSrcArg.slice('--cli-src='.length)
    : path.resolve(__dirname, '..', '..', 'curvenote', 'packages', 'curvenote-cli', 'src');
  const outDir = path.resolve(__dirname, '..', 'content', 'cli', 'commands');
  if (!fs.existsSync(cliSrc)) {
    console.error(`curvenote-cli source not found at: ${cliSrc}`);
    console.error('Pass --cli-src=/path/to/curvenote-cli/src');
    process.exit(1);
  }
  fs.mkdirSync(outDir, { recursive: true });
  for (const group of COMMAND_GROUPS) {
    // TODO: parse the actual command builder for `group` from
    // `${cliSrc}/${group}/index.ts` (or equivalent) and produce a
    // CommandSpec. For now, emit a placeholder.
    const spec: CommandSpec = {
      name: group,
      description: `The ${group} command group. Reference content will be generated here.`,
      usage: `curvenote ${group} [subcommand] [options]`,
      flags: [],
      subcommands: [],
      examples: [],
    };
    const out = path.join(outDir, `${group}.md`);
    fs.writeFileSync(out, renderPage(spec));
    console.log(`wrote ${out}`);
  }
}

main();
