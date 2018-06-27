import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoListRoutingModule } from './video-list-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

import { VideoListComponent } from './video-list.component';

@NgModule({
  imports: [
    CommonModule,
    VideoListRoutingModule
  ],
  declarations: [
    DashboardComponent,
    VideoListComponent
  ]
})
export class VideoListModule { }
