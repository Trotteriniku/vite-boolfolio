import { createRouter, createWebHistory } from "vue-router";
// importo i componenti 
import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import SingleProject from "./pages/SingleProject.vue";
import NotFound from "./pages/NotFound.vue";
import AppContact from "./pages/AppContact.vue";

// creo le routes dentro una constante router
const router = createRouter({
    // passo la hystory delle ricerche
    history: createWebHistory(),
    // e le route con un oggetto
    routes: [
        {
            // dove raggiunge l'url
            path:"/",
            // nome della route
            name:"home",
            // componente che gestisce la rotta 
            component: AppHome,
        },
        {
            path: "/projects",
            name: "projects",
            component: AppProjects, 
        },
        {
            path:"/projects/:slug",
            name: "single-project",
            component: SingleProject
        },
        {
            path: "/contacts",
            name: "contacts",
            component: AppContact, 
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        } 
    ],
});

export default router;