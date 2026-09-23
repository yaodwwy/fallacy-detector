#!/usr/bin/env node

/**
 * 逻辑谬误与诡辩甄别 CLI 工具 (Logical Fallacy Detector CLI)
 * 
 * 用法:
 *   node scripts/detect.js "既然大家都闯红灯，交警抓我就不对"
 *   node scripts/detect.js --search "权威"
 *   node scripts/detect.js --list
 *   node scripts/detect.js --interactive
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const DATA_FILE = path.join(__dirname, '..', 'data', 'fallacies.json');
const raw = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const items = raw.items;
const categories = raw.categories.filter(c => c.id !== 'all');

function showHelp() {
  console.log(`
🧠 逻辑谬误与诡辩甄别 CLI 工具 (Logical Fallacy Skill)

用法:
  node scripts/detect.js "<待检测文本>"            检测输入语句中的疑似逻辑谬误
  node scripts/detect.js --search "<关键词>"      检索相关谬误定义与反制话术
  node scripts/detect.js --category <类别ID>      按分类查看谬误 (mind/emotion/deduction/content/causality/attack)
  node scripts/detect.js --list                  列出全部 54 种逻辑谬误目录
  node scripts/detect.js --interactive           启动交互式终端诊断会话
  node scripts/detect.js --help                  查看帮助说明
`);
}

function listAll() {
  console.log('\n📚 全部 54 种逻辑谬误与诡辩类型分类索引：\n');
  categories.forEach(c => {
    console.log(`\x1b[36m【${c.name}】(${c.englishName}) - 共 ${c.count} 种\x1b[0m`);
    const catItems = items.filter(i => i.categoryId === c.id);
    catItems.forEach(i => {
      console.log(`  #${i.id} \x1b[1m${i.name}\x1b[0m (${i.englishName}) — ${i.definition.slice(0, 30)}...`);
    });
    console.log('');
  });
}

function searchFallacy(kw) {
  const q = kw.toLowerCase().trim();
  const matched = items.filter(i => 
    i.id === q ||
    i.name.toLowerCase().includes(q) ||
    i.englishName.toLowerCase().includes(q) ||
    i.category.toLowerCase().includes(q) ||
    i.definition.toLowerCase().includes(q) ||
    (i.example && i.example.toLowerCase().includes(q))
  );

  if (matched.length === 0) {
    console.log(`\n❌ 未检索到与 "${kw}" 相关的逻辑谬误。`);
    return;
  }

  console.log(`\n🔍 找到 ${matched.length} 个相关逻辑谬误：\n`);
  matched.forEach(i => printFallacyDetail(i));
}

function printFallacyDetail(i) {
  console.log(`\x1b[35m════════════════════════════════════════════════════════════════\x1b[0m`);
  console.log(`\x1b[1m\x1b[33m#${i.id} ${i.name}\x1b[0m \x1b[90m(${i.englishName})\x1b[0m  | 分类: \x1b[36m${i.category}\x1b[0m`);
  console.log(`\x1b[32m【定义特征】\x1b[0m ${i.definition}`);
  console.log(`\x1b[34m【经典例句】\x1b[0m ${i.example}`);
  if (i.deepDive) {
    if (i.deepDive.manifestation) {
      console.log(`\x1b[33m【常见套路】\x1b[0m ${i.deepDive.manifestation}`);
    }
    if (i.deepDive.counterStrategy) {
      console.log(`\x1b[31m【破局反制】\x1b[0m ${i.deepDive.counterStrategy}`);
    }
  }
  console.log(`\x1b[35m════════════════════════════════════════════════════════════════\x1b[0m\n`);
}

// 启发式关键词与句式特征匹配库
const PATTERNS = [
  { id: '01', kw: ['专家说', '研究表明', '科学家指出', '他们说', '据最新研究'], reason: '诉诸匿名权威：以模糊不清的“专家/研究”代替具体公开可考的文献信源。' },
  { id: '03', kw: ['大家都', '谁不这么干', '大家都这么干', '潜规则', '随大流', '在哪都一样'], reason: '诉诸常规：将现实普遍性直接等同于道德/法规合法性。' },
  { id: '06', kw: ['更贵', '有钱人', '富豪都用', '身价', '便宜没好货'], reason: '身价逻辑：把商业溢价或拥有者财富与客观真理划等号。' },
  { id: '07', kw: ['最新版', '刚刚发布', '新技术肯定好', '老一套过时'], reason: '求新逻辑：时间序列的新颖不等于系统功能的成熟稳定。' },
  { id: '10', kw: ['自古以来', '老祖宗的规矩', '一直以来都是', '传统就是这样'], reason: '诉诸传统：以历史延续的时长替代当代合理性推论。' },
  { id: '12', kw: ['万一', '流落街头', '家破人亡', '再不买就晚了', '灾难'], reason: '诉诸恐惧：制造灾难焦虑以绕过冷静理性核验。' },
  { id: '14', kw: ['纯天然', '大自然的馈赠', '违背天性', '返璞归真'], reason: '诉诸自然：盲目预设天然即良善道德。' },
  { id: '19', kw: ['地面湿', '肯定下雨', '如果...那么'], reason: '肯定后件：形式逻辑后件不能逆推前件唯一性。' },
  { id: '25', kw: ['要么', '非黑即白', '二选一', '不是...就是...', '彻底认输'], reason: '虚假两难：抹杀中间地带的过渡方案。' },
  { id: '26', kw: ['连输', '下次肯定中', '概率平衡', '转运'], reason: '赌徒谬误：独立随机事件不存在记忆补偿。' },
  { id: '33', kw: ['你这是想让', '分明就是想', '照你这么说', '彻底毁灭'], reason: '稻草人：树立极端化、荒谬化的假靶子进行攻击。' },
  { id: '39', kw: ['如果今天...明天就...', '照这样下去', '最终会导致崩溃'], reason: '滑坡谬误：无事实支撑的连锁因果极端外推。' },
  { id: '40', kw: ['真正的', '才算得上是', '根本就不是真正的'], reason: '绝对无误（没有真正的苏格兰人）：通过临时变更范畴维护断言。' },
  { id: '42', kw: ['自从...之后', '接着就发生了', '吃了这个才'], reason: '事后归因：将时间先后顺序当成实质动力学因果。' },
  { id: '46', kw: ['相关', '越大越', '越小越', '正比例'], reason: '错把相关当因果：缺乏机制验证的统计关联。' },
  { id: '47', kw: ['已经投入了', '砸了那么多钱', '打水漂', '心血不能白费'], reason: '沉没成本谬误：决策被无法追回的历史沉没成本绑架。' },
  { id: '49', kw: ['愚蠢', '脑子有病', '白痴', '懂个屁'], reason: '人身攻击：针对个人智商、品格施以侮辱以掩盖论据匮乏。' },
  { id: '50', kw: ['为了钱', '拿了好处', '屁股歪了', '背后有利益', '动机不纯'], reason: '动机论攻击：以发言者的潜在利益替代对其观点的理性审视。' },
  { id: '51', kw: ['你也一样', '你自己不也是', '你年轻时', '先管好你自己'], reason: '你也一样（Whataboutism）：以质疑者的瑕疵回避自身错误。' }
];

function detectText(text) {
  console.log(`\n📋 待诊断文本：\n   "${text}"\n`);
  const matches = [];

  PATTERNS.forEach(p => {
    const hitKw = p.kw.filter(k => text.includes(k));
    if (hitKw.length > 0) {
      const fallacy = items.find(i => i.id === p.id);
      if (fallacy) {
        matches.push({ fallacy, hitKw, reason: p.reason });
      }
    }
  });

  if (matches.length === 0) {
    console.log(`\x1b[32m✔ 未触发基础启发式规则匹配。\x1b[0m\n建议结合 LLM Agent (详见 SKILL.md) 执行深层语境语义审计。`);
    return;
  }

  console.log(`\x1b[31m⚠️ 命中 ${matches.length} 处疑似逻辑谬误特征：\x1b[0m\n`);
  matches.forEach(({ fallacy, hitKw, reason }) => {
    console.log(`\x1b[1m\x1b[33m[#${fallacy.id} ${fallacy.name}]\x1b[0m (${fallacy.englishName}) - 类别: \x1b[36m${fallacy.category}\x1b[0m`);
    console.log(`  触发特征: [${hitKw.join(', ')}]`);
    console.log(`  机制漏洞: ${reason}`);
    if (fallacy.deepDive && fallacy.deepDive.counterStrategy) {
      console.log(`  \x1b[32m破局反制: ${fallacy.deepDive.counterStrategy}\x1b[0m`);
    }
    console.log('');
  });
}

function startInteractive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(`
╔══════════════════════════════════════════════════════════════╗
║        🧠 逻辑谬误与诡辩交互式诊断终端 (Interactive Mode)     ║
║  输入任意句子进行检测；输入 :list 查看列表；输入 :exit 退出   ║
╚══════════════════════════════════════════════════════════════╝
`);

  function promptUser() {
    rl.question('\x1b[34m[输入论断/对话] > \x1b[0m', (input) => {
      const line = input.trim();
      if (!line) {
        promptUser();
        return;
      }
      if (line === ':exit' || line === 'exit' || line === 'quit') {
        rl.close();
        return;
      }
      if (line === ':list') {
        listAll();
        promptUser();
        return;
      }
      if (line.startsWith(':search ')) {
        searchFallacy(line.slice(8));
        promptUser();
        return;
      }

      detectText(line);
      promptUser();
    });
  }

  promptUser();
}

// 主入口参数解析
const args = process.argv.slice(2);
if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  showHelp();
} else if (args.includes('--list') || args.includes('-l')) {
  listAll();
} else if (args.includes('--interactive') || args.includes('-i')) {
  startInteractive();
} else if (args[0] === '--search' || args[0] === '-s') {
  searchFallacy(args.slice(1).join(' '));
} else if (args[0] === '--category' || args[0] === '-c') {
  const cat = categories.find(c => c.id === args[1]);
  if (cat) {
    console.log(`\n【${cat.name}】(${cat.englishName}) 谬误清单：\n`);
    items.filter(i => i.categoryId === cat.id).forEach(i => printFallacyDetail(i));
  } else {
    console.log('无效的类别 ID。可选: mind, emotion, deduction, content, causality, attack');
  }
} else {
  detectText(args.join(' '));
}
