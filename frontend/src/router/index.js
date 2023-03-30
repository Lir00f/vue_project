import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarListView from '../views/Cars/CarListView.vue'
import CarView from '../views/Cars/CarView.vue'
import NewCarView from '../views/Cars/NewCarView.vue'
import LoginView from '../views/Auth/LoginView.vue'
import RegistrationView from '../views/Auth/RegistrationView.vue'
import OrdersView from '../views/User/OrdersView.vue'
import AboutView from '../views/AboutView.vue'
import MoreHome from '../views/Cars/MoreHome.vue'

const routes = [
    {
        path: '/more',
        name: 'more',
        component: MoreHome
        },
{
path: '/',
name: 'home',
component: HomeView
},
{
path: '/about',
name: 'about',
component: AboutView
},
{
    path:"/registration",
    name: "reg",
    component: RegistrationView
    },
{
path:"/Car/:id",
name:"Car",
component: CarView
},
{
path:"/cars",
name:"cars",
component: CarListView
},
{
path:"/new",
name:"newCar",
component: NewCarView
},
{
path:"/login",
name:"login",
component: LoginView
},
{
path:"/registration",
name: "reg",
component: RegistrationView
},
{
path: "/orders",
name: "orders",
component: OrdersView
}
]


const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})


export default router


