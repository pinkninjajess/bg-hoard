import { Tree, formatFiles, installPackagesTask, updateJson } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

function sortKeys(host: Tree, file: string) {
  updateJson(host, file, (json) => {
    json.projects = sortObjectKeys(json.projects);
    return json;
  });
}

function sortObjectKeys(obj: any) {
  const sorted = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sorted[key] = obj[key];
    });
  return sorted;
}

export default async function(host: Tree) {
  sortKeys(host, 'workspace.json');
  sortKeys(host, 'nx.json');
  await formatFiles(host);
}
}
