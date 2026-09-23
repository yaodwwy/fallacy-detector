const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_FILE = path.join(ROOT_DIR, 'data', 'fallacies.json');
const CSV_FILE = path.join(ROOT_DIR, 'data', 'fallacies.csv');
const CHEATSHEET_FILE = path.join(ROOT_DIR, 'references', 'cheatsheet.md');
const TAXONOMY_FILE = path.join(ROOT_DIR, 'data', 'taxonomy.json');

const raw = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const categories = raw.categories.filter(c => c.id !== 'all');
const items = raw.items;

// 1. Generate taxonomy.json
const taxonomy = {
  version: '1.0.0',
  totalCategories: categories.length,
  totalFallacies: items.length,
  categories: categories.map(c => {
    const catItems = items.filter(i => i.categoryId === c.id);
    return {
      id: c.id,
      name: c.name,
      englishName: c.englishName,
      color: c.color,
      count: catItems.length,
      description: c.description,
      fallacyIds: catItems.map(i => i.id)
    };
  })
};
fs.writeFileSync(TAXONOMY_FILE, JSON.stringify(taxonomy, null, 2), 'utf8');
console.log(`Generated -> ${TAXONOMY_FILE}`);

// 2. Generate CSV
function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

const csvHeader = ['id', 'name', 'englishName', 'category', 'categoryId', 'definition', 'example', 'manifestation', 'counterStrategy'];
const csvRows = [csvHeader.join(',')];

items.forEach(item => {
  const row = [
    escapeCsv(item.id),
    escapeCsv(item.name),
    escapeCsv(item.englishName),
    escapeCsv(item.category),
    escapeCsv(item.categoryId),
    escapeCsv(item.definition),
    escapeCsv(item.example),
    escapeCsv(item.deepDive?.manifestation || ''),
    escapeCsv(item.deepDive?.counterStrategy || '')
  ];
  csvRows.push(row.join(','));
});
fs.writeFileSync(CSV_FILE, csvRows.join('\n'), 'utf8');
console.log(`Generated -> ${CSV_FILE}`);

// 3. Generate cheatsheet.md
let md = `# 54 种常见逻辑谬误与诡辩论证速查手册 (Cheatsheet)

> 本速查表基于经典论证哲学与 **Information is Beautiful** 知识图谱架构整理，涵盖 6 大论证认知维度、54 种常见逻辑谬误与诡辩话术，配备核心判定要点与破局反制策略。

---

## 目录索引
`;

categories.forEach(c => {
  const catItems = items.filter(i => i.categoryId === c.id);
  md += `- [${c.name} (${c.englishName}) - ${catItems.length} 种](#${c.id})\n`;
});

md += `\n---\n\n`;

categories.forEach(c => {
  const catItems = items.filter(i => i.categoryId === c.id);
  md += `<a id="${c.id}"></a>\n`;
  md += `## ${c.name} · ${c.englishName} (${catItems.length} 种)\n\n`;
  md += `> **维度本质**：${c.description}\n\n`;
  md += `| 编号 | 谬误名称 | 英文名称 | 核心谬误特征 | 经典言论示例 | 一针见血破局反制 |\n`;
  md += `| :---: | :--- | :--- | :--- | :--- | :--- |\n`;

  catItems.forEach(item => {
    const id = item.id;
    const name = item.name.replace(/\|/g, '\\|');
    const en = item.englishName.replace(/\|/g, '\\|');
    const def = (item.definition || '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
    const eg = (item.example || '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
    const counter = (item.deepDive?.counterStrategy || '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
    md += `| **#${id}** | **${name}** | *${en}* | ${def} | \`${eg}\` | ${counter} |\n`;
  });

  md += `\n`;
});

fs.writeFileSync(CHEATSHEET_FILE, md, 'utf8');
console.log(`Generated -> ${CHEATSHEET_FILE}`);
console.log('Done!');
