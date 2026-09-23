# 🧠 逻辑谬误与诡辩甄别 Skill (Logical Fallacy & Sophistry Identification Skill)

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Fallacies: 54 Types](https://img.shields.io/badge/Fallacies-54%20Types-indigo.svg)](references/cheatsheet.md)
[![Categories: 6 Branches](https://img.shields.io/badge/Categories-6%20Cognitive%20Branches-emerald.svg)](references/taxonomy_guide.md)
[![Agent Skill: Ready](https://img.shields.io/badge/Agent%20Skill-Antigravity%20%7C%20Claude%20%7C%20Cursor-purple.svg)](SKILL.md)
[![Live Demo](https://img.shields.io/badge/Interactive%20Web-logical--types.adbyte.cn-orange.svg)](https://logical-types.adbyte.cn)

**54 种常见逻辑谬误与诡辩论证类型图解全集 · 面向人类批判性思维与 AI Agent 逻辑审计的开源武器库**

[在线图解词典](https://logical-types.adbyte.cn) · [速查手册 (Cheatsheet)](references/cheatsheet.md) · [Agent Skill 规范](SKILL.md) · [提示词套件](prompts/system_prompt.md) · [CLI 工具](scripts/detect.js)

</div>

---

## 📖 项目简介 (Overview)

在自媒体算法推荐、热搜公关、网络论战与虚假营销泛滥的信息时代，**逻辑推论断裂、以偏概全、偷换概念与人身攻击**已成为混淆视听的常见套路。

**逻辑谬误与诡辩甄别 Skill** 是一个基于经典非形式逻辑与 **Information is Beautiful** 知识图谱体系打造的开源批判性思维工程。它将人类常见的 **54 种逻辑谬误** 归纳提炼为 6 大认知维度，提供完整的结构化数据集（JSON/CSV）、矢量 SVG 视觉图解、命令行检测工具，并以现代 **Agent Skill (`SKILL.md`)** 标准进行工程封装，赋予大语言模型（LLM）精准洞察文本漏洞与外科手术式破局反制的能力。

> 🌐 **交互式演示站点**：[https://logical-types.adbyte.cn](https://logical-types.adbyte.cn)  
> 无论是桌面端网格卡片还是手机端速查表，均支持双语搜索、分类筛选与矢量图解全屏沉浸浏览。

---

## 🌟 核心特性 (Key Features)

- 🧠 **全谱系认知分类 (6 大维度 / 54 种谬误)**：涵盖“诉诸思想、诉诸情感、错误推论、操纵内容、因果错乱、攻击谬误”，从形式逻辑硬伤到修辞心理操弄一网打尽。
- 🤖 **原生 AI Agent Skill 赋能**：内置标准 [`SKILL.md`](SKILL.md)，无缝对接 **Google Antigravity、Claude Code、Cursor、OpenAI ChatGPT、Dify、AutoGen** 等智能体框架，开箱即用。
- 🛡️ **外科手术式破局反制**：每一项谬误均配备**核心漏洞机制阐释**、**苏格拉底式追问**、**归谬类比**与**高情商体面回应话术**。
- 📦 **多形态数据资产**：
  - `data/fallacies.json`：全量 54 种谬误的结构化数据（含定义、中英名称、深层套路、反驳策略、矢量图路径）。
  - `data/fallacies.csv`：表格化版本，适合数据分析、教学教研与机器学习标注。
  - `assets/svg-icons/`：全套 54 组轻量级纯矢量 SVG 图标资产。
- 💻 **极简命令行 CLI 工具**：无需安装庞大依赖，单文件 Node.js 脚本支持语句启发式自查、关键词搜索与交互式诊断会话。
- 🧪 **评测基准用例集**：内置 12 个真实语境评测基准用例（`examples/test_cases.json`），支持 LLM 逻辑审计能力基准测试。

---

## 🧭 6 大认知维度全景图

```
                           ┌─────────────────────────┐
                           │   54 种逻辑谬误与诡辩   │
                           └────────────┬────────────┘
                                        │
       ┌──────────────┬─────────────────┼─────────────────┬──────────────┐
       │              │                 │                 │              │
┌──────┴──────┐┌──────┴──────┐    ┌─────┴─────┐    ┌──────┴──────┐┌──────┴──────┐
│  诉诸思想   ││  诉诸情感   │    │ 错误推论  │    │  操纵内容   ││  因果错乱   │
│ Mind (10)   ││Emotion (8)  │    │Deduct(13) │    │Content (10) ││Causality (7)│
├─────────────┤├─────────────┤    ├───────────┤    ├─────────────┤├─────────────┤
│#01 匿名权威 ││#11 掩耳盗铃 │    │#19肯定后件│    │#32 虚假中立 ││#42 事后归因 │
│#02 可疑权威 ││#12 诉诸恐惧 │    │#20循环论证│    │#33 稻草人   ││#43 倒因为果 │
│#03 诉诸常规 ││#13 诉诸谄媚 │    │#21聚合谬误│    │#34 隐瞒真相 ││#44 单一归因 │
│#04 诉诸无知 ││#14 诉诸自然 │    │#22否定前件│    │#35 既定观点 ││#45 德州神枪 │
│#05 诉诸怀疑 ││#15 诉诸同情 │    │#23否定相对│    │#36 偏颇定义 ││#46 相关当因 │
│#06 身价逻辑 ││#16 诉诸荒谬 │    │#24模棱两可│    │#37 无足轻重 ││#47 沉没成本 │
│#07 求新逻辑 ││#17 诉诸仇恨 │    │#25虚假两难│    │#38 烟雾弹   ││#48 无关因果 │
│#08 诉诸主流 ││#18 愿望思维 │    │#26赌徒谬误│    │#39 滑坡谬误 │└─────────────┘
│#09 诉诸概率 │└─────────────┘    │#27基因谬误│    │#40 绝对无误 │
│#10 诉诸传统 │                   │#28盲目联想│    │#41 诉诸动机 │
└─────────────┘                   │#29盲目折中│    └─────────────┘
                                  │#30转移举证│
                                  │#31达标即撤│
                                  └───────────┘
                                        │
                                  ┌─────┴─────┐
                                  │ 攻击谬误  │
                                  │Attack (6) │
                                  ├───────────┤
                                  │#49人身攻击│
                                  │#50动机论  │
                                  │#51你也一样│
                                  │#52井中投毒│
                                  │#53连坐攻击│
                                  │#54诉诸音量│
                                  └───────────┘
```

---

## 🚀 快速上手 (Quick Start)

### 方式 1：作为 AI Agent Skill 使用 (推荐)

本项目完全遵循主流 Agent Customization 协议，可直接引入作为智能体的专项技能。

#### 1. Google Antigravity / Claude Code
将本项目文件夹或 [`SKILL.md`](SKILL.md) 放入你的 agent skills 目录中（例如 `~/.gemini/antigravity-cli/skills/fallacy-detector` 或项目根目录 `.agents/skills/`）：
```bash
# 拷贝到全局或工作区技能库
cp -r fallacy-detector/ ~/.gemini/antigravity-cli/builtin/skills/fallacy-detector/
```
在与 Agent 对话时直接调用：
> **你**：“请帮我审计这段网络争论中的逻辑漏洞：‘既然大家都偷税漏税，税务局单单查我就是选择性执法！而且那个举报者自己平时开销也大手大脚，他算什么好人！’”  
> **Agent**：自动激活 `fallacy-detector` 技能，输出包含 `#03 诉诸常规` 与 `#51 你也一样` 的多维解构与反驳报告。

#### 2. Cursor / Windsurf / Copilot Rules
将 [`prompts/system_prompt.md`](prompts/system_prompt.md) 的内容复制到 `.cursorrules` 或 `.github/copilot-instructions.md` 中，随时审查文档与设计评审中的推论漏洞。

#### 3. OpenAI Custom GPT / Dify
在知识库中上传 `data/fallacies.json`，并将 [`prompts/system_prompt.md`](prompts/system_prompt.md) 作为 Instructions。

---

### 方式 2：使用命令行 CLI 工具 (CLI Tool)

无需配置环境，拥有 Node.js 即可直接运行：

```bash
# 1. 直接检测待审语句
node scripts/detect.js "既然大家都闯红灯，凭什么抓我"

# 2. 关键词检索谬误详情与反驳策略
node scripts/detect.js --search "稻草人"
node scripts/detect.js --search "权威"

# 3. 按认知维度浏览
node scripts/detect.js --category causality

# 4. 查看全部 54 种逻辑谬误目录列表
node scripts/detect.js --list

# 5. 启动交互式诊断终端 (Interactive REPL)
node scripts/detect.js --interactive
```

CLI 运行效果示例：
```text
📋 待诊断文本：
   "既然大家都闯红灯，凭什么抓我"

⚠️ 命中 1 处疑似逻辑谬误特征：

[#03 诉诸常规] (Appeal to Common Practice) - 类别: 诉诸思想
  触发特征: [大家都]
  机制漏洞: 诉诸常规：将现实普遍性直接等同于道德/法规合法性。
  破局反制: “普遍性绝不等于正当性。全班同学都抄作业并不代表抄作业是合规的；大家都在闯红灯，闯红灯依然违法。”
```

---

## 📚 54 种常见逻辑谬误速查目录 (Complete Catalog)

完整带详细案例与破局策略的手册请参阅 👉 [完整速查手册 (references/cheatsheet.md)](references/cheatsheet.md)

<details>
<summary><b>点击展开 54 种逻辑谬误速览表</b></summary>

| 编号 | 谬误名称 | 英文名称 (Latin/English) | 认知类别 | 一句话核心特征 |
| :---: | :--- | :--- | :---: | :--- |
| **#01** | **诉诸匿名权威** | *Appeal to Anonymous Authority* | 诉诸思想 | 引用模糊不详的“专家指出/研究表明”替代可公开核验文献。 |
| **#02** | **诉诸(可疑)权威** | *Appeal to Questionable Authority* | 诉诸思想 | 引用缺乏执业资质、非对口领域或无公信力的权威跨界背书。 |
| **#03** | **诉诸常规** | *Appeal to Common Practice* | 诉诸思想 | 认为因为大家都在做（潜规则），所以就是合理的、正确的。 |
| **#04** | **诉诸无知** | *Appeal to Ignorance* | 诉诸思想 | 某一观点是正确的，仅仅因为它还没被证伪（谁主张谁举证）。 |
| **#05** | **诉诸怀疑** | *Appeal to Incredulity* | 诉诸思想 | 因为超乎个人直觉或难以想象，就草率断言绝不可能发生。 |
| **#06** | **身价逻辑** | *Appeal to Wealth* | 诉诸思想 | 认为某样东西价格更高、或某人财富更多，其断言就更接近真理。 |
| **#07** | **求新逻辑** | *Appeal to Novelty* | 诉诸思想 | 认为时间上是最新的，所以性能与功能必然更成熟优越。 |
| **#08** | **诉诸主流** | *Appeal to Popular Belief* | 诉诸思想 | 认为大多数人都盲从相信的传闻就一定是事实真相。 |
| **#09** | **诉诸概率** | *Appeal to Probability* | 诉诸思想 | 将数学意义上的“存在可能性”直接断言为现实中“必然发生”。 |
| **#10** | **诉诸传统** | *Appeal to Tradition* | 诉诸思想 | 认为历史上延续时间长久，便天然拥有当代的道德合法性。 |
| **#11** | **掩耳盗铃** | *Appeal to Consequences* | 诉诸情感 | 因无法承受结论所带来的心理打击而断然拒绝承认客观事实。 |
| **#12** | **诉诸恐惧** | *Appeal to Fear* | 诉诸情感 | 制造虚构的生存危机与灾难画面，迫使受众非理性妥协。 |
| **#13** | **诉诸谄媚** | *Appeal to Flattery* | 诉诸情感 | 用糖衣炮弹和赞美吹捧瓦解对方的批判审视防线。 |
| **#14** | **诉诸自然** | *Appeal to Nature* | 诉诸情感 | 盲目将“纯天然、原生状态”道德化为至善，贬斥现代科学工艺。 |
| **#15** | **诉诸同情** | *Appeal to Pity* | 诉诸情感 | 唤起过度的怜悯心与悲情姿态，以此跨越规章制度与司法底线。 |
| **#16** | **诉诸荒谬** | *Appeal to Ridicule* | 诉诸情感 | 戏剧化夸大对手的观点以引人发笑，借嘲弄代替严肃论据交锋。 |
| **#17** | **诉诸仇恨** | *Appeal to Spite* | 诉诸情感 | 出于对特定群体的偏见仇恨，全面抹杀其客观正面举措。 |
| **#18** | **愿望思维** | *Wishful Thinking* | 诉诸情感 | 将美好的主观意愿直接当成客观现实，忽略实施路径的阻碍。 |
| **#19** | **肯定后件** | *Affirming the Consequent* | 错误推论 | 形式逻辑错误：若P则Q；今有Q，故必有P（忽略其他触发因）。 |
| **#20** | **循环论证** | *Circular Logic* | 错误推论 | 把待论证的结论本身重新包装，充当推导的前提论据。 |
| **#21** | **聚合谬误** | *Cum Hoc Ergo Propter Hoc* | 错误推论 | 将两个仅在统计上共现的伴生事件误断为存在动力学因果。 |
| **#22** | **否定前件** | *Denying the Antecedent* | 错误推论 | 形式逻辑错误：若P则Q；今无P，故必无Q。 |
| **#23** | **否定相对** | *Denying the Correlative* | 错误推论 | 在非此即彼的严格二元逻辑下，强行引入模糊的第三种伪选择。 |
| **#24** | **模棱两可** | *Equivocation* | 错误推论 | 在论述过程中偷换某个多义词的指涉范畴与具体语义。 |
| **#25** | **虚假两难** | *False Dilemma* | 错误推论 | 非黑即白，故意抹杀连续谱系中的多种中间态过渡方案。 |
| **#26** | **赌徒谬误** | *Gambler's Fallacy* | 错误推论 | 将完全独立的随机概率事件，误以为具有内部自我平衡记忆。 |
| **#27** | **基因谬误** | *Genetic Fallacy* | 错误推论 | 根据某件事物的起源历史背景，草率否定其当代功用价值。 |
| **#28** | **盲目联想** | *Guilt by Association* | 错误推论 | 仅因事物在某一非本质特征上有重叠，便断言其性质全盘一致。 |
| **#29** | **盲目折中** | *Middle Ground* | 错误推论 | 不分青红皂白，无原则地认为两极之间的中立点就是真理。 |
| **#30** | **转移举证** | *Burden of Proof* | 错误推论 | 提出非凡主张却拒绝举证，反而倒打一耙要求质疑者证明其不存在。 |
| **#31** | **达标即撤** | *Moving the Goalposts* | 错误推论 | 当对手达成原本约定的证据标准后，临阵任意抬高判定门槛。 |
| **#32** | **虚假中立** | *False Balance* | 操纵内容 | 在无可争议的科学实证事实与边缘迷信谎言之间给予等量话语权。 |
| **#33** | **稻草人** | *Straw Man* | 操纵内容 | 蓄意曲解、丑化、极端化对方的观点，攻击自己立起的假靶子。 |
| **#34** | **隐瞒真相** | *Cherry Picking* | 操纵内容 | 报喜不报忧，筛选性呈现单一偏向样本而刻意隐匿反面全景数据。 |
| **#35** | **既定观点** | *Loaded Question* | 操纵内容 | 在提问中预设带有负面定性的未经证实前提，让人无论怎么答都中招。 |
| **#36** | **偏颇定义** | *Definitional Retreat* | 操纵内容 | 论断遭遇反驳后，临时修正或缩减核心词汇的定义以回避认错。 |
| **#37** | **无足轻重** | *Trivial Objections* | 操纵内容 | 揪住细枝末节的错别字或语病不放，以此回避实质核心争议。 |
| **#38** | **烟雾弹** | *Red Herring* | 操纵内容 | 抛出带有强烈情绪色彩但与主议题毫不相关的无关热点带偏焦点。 |
| **#39** | **滑坡谬误** | *Slippery Slope* | 操纵内容 | 在毫无必然证据的前提下，将第一步极端外推至毁灭性的连锁灾难。 |
| **#40** | **绝对无误** | *No True Scotsman* | 操纵内容 | 遭遇反例时，通过临时添加纯洁性排他修饰词来维护原论断绝对性。 |
| **#41** | **诉诸动机** | *Bulverism* | 操纵内容 | 直接假设对方是错的，进而把讨论重心转移到分析对方为何犯错。 |
| **#42** | **事后归因** | *Post Hoc Ergo Propter Hoc* | 因果错乱 | 仅仅因为事件 B 发生在 A 之后，就认定 A 是导致 B 的原因。 |
| **#43** | **倒因为果** | *Reversing Causality* | 因果错乱 | 把事件发展产生的结果，误当成了驱动事件发生的源头动力。 |
| **#44** | **单一归因** | *Causal Oversimplification* | 因果错乱 | 将复杂巨系统协同涌现的结果，轻率归咎于单一替罪羊因素。 |
| **#45** | **德州神枪手** | *Texas Sharpshooter* | 因果错乱 | 先射击后画靶心，在完全随机分布的数据簇中强行寻找规律。 |
| **#46** | **错把相关当因果** | *Correlation Proves Causation* | 因果错乱 | 将缺乏动力学实验验证的统计相关性等同于实质因果链条。 |
| **#47** | **沉没成本** | *Sunk Cost Fallacy* | 因果错乱 | 将无法挽回的历史投入当作决策依据，盲目追加投资陷入泥潭。 |
| **#48** | **无关因果** | *Non Sequitur* | 因果错乱 | 提出的论据与最后得出的结论之间不存在任何形式上的推导逻辑。 |
| **#49** | **人身攻击** | *Ad Hominem (Abusive)* | 攻击谬误 | 针对发言者的智商、长相、道德品质发起人格侮辱以贬低论点。 |
| **#50** | **动机论攻击** | *Ad Hominem (Circumstantial)* | 攻击谬误 | 攻击发言者的利益身份与屁股立场，断定其结论必然不可信。 |
| **#51** | **你也一样** | *Tu Quoque (Whataboutism)* | 攻击谬误 | 翻出对手过去也犯过类似错误的旧账，以证明自己当前的过错合法。 |
| **#52** | **井中投毒** | *Poisoning the Well* | 攻击谬误 | 在对手正式发言之前预先散布负面污名，破坏全场对其的可信度。 |
| **#53** | **连坐攻击** | *Guilt by Association (Person)* | 攻击谬误 | 仅因对手曾与某争议人物有过接触合影，就将其定为同流合污。 |
| **#54** | **诉诸音量** | *Argumentum ad Nauseam* | 攻击谬误 | 企图通过大嗓门、反复洗脑式复读或声嘶力竭压制对手的理性发言。 |

</details>

---

## 📂 项目工程结构 (Repository Structure)

```text
fallacy-detector/
├── .gitignore                      # Git 忽略配置
├── LICENSE                         # MIT 开源许可证
├── README.md                       # 项目主文档与索引
├── SKILL.md                        # Agent Skill 标准规范定义 (核心技能说明书)
│
├── data/                           # 核心数据集资产
│   ├── fallacies.json              # 54 种逻辑谬误全量 JSON 数据
│   ├── fallacies.csv               # 扁平化 CSV 数据集 (适合 Excel / Pandas)
│   └── taxonomy.json               # 6 大认知维度元数据定义
│
├── prompts/                        # LLM 提示词套件
│   ├── system_prompt.md            # 通用逻辑审计官系统提示词
│   ├── fallacy_detection.md        # 文本逻辑漏洞专项甄别提示词
│   ├── debate_rebuttal.md          # 外科手术式辩论反制与破局提示词
│   └── formal_verification.md      # 形式逻辑严谨性验证提示词
│
├── examples/                       # 真实场景实战解剖案例
│   ├── 01_social_media_debate.md   # 案例 1：网络社交媒体热点争论解剖
│   ├── 02_commercial_advertisement.md# 案例 2：商业广告与营销文案解剖
│   ├── 03_corporate_management.md  # 案例 3：企业管理与决策评审会议解剖
│   └── test_cases.json             # 12 个基准测试用例集
│
├── references/                     # 深入研究与参考资料
│   ├── cheatsheet.md               # 54 种逻辑谬误速查表 (完整版)
│   └── taxonomy_guide.md           # 6 大分类底层心理机制与形式逻辑指南
│
├── scripts/                        # 实用工具脚本
│   ├── detect.js                   # Node.js 命令行检测与交互式诊断工具
│   ├── evaluate.js                 # 评测用例回归运行脚本
│   └── export_cheatsheet.js        # 自动化文档与 CSV 衍生构建工具
│
└── assets/                         # 媒体与图解资产
    └── svg-icons/                  # 54 个精心绘制的轻量级矢量 SVG 图标
```

---

## 🛠️ 数据模式规范 (Data Schema)

在 `data/fallacies.json` 中，每一个逻辑谬误对象包含以下字段：

```typescript
interface FallacyItem {
  id: string;               // 唯一数字编号，例如 "01", "33", "51"
  name: string;             // 中文标准化命名，例如 "稻草人"
  englishName: string;      // 英文学名/拉丁文名，例如 "Straw Man"
  category: string;         // 所属中文分类，例如 "操纵内容"
  categoryId: string;       // 分类英文唯一键: mind | emotion | deduction | content | causality | attack
  color: string;            // 专属十六进制强调色
  definition: string;       // 严谨学术定义与核心错误逻辑
  example: string;          // 经典直观的生活/对话案例
  deepDive: {
    manifestation: string;  // 现代网络公关/日常生活中的常见话术变体套路
    counterStrategy: string;// 针对该谬误一针见血的反驳、破局或苏格拉底式追问
    relatedIds?: string[];  // 逻辑机制上具有交集或容易混淆的关联谬误 ID
  };
  svg?: string;             // 对应 assets/svg-icons/ 下的矢量图相对路径
}
```

---

## 🤝 参与贡献 (Contributing)

我们热忱欢迎社区开发者、辩论爱好者、逻辑学学者共同完善本库：
1. **新增实战用例**：在 `examples/test_cases.json` 中提交现代社交热点、职场或商业中的新型辩术案例。
2. **优化反驳话术**：在 `data/fallacies.json` 中丰富更具智慧、情商与杀伤力的破局对策。
3. **适配更多 Agent 平台**：为 LangChain、Semantic Kernel、CrewAI 等提供定制集成示例。

提交 PR 流程：
```bash
git checkout -b feature/new-case-or-rebuttal
# 修改 data/fallacies.json 后运行构建
node scripts/export_cheatsheet.js
git commit -m "feat: add case study and enhance rebuttal strategy"
git push origin feature/new-case-or-rebuttal
```

---

## 📄 开源许可证 (License)

本项目遵循 [MIT License](LICENSE) 开源许可协议。您可以自由引用、修改、嵌入商用产品或作为学术科研基准，唯需保留原作者版权署名。

---

<div align="center">

**由 [adbyte](https://www.adbyte.cn) 精心打磨呈现 · 赋予每个人与 AI 理性思辨的力量**  
访问主站门户：[adbyte.cn](https://adbyte.cn) · 在线词典：[logical-types.adbyte.cn](https://logical-types.adbyte.cn)

</div>
