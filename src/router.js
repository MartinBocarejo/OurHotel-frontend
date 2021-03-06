import vueRouter from 'vue-router'
import User from './components/User'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App // carga componente App al ir a la ruta
        },

        {
            path: '/user/:username',
            name: "user",
            component: User
        },
    ]
})
export default router