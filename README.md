# 逻辑谬误与诡辩甄别 Skill

识别、解构并反驳文本中的 54 种常见逻辑谬误，覆盖 6 大认知维度，提供论证结构分析、置信度评估、追问与回应建议。

本仓库以 [`SKILL.md`](SKILL.md) 为入口，包含技能指令、知识库、提示词、案例和辅助脚本。安装后由支持 Agent Skills 的智能体读取使用，无需构建或部署服务。

## 从技能市场一键安装

使用 [Skills 技能市场](https://skills.sh)的安装工具，在终端执行：

```bash
npx skills add yaodwwy/fallacy-detector
```

按提示选择目标智能体和安装范围即可。该命令需要本机可用的 Node.js / npx，用于运行市场安装工具；仓库本身无需 `package.json` 或 `npm install`。安装方式参见 [Skills 官方 CLI 文档](https://skills.sh/docs/cli)。

## 使用

安装后，在智能体对话中提出请求：

> 使用 fallacy-detector 分析这段话的逻辑漏洞，并给出理性回应：“既然大家都闯红灯，凭什么抓我？”

技能会拆解主张、前提与隐含假设，结合知识库识别疑似谬误，解释判断依据和置信度，并给出追问、类比及回应建议。

## 技能资源

| 路径 | 用途 |
| --- | --- |
| [`SKILL.md`](SKILL.md) | 技能入口、审计流程与输出规范 |
| [`data/`](data/) | 54 种谬误的 JSON / CSV 数据与分类体系 |
| [`references/`](references/) | 速查手册与分类指南 |
| [`prompts/`](prompts/) | 检测、反驳、形式验证与输入模板 |
| [`examples/`](examples/) | 社交辩论、商业广告、企业管理案例及评测用例 |
| [`assets/svg-icons/`](assets/svg-icons/) | 54 个谬误图解 SVG |
| [`scripts/`](scripts/) | 可选的启发式检测、评测用例展示与资料导出工具 |

辅助脚本仅使用 Node.js 内置模块，按需运行，无需安装项目依赖。日常使用 Skill 不要求运行这些脚本。

## 许可证

[MIT](LICENSE) · adbyte (yaodwwy)
