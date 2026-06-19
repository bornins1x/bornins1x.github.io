# 第 1 周：前端基础入门

## 本周目标

理解网页由什么组成，会写简单页面、样式和基础交互。你不需要在这一周掌握 React，重点是先知道浏览器里跑的页面是怎么来的。

## 本周交付物

**静态商品列表页**

要求：

- 有顶部导航栏
- 有商品卡片列表
- 有分类筛选按钮
- 有商品价格展示
- 有简单搜索框
- 使用 HTML + CSS + JavaScript/TypeScript 基础完成

## 本周检查标准

- 能写一个静态页面
- 能用 CSS 做基础布局
- 能写简单 JS 函数
- 能理解数组和对象处理
- 能用 `map`、`filter`、`find` 处理列表数据

---

## Day 1：认识前端工程

学习教程：

- MDN：[开始学习 Web](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Getting_started)
- Vite：[Getting Started](https://vite.dev/guide/)

学习内容：

- HTML、CSS、JavaScript 分别负责什么
- 浏览器、DOM、事件、网络请求的基本概念
- Node.js、npm、Vite 的作用
- 如何创建 React + TypeScript 项目

实战任务：

```bash
npm create vite@latest frontend-demo -- --template react-ts
cd frontend-demo
npm install
npm run dev
```

当天产出：

- 成功启动第一个 React + TypeScript 项目
- 浏览器能看到 Vite 默认页面

## Day 2：HTML 基础

学习教程：

- MDN：[HTML 基础](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Structuring_content)

学习内容：

- `div`
- `span`
- `h1` - `h6`
- `p`
- `a`
- `img`
- `button`
- `input`
- `form`
- `ul` / `li`
- `table`

实战任务：

- 做一个个人资料页
- 包含头像、姓名、简介、技能列表、联系方式、简单表单

当天产出：

- 一个只有 HTML 结构的个人资料页

## Day 3：CSS 基础

学习教程：

- MDN：[CSS 基础](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics)

学习内容：

- CSS 选择器
- 颜色
- 字体
- `margin`
- `padding`
- `border`
- 宽高
- 盒模型

实战任务：

- 给 Day 2 的个人资料页添加样式
- 页面居中
- 添加卡片边框
- 设置按钮样式
- 设置输入框样式

当天产出：

- 一个有基础视觉效果的个人资料页

## Day 4：CSS 布局 Flex

学习教程：

- MDN：[CSS 布局](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout)
- MDN：[Flexbox](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Flexbox)

学习内容：

- `display: flex`
- 主轴和交叉轴
- `justify-content`
- `align-items`
- `gap`
- 换行

实战任务：

- 做一个导航栏
- 做一个三列卡片布局
- 卡片内有标题、描述、按钮

当天产出：

- 一个“导航栏 + 三列卡片”的静态页面

## Day 5：JavaScript 基础 1

学习教程：

- MDN：[JavaScript 基础](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Scripting)

学习内容：

- `let` / `const`
- 字符串、数字、布尔
- 数组、对象
- `if`
- `for`
- 函数

实战任务：

写几个函数：

```ts
// 计算订单总价
// 根据分数返回等级
// 从用户数组中过滤成年人
// 根据用户 id 查找用户
```

当天产出：

- 一个 `practice.ts` 文件，包含 5-8 个基础函数

## Day 6：JavaScript 基础 2

学习教程：

- MDN：[JavaScript 数组](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Scripting/Arrays)

学习内容：

- 箭头函数
- 解构赋值
- 模板字符串
- `map`
- `filter`
- `find`
- `some`
- `every`
- `reduce`

实战任务：

给定订单数组，完成：

- 渲染订单列表
- 计算总金额
- 筛选已支付订单
- 找出金额最高的订单

当天产出：

- 熟悉 React 里最常用的数组处理方式

## Day 7：周项目：静态商品列表页

学习教程：

- 复习 MDN HTML、CSS、JavaScript 已学内容

实战任务：

- 商品卡片列表
- 分类筛选按钮
- 商品价格展示
- 简单搜索框
- 使用 HTML + CSS + JS/TS 基础完成

当天产出：

- 一个静态商品列表页

