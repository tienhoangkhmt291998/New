import Home from './components/Router/Home'
import User from './components/Router/User'
import Create from './components/Router/Create'


export const routers = [
    { path: '/', name: 'homepage', component: Home },
    { path:'/user', name: 'user', component: User },
    { path:'/create', name: 'create', component: Create}
]
