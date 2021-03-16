import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {
  schema.linter = 'tslint';
  schema.name = 'util-' + schema.name;
  schema.directory = schema.directory;

  await libraryGenerator(host,
  { name: schema.name,
  linter: schema.linter,
  directory: schema.directory,
  tags: `type:util, scope:${schema.directory}`);
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
