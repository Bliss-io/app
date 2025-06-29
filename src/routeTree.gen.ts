/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as AppRouteRouteImport } from './routes/_app/route'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AppPostsIndexRouteImport } from './routes/_app/posts/index'
import { Route as AppPostsPostIdRouteImport } from './routes/_app/posts/$postId'

const AppRouteRoute = AppRouteRouteImport.update({
  id: '/_app',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const AppPostsIndexRoute = AppPostsIndexRouteImport.update({
  id: '/posts/',
  path: '/posts/',
  getParentRoute: () => AppRouteRoute,
} as any)
const AppPostsPostIdRoute = AppPostsPostIdRouteImport.update({
  id: '/posts/$postId',
  path: '/posts/$postId',
  getParentRoute: () => AppRouteRoute,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/posts/$postId': typeof AppPostsPostIdRoute
  '/posts': typeof AppPostsIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/posts/$postId': typeof AppPostsPostIdRoute
  '/posts': typeof AppPostsIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/_app': typeof AppRouteRouteWithChildren
  '/_app/posts/$postId': typeof AppPostsPostIdRoute
  '/_app/posts/': typeof AppPostsIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/posts/$postId' | '/posts'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/posts/$postId' | '/posts'
  id: '__root__' | '/' | '/_app' | '/_app/posts/$postId' | '/_app/posts/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppRouteRoute: typeof AppRouteRouteWithChildren
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_app/posts/': {
      id: '/_app/posts/'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof AppPostsIndexRouteImport
      parentRoute: typeof AppRouteRoute
    }
    '/_app/posts/$postId': {
      id: '/_app/posts/$postId'
      path: '/posts/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof AppPostsPostIdRouteImport
      parentRoute: typeof AppRouteRoute
    }
  }
}

interface AppRouteRouteChildren {
  AppPostsPostIdRoute: typeof AppPostsPostIdRoute
  AppPostsIndexRoute: typeof AppPostsIndexRoute
}

const AppRouteRouteChildren: AppRouteRouteChildren = {
  AppPostsPostIdRoute: AppPostsPostIdRoute,
  AppPostsIndexRoute: AppPostsIndexRoute,
}

const AppRouteRouteWithChildren = AppRouteRoute._addFileChildren(
  AppRouteRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppRouteRoute: AppRouteRouteWithChildren,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
