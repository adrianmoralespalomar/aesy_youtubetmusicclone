import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import ('./shared/youtubeglobalpage/youtubeglobalpage.component').then(m => m.YoutubeglobalpageComponent)
    },
    {
        path:'login',
        loadComponent:()=>import ('./login/login/login.component').then(m => m.LoginComponent)
    }
];
