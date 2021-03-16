import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {
 // await libraryGenerator(host, { name: schema.name });

   // JSON.parse(host.read(filePath: 'workspace.json').toString());
  //  host.write(filePath: 'workspace.json', JSON.stringify(sortedJson));
    schema.linter = 'tslint';
    schema.name = 'util-' + schema.name;

    await libraryGenerator(host, { name: schema.name, linter: schema.linter,
    directory: schema.directory, tags:`type:util, scope:${schema.directory}`,});

    await formatFiles(host);
    return () => {
      installPackagesTask(host);
    };


}
