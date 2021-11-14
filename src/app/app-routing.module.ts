import { AppAdsComponent } from './components/app-ads/app-ads.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VideoListComponent } from './components/video/video-list/video-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: VideoListComponent },
  { path: 'videos', component: VideoListComponent },
  { path: 'videos/category/:categoryId', component: VideoListComponent },
  { path: 'app-ads.txt', component: AppAdsComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
