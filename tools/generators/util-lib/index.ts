import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { formatFiles } from '@nrwl/devkit';

export default async function (host: Tree, schema: any) {
  updateJson(host, 'workspace.json', updater.json) => {
    console.log(json);
    json.sortedJson;
    return json;
  });

    schema.linter = 'tslint';
    schema.name = 'util-' + schema.name;

    await libraryGenerator(host, { name: schema.name, linter: schema.linter,
    directory: schema.directory, tags:`type:util, scope:${schema.directory}`,});

    await formatFiles(host);
    return () => {
      installPackagesTask(host);
    };


}
