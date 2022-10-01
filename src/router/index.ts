import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Editor from '../views/EditorView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'editor',
    component: Editor
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
