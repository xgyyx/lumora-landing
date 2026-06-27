# 落地页资源约定

本目录存放品牌落地页的图片 / 字体 / 图标资源。**所有资源用相对路径引用**(`./assets/...`),保证 `file://` 本地双击打开依然工作。

## 命名规范

| 文件名 | 用途 | 尺寸 | 格式 | 大小上限 |
| :--- | :--- | :--- | :--- | :--- |
| `hero-bg.webp` | Hero 区背景图 | 1920×1080 | WebP 质量 80 | < 300 KB |
| `hero-bg.jpg`  | Hero 降级(老浏览器) | 1920×1080 | JPG 质量 85 | < 500 KB |
| `og-image.jpg` | 社交分享卡片 | 1200×630 | JPG 质量 85 | < 200 KB |
| `favicon.ico`  | 站点 favicon | 16/32/48 多尺寸 | ICO | < 50 KB |
| `favicon-512.png` | iOS / Android | 512×512 | PNG | < 80 KB |
| `wechat-qr.png` | 公众号二维码 | 256×256 | PNG | < 30 KB |

## 图像压缩建议

WebP 转换:
```bash
# macOS / Homebrew
brew install webp
cwebp -q 80 input.png -o hero-bg.webp
```

或在线工具:
- https://squoosh.app/(Google,无水印)
- https://tinypng.com/

JPG 压缩:
```bash
brew install jpegoptim
jpegoptim --max=85 --strip-all hero-bg.jpg
```

## Hero 图选型要点

主标题在 hero 左上区域,选图时注意:

- ✅ 上半部分较暗,文字对比度足
- ✅ 左侧 1/3 留白或最简元素
- ✅ 整体调性深(navy / 墨青为底)
- ✅ 暖金色光晕点缀
- ❌ 不要太亮 / 颜色饱和
- ❌ 不要有明显文字 / 水印
- ❌ 不要有可识别的医疗器械 / X 光片(AI 出图必拉胯)

## 路径引用

HTML 内统一用相对路径:
```html
<img src="./assets/hero-bg.webp" alt="..." />
```

CSS 内同样:
```css
background-image: url('./assets/hero-bg.webp');
```

**禁止**用根绝对路径(`/assets/...`)——会破坏本地 `file://` 打开。
