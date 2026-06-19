# 第 2 周：TypeScript + React 核心

## 本周目标

掌握 TypeScript 基础类型、React 组件、状态、事件、列表渲染、表单和 `localStorage`。这一周的重点是从“写页面”进入“写组件”。

## 本周交付物

**React 商品管理小工具**

功能要求：

- 商品列表
- 搜索
- 分类筛选
- 新增商品
- 删除商品
- 售罄状态
- 本地保存

## 本周检查标准

- 能创建 React 组件
- 能用 `props` 传递数据
- 能用 `useState` 管理状态
- 能处理表单输入和提交
- 能用 `useEffect` 同步 `localStorage`
- 能用 TypeScript 给业务数据建模

---

## Day 8：TypeScript 基础

学习教程：

- TypeScript Handbook：[The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- TypeScript Handbook：[Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

学习内容：

- `string`
- `number`
- `boolean`
- 数组类型
- 对象类型
- `type`
- `interface`
- 可选属性
- 联合类型

实战任务：

为用户、商品、订单定义类型：

```ts
type User = {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
}
```

当天产出：

- `src/types/user.ts`
- `src/types/product.ts`
- `src/types/order.ts`

## Day 9：React 组件和 JSX

学习教程：

- React：[Your First Component](https://react.dev/learn/your-first-component)
- React：[Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- React：[Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)

学习内容：

- 什么是组件
- JSX
- 组件文件
- `props`
- 组件拆分

实战任务：

把商品列表拆成组件：

```txt
ProductCard
ProductList
SearchBox
CategoryFilter
```

当天产出：

- 一个组件化的商品列表页面

## Day 10：useState 和事件

学习教程：

- React：[Responding to Events](https://react.dev/learn/responding-to-events)
- React：[State: A Component's Memory](https://react.dev/learn/state-a-components-memory)

学习内容：

- 状态是什么
- `useState`
- 点击事件
- 输入框事件
- 状态更新后页面自动刷新

实战任务：

- 做一个计数器
- 做一个搜索框
- 输入关键词实时筛选商品

当天产出：

- 商品列表支持搜索

## Day 11：列表渲染和条件渲染

学习教程：

- React：[Conditional Rendering](https://react.dev/learn/conditional-rendering)
- React：[Rendering Lists](https://react.dev/learn/rendering-lists)

学习内容：

- `map` 渲染列表
- `key`
- `&&`
- 三元表达式
- 空状态展示

实战任务：

- 搜索无结果时展示“暂无数据”
- 商品售罄时展示特殊状态
- 商品价格高亮

当天产出：

- 商品列表具备常见业务展示状态

## Day 12：表单处理

学习教程：

- React：[Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state)

学习内容：

- 受控组件
- `input`
- `select`
- `textarea`
- 表单提交
- 简单校验

实战任务：

做一个新增商品表单：

- 商品名
- 价格
- 分类
- 库存
- 提交后加入列表
- 必填校验

当天产出：

- 商品列表支持新增商品

## Day 13：useEffect 和 localStorage

学习教程：

- React：[Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)

学习内容：

- `useEffect` 基础
- 组件加载时执行逻辑
- 状态变化时保存数据
- `localStorage`

实战任务：

- 页面刷新后商品不丢失
- 新增商品自动保存
- 删除商品自动保存

当天产出：

- 商品管理数据支持本地保存

## Day 14：周项目：商品管理小工具

学习教程：

- 复习 React 官方文档中组件、状态、列表、表单、Effect 章节

项目功能：

- 商品列表
- 搜索
- 分类筛选
- 新增商品
- 删除商品
- 售罄状态
- 本地保存

当天产出：

- 第一个 React + TypeScript 小项目

