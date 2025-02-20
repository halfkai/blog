import path from 'path';
import { readdir } from 'fs/promises';
import { createInterface } from 'readline';
import {
  createReadStream,
  existsSync,
  mkdirSync,
  ReadStream,
  unlinkSync,
  writeFileSync,
} from 'fs';
import { open } from 'fs/promises';

export const genTableOfContents = async () => {
  const postsPath = path.join(__dirname, '../posts');
  const contents = await readdir(postsPath, {
    recursive: true,
    encoding: 'utf-8',
  });
  const openResults = contents.map((filename) => {
    const filepath = path.join(postsPath, filename);
    return [createReadStream(filepath), filepath] as [ReadStream, string];
  });
  const titleMap: Map<string, string> = new Map();
  await Promise.allSettled(
    openResults.map(async ([stream, filepath]) => {
      const rl = createInterface({ input: stream, crlfDelay: Infinity });
      for await (const line of rl) {
        const title = line.match(/^# (.*)/)?.[1];
        if (title) {
          titleMap.set(
            path
              .relative(__dirname, filepath.toString())
              .replace('../', '/blog/'),
            title
          );
        }
        break;
      }
    })
  );
  const dir = path.join(__dirname, '../src/generates');
  const filepath = `${dir}/tableOfContens.ts`;
  let arr: Array<[string, string]> = [];
  titleMap.forEach(async (value, key) => {
    arr.push([key, value]);
  });
  if (existsSync(filepath)) {
    unlinkSync(filepath);
  }
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  const file = await open(`${dir}/tableOfContens.ts`, 'w');
  file.write(`export default ${JSON.stringify(arr)} as const`);
};

genTableOfContents();
