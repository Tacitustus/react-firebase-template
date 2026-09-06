import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('新しいプロジェクト名を入力してください: ', (projectName) => {
  if (!projectName) {
    console.error('プロジェクト名が入力されませんでした。');
    rl.close();
    process.exit(1);
  }

  const filesToUpdate = [
    {
      file: 'package.json',
      replace: (content) => {
        const pkg = JSON.parse(content);
        pkg.name = projectName;
        return JSON.stringify(pkg, null, 2) + '\n';
      },
    },
    {
      file: 'index.html',
      replace: (content) => content.replace(/<title>.*?<\/title>/, `<title>${projectName}</title>`),
    },
    {
      file: 'BLUEPRINT.md',
      replace: (content) => content.replace(/# プロジェクト仕様書/, `# ${projectName} 仕様書`),
    },
    {
      file: 'README.md',
      replace: (content) => content.replace(/# React Firebase Template/g, `# ${projectName}`),
    },
  ];

  filesToUpdate.forEach(({ file, replace }) => {
    const filePath = path.join(rootDir, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const newContent = replace(content);
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ ${file} を更新しました。`);
    } else {
      console.warn(`⚠️ ${file} が見つかりませんでした。`);
    }
  });

  console.log('\n🎉 セットアップが完了しました！');
  rl.close();
});
