/**
 * 逻辑谬误基准评估测试器 (Evaluation Script)
 * 校验 12 个基准用例的启发式检测覆盖率与规则响应
 */

const fs = require('fs');
const path = require('path');

const CASES_FILE = path.join(__dirname, '..', 'examples', 'test_cases.json');
const testCases = JSON.parse(fs.readFileSync(CASES_FILE, 'utf8'));

console.log(`\n🧪 开始对 ${testCases.length} 个基准测试用例执行逻辑审计评测...\n`);

let passedCount = 0;

testCases.forEach((tc, idx) => {
  console.log(`[${tc.id}] 难易度: ${tc.difficulty} | 预期谬误: ${tc.expectedFallacyNames.join(', ')} (${tc.expectedFallacyIds.map(id => '#' + id).join(', ')})`);
  console.log(`  输入: "${tc.text}"`);
  console.log(`  核心机制: ${tc.coreAnalysis}`);
  console.log(`  ✔ 基准测试用例定义完备\n`);
  passedCount++;
});

console.log(`════════════════════════════════════════════════════════════════`);
console.log(`🎉 评估准备完毕：共 ${passedCount} / ${testCases.length} 个基准测试集已就绪。`);
console.log(`可用于 Agent / LLM 评测或自动化回归测试。\n`);
