# 第 4 周：全栈业务项目雏形

## 本周目标

完成一个可展示的 React + TypeScript + Java 后端联调项目。重点是登录、token、请求拦截器、路由守卫、后台 Layout、任务 CRUD 和 README。

## 本周交付物

**任务管理系统雏形**

功能要求：

- 登录页
- token 保存
- Axios 请求拦截器
- 401 统一处理
- 路由守卫
- 后台 Layout
- 任务列表
- 新建任务
- 编辑任务
- 删除任务
- 任务状态切换
- README 项目说明

## 本周检查标准

- 能做登录
- 能做路由守卫
- 能封装请求拦截器
- 能完成任务管理 CRUD
- 能写 README 并讲清楚项目
- 能和 Java 后端接口联调

---

## Day 22：项目初始化和目录设计

学习教程：

- Vite：[Scaffolding Your First Vite Project](https://vite.dev/guide/#scaffolding-your-first-vite-project)
- React：[Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components)

学习内容：

- 项目目录组织
- 页面、组件、API、类型、工具函数分层

推荐目录：

```txt
src/
  api/
  components/
  layouts/
  pages/
  router/
  stores/
  types/
  utils/
```

实战任务：

- 初始化 `task-admin` 项目
- 创建基础目录
- 创建 `/login`、`/tasks`、`/tasks/:id` 页面文件

当天产出：

- 任务管理系统项目骨架

## Day 23：登录页

学习教程：

- React：[Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state)
- Ant Design：[Form](https://ant.design/components/form-cn)

学习内容：

- 登录表单
- 表单校验
- 保存 token
- 登录成功跳转

实战任务：

- 写 Login 页面
- 输入用户名密码
- 调登录接口
- token 存入 `localStorage`
- 登录成功跳转 `/tasks`

当天产出：

- 可用的登录页

## Day 24：Axios 拦截器

学习教程：

- Axios：[Interceptors](https://axios-http.com/docs/interceptors)

学习内容：

- 请求拦截器
- 响应拦截器
- 自动携带 token
- 统一处理 401

实战任务：

- 创建 `src/utils/request.ts`
- 请求自动加 `Authorization`
- 401 时清除 token 并跳回登录页

当天产出：

- 统一请求工具

## Day 25：路由守卫和 Layout

学习教程：

- React Router：继续学习路由配置和导航
- Ant Design：[Layout](https://ant.design/components/layout-cn)

学习内容：

- 前端权限判断
- 未登录不能访问业务页
- 后台 Layout 布局

实战任务：

- 实现 `ProtectedRoute`
- 未登录访问 `/tasks` 自动跳 `/login`
- 登录后显示后台 Layout

当天产出：

- 基础鉴权路由
- 基础后台布局

## Day 26：任务列表

学习教程：

- TanStack Query：[Queries](https://tanstack.com/query/latest/docs/framework/react/guides/queries)
- Ant Design：[Table](https://ant.design/components/table-cn)

学习内容：

- 查询任务列表
- 表格展示
- 搜索和筛选

任务类型：

```ts
type Task = {
  id: number
  title: string
  description?: string
  status: 'todo' | 'doing' | 'done'
  priority: 'low' | 'medium' | 'high'
  createdAt: string
}
```

实战任务：

- 获取任务列表
- 表格展示任务
- 状态筛选
- 关键词搜索
- 空状态
- loading 状态

当天产出：

- 可用的任务列表页

## Day 27：新建和编辑任务

学习教程：

- TanStack Query：[Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations)
- Ant Design：[Modal](https://ant.design/components/modal-cn)
- Ant Design：[Form](https://ant.design/components/form-cn)

学习内容：

- 新增数据
- 编辑数据
- 表单校验
- 提交中状态
- 成功后刷新列表

实战任务：

- 新建任务弹窗
- 编辑任务弹窗
- 表单校验
- 保存后刷新列表
- 提交中禁用按钮

当天产出：

- 任务支持新增和编辑

## Day 28：删除和状态流转

学习教程：

- Ant Design：[Popconfirm](https://ant.design/components/popconfirm-cn)
- Ant Design：[Message](https://ant.design/components/message-cn)

学习内容：

- 删除确认
- 状态修改
- 成功提示
- 失败提示
- 统一错误展示

实战任务：

- 删除任务
- 修改任务状态
- 成功提示
- 失败提示
- API 错误统一展示

当天产出：

- 任务管理核心 CRUD 完成

## Day 29：体验打磨和代码整理

学习教程：

- React：[Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

学习内容：

- 抽取通用组件
- 抽取自定义 Hook
- 清理类型定义
- 统一错误提示
- README 写法

实战任务：

- 抽取任务表单组件
- 补 404 页面
- 补 README
- 清理无用代码

README 至少包含：

- 项目介绍
- 技术栈
- 如何启动
- 功能列表
- 接口说明
- 学习收获

当天产出：

- 一个结构更清晰的任务管理系统

## Day 30：复盘和面试表达

学习教程：

- 复习 React、TypeScript、React Router、TanStack Query、Ant Design 中实际用到的章节

复盘问题：

1. React 组件如何拆分？
2. 为什么使用 TypeScript？
3. 前端如何调用后端接口？
4. 登录 token 如何保存和携带？
5. 路由守卫怎么实现？
6. loading / error / empty 状态怎么处理？
7. 表单校验怎么做？
8. TanStack Query 解决了什么问题？
9. Axios 拦截器做了什么？
10. 前后端联调遇到了什么问题？

当天产出：

- 一份项目 README
- 一份 30 天学习总结
- 一套能在面试里讲清楚的前端知识框架

