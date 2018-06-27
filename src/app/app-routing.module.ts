import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const dashboard = './video-list/video-list.module#VideoListModule';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: dashboard }
];

@NgModule({
    imports: [
         RouterModule.forRoot(routes) 
        ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
