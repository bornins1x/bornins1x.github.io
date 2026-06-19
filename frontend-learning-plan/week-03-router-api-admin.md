# 第 3 周：真实前端开发能力

## 本周目标

掌握真实业务前端常用能力：路由、接口请求、API 分层、请求状态管理、UI 组件库和 CRUD 页面。你会开始接近公司里常见的中后台需求。

## 本周交付物

**用户管理后台**

功能要求：

- 用户列表
- 新增用户
- 编辑用户
- 删除用户
- 搜索
- 分页
- loading / error / empty 状态
- Ant Design UI
- API 分层

## 本周检查标准

- 能写路由页面
- 能请求后端接口
- 能封装 API 文件
- 能用 TanStack Query 管理请求状态
- 能用 Ant Design 做表格、表单、弹窗
- 能完成一个 CRUD 页面

---

## Day 15：React Router

学习教程：

- React Router：[Installation](https://reactrouter.com/start/declarative/installation)
- React Router：[Routing](https://reactrouter.com/start/declarative/routing)

学习内容：

- 单页应用 SPA
- 路由
- 页面组件
- `Link`
- `useNavigate`
- 动态路由参数

实战任务：

给商品管理增加页面：

```txt
/products
/products/:id
/products/create
```

当天产出：

- 商品列表页
- 商品详情页
- 新增商品页

## Day 16：HTTP 请求基础

学习教程：

- MDN：[Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
- MDN：[使用 Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

学习内容：

- REST API
- `fetch`
- `GET`
- `POST`
- `PUT`
- `DELETE`
- JSON

实战任务：

- 调用一个 Mock API 或自己写 Java 后端接口
- 获取用户列表
- 新增用户
- 删除用户

当天产出：

- 能在 React 页面里请求后端数据

## Day 17：Axios 和 API 分层

学习教程：

- Axios 文档：[Getting Started](https://axios-http.com/docs/intro)

学习内容：

- axios 基本用法
- API 文件封装
- 环境变量
- 错误处理

实战任务：

建立目录：

```txt
src/api/userApi.ts
src/types/user.ts
```

封装方法：

```ts
getUsers()
createUser()
updateUser()
deleteUser()
```

当天产出：

- 页面中不再直接写请求细节

## Day 18：TanStack Query 入门

学习教程：

- TanStack Query：[Overview](https://tanstack.com/query/latest/docs/framework/react/overview)
- TanStack Query：[Queries](https://tanstack.com/query/latest/docs/framework/react/guides/queries)
- TanStack Query：[Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations)

学习内容：

- `useQuery`
- `useMutation`
- loading 状态
- error 状态
- 请求成功后刷新列表

实战任务：

把用户列表改成 TanStack Query：

- loading 状态
- error 状态
- 删除后自动刷新
- 新增后自动刷新

当天产出：

- 用户管理页面具备现代 React 请求状态管理

## Day 19：Ant Design 入门

学习教程：

- Ant Design：[快速上手](https://ant.design/docs/react/getting-started-cn)
- Ant Design：[Button](https://ant.design/components/button-cn)
- Ant Design：[Table](https://ant.design/components/table-cn)
- Ant Design：[Form](https://ant.design/components/form-cn)
- Ant Design：[Modal](https://ant.design/components/modal-cn)

学习内容：

- Button
- Input
- Table
- Modal
- Form
- Message

实战任务：

把用户列表页面改成 Ant Design：

- 表格
- 新增弹窗
- 编辑弹窗
- 删除确认
- 消息提示

当天产出：

- 一个接近真实中后台的用户列表页面

## Day 20：前端常见业务状态

学习教程：

- React：[Conditional Rendering](https://react.dev/learn/conditional-rendering)
- Ant Design：继续查看 Table、Form、Modal 文档

学习内容：

- loading
- error
- empty
- disabled
- submitting
- selected
- pagination

实战任务：

完善用户管理：

- 加载中
- 请求失败
- 空数据
- 提交中按钮禁用
- 删除二次确认
- 分页

当天产出：

- 用户管理页面的交互状态更完整

## Day 21：周项目：用户管理后台

学习教程：

- 复习 React Router、TanStack Query、Ant Design 文档

项目功能：

- 用户列表
- 新增用户
- 编辑用户
- 删除用户
- 搜索
- 分页
- loading / error / empty 状态
- Ant Design UI
- API 分层

当天产出：

- 一个完整 CRUD 用户管理后台

