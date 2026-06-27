# 朗曜 Lumora · 品牌落地页(部署仓)

> 本仓只承载落地页的部署产物。**源代码维护在主仓**:
> [github.com/xgyyx/Lumora](https://github.com/xgyyx/Lumora) · `apps/landing/`

---

## 在线访问

🌐 **https://xgyyx.github.io/lumora-landing/**

由 GitHub Pages 免费托管,push 到 `main` 分支自动重新部署。

---

## 本地预览

```bash
git clone https://github.com/xgyyx/lumora-landing.git
cd lumora-landing
open index.html       # macOS
start index.html      # Windows
xdg-open index.html   # Linux
```

无需任何构建工具,纯静态文件 + Tailwind CDN + Google Fonts。

---

## 关于本项目

- **名称**:朗曜 Lumora
- **定位**:面向中国兽医诊所的影像云平台
- **架构**:云 PACS(影像基础设施)+ 远程判读(专家服务)双主线
- **slogan**:朗曜映微 · 洞察入幽

---

## 更新流程

落地页源代码在主仓的 `apps/landing/`。要更新本部署仓:

1. 在主仓修改 `apps/landing/index.html` 等文件,合 PR 进 main
2. 把主仓 `apps/landing/` 的内容复制到本仓(覆盖 `index.html` / `assets/*`)
3. `git add . && git commit -m "..." && git push`
4. 1-2 分钟后 Pages 自动重新部署

(主仓 README `apps/landing/README.md` 包含完整开发与发送指引)

---

## License

© 2026 朗曜 Lumora · All rights reserved.
