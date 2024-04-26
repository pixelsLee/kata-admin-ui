import type { RouteConfig } from 'vue-router'

export default [
  {
    path: '/',
    redirect: '/index',
    name: 'main',
    component: () => import('~/views/main/MainView.vue'),
    children: [
      {
        path: 'index',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'home',
          auth: true,
        },
        component: () => import('~/views/Home.vue'),
      },
      {
        path: 'form',
        name: 'form',
        meta: {
          title: '表单',
          icon: 'table',
          auth: true,
          keepAlive: true,
        },
        component: () => import(`~/views/Form.vue`),
      },
      {
        path: 'users',
        name: 'users',
        meta: {
          title: '用户管理',
          icon: 'admin-user',
          auth: true,
          keepAlive: true,
        },
        component: () => import(`~/views/system/AdminUser.vue`),
      },
      {
        path: 'roles',
        name: 'roles',
        meta: {
          title: '权限管理',
          auth: true,
          icon: 'admin-role',
          keepAlive: true,
        },
        component: () => import(`~/views/system/AdminRole.vue`),
      },
      {
        path: 't1',
        meta: {
          title: '一级目录',
          icon: 'dir',
        },
        component: () => import(`~/views/ParentView.vue`),
        children: [
          {
            path: 't1-1',
            component: () => import(`~/views/ParentView.vue`),
            meta: {
              title: '二级目录',
            },
            children: [
              {
                path: 't1-1-1',
                meta: {
                  title: '三级目录',
                },
                component: () => import(`~/views/ParentView.vue`),
                children: [
                  {
                    path: 't1-1-1-1',
                    name: 'Level4',
                    meta: {
                      title: '四级菜单',
                      auth: false,
                    },
                    component: () => import(`~/views/Level4.vue`),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      auth: false,
    },
    component: () => import(`~/views/Login.vue`),
  },
  {
    path: '/v3',
    name: 'v3',
    component: () => import('~/views/main/MainView.vue'),
    children: [
      {
        path: 'index',
        name: 'v3Index',
        meta: {
          title: 'v3 首页',
          icon: 'home',
          auth: true,
        },
        component: () => import('~/views/SubAppV3.vue'),
      },
      {
        path: 'form',
        name: 'v3Form',
        meta: {
          title: 'v3 表单',
          icon: 'table',
          auth: true,
          keepAlive: true,
        },
        component: () => import('~/views/SubAppV3.vue'),
      },
    ],
  },
] as RouteConfig[]
