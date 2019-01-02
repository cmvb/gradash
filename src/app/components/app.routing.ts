import {NgModule} from '@angular/core';
import {CommonModule, } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {WidgetsComponent} from './widgets/widgets.component';
import {InboxComponent} from './inbox/inbox.component';
import {ViewMailComponent} from './view-mail/view-mail.component';
import {ComposeMailComponent} from './compose-mail/compose-mail.component';
import {MapsComponent} from './maps/maps.component';
import {DataMapsComponent} from './data-maps/data-maps.component';
import {FileViewerComponent} from './file-viewer/file-viewer.component';
import {XEditableComponent} from './x-editable/x-editable.component';
import {TextEditorComponent} from './text-editor/text-editor.component';
import {TreeViewComponent} from './tree-view/tree-view.component';
import {PreloaderComponent} from './preloader/preloader.component';
import {ImagesCropperComponent} from './images-cropper/images-cropper.component';
import {ProfileComponent} from './profile/profile.component';
import {ContactClientComponent} from './contact-client/contact-client.component';
import {LoginGuard} from './login.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard]},
  {path: 'analytics', component: AnalyticsComponent, canActivate: [LoginGuard]},
  {path: 'widgets', component: WidgetsComponent, canActivate: [LoginGuard]},
  {path: 'inbox', component: InboxComponent, canActivate: [LoginGuard]},
  {path: 'view-mail', component: ViewMailComponent, canActivate: [LoginGuard]},
  {path: 'compose-mail', component: ComposeMailComponent, canActivate: [LoginGuard]},
  {path: 'maps', component: MapsComponent, canActivate: [LoginGuard]},
  {path: 'data-maps', component: DataMapsComponent, canActivate: [LoginGuard]},
  {path: 'file-viewer', component: FileViewerComponent, canActivate: [LoginGuard]},
  {path: 'x-editable', component: XEditableComponent, canActivate: [LoginGuard]},
  {path: 'text-editor', component: TextEditorComponent, canActivate: [LoginGuard]},
  {path: 'tree-view', component: TreeViewComponent, canActivate: [LoginGuard]},
  {path: 'preloader', component: PreloaderComponent, canActivate: [LoginGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [LoginGuard]},
  {path: 'contact-client', component: ContactClientComponent, canActivate: [LoginGuard]},



  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule {}
