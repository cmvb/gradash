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
import {CodeEditorComponent} from './code-editor/code-editor.component';
import {TreeViewComponent} from './tree-view/tree-view.component';
import {PreloaderComponent} from './preloader/preloader.component';
import {ImagesCropperComponent} from './images-cropper/images-cropper.component';
import {ProfileComponent} from './profile/profile.component';
import {ContactClientComponent} from './contact-client/contact-client.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {BarChartsComponent} from './bar-charts/bar-charts.component';
import {LineChartsComponent} from './line-charts/line-charts.component';
import {AreaChartsComponent} from './area-charts/area-charts.component';
import {RoundedChartsComponent} from './rounded-charts/rounded-charts.component';
import {C3ChartsComponent} from './c3-charts/c3-charts.component';
import {SparklinesChartsComponent} from './sparklines-charts/sparklines-charts.component';
import {PeityChartsComponent} from './peity-charts/peity-charts.component';
import {StaticTableComponent} from './static-table/static-table.component';
import {DataTableComponent} from './data-table/data-table.component';
import {BasicElementsComponent} from './basic-elements/basic-elements.component';
import {AdvanceElementsComponent} from './advance-elements/advance-elements.component';
import {PasswordMeterComponent} from './password-meter/password-meter.component';
import {MultiUploadComponent} from './multi-upload/multi-upload.component';
import {TextEditorComponent} from './text-editor/text-editor.component';
import {DualListBoxComponent} from './dual-list-box/dual-list-box.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {AlertsComponent} from './alerts/alerts.component';
import {ModalsComponent} from './modals/modals.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {AccordionsComponent} from './accordions/accordions.component';
import {TabsComponent} from './tabs/tabs.component';
import {TabMenusComponent} from './tab-menus/tab-menus.component';
import {IconsComponent} from './icons/icons.component';
import {LineaIconsComponent} from './linea-icons/linea-icons.component';
import {MetrizaIconsComponent} from './metriza-icons/metriza-icons.component';
import {OpenIconicIconsComponent} from './open-iconic-icons/open-iconic-icons.component';
import {ThemifyIconsComponent} from './themify-icons/themify-icons.component';
import {RegisterComponent} from './register/register.component';
import {CaptchaComponent} from './captcha/captcha.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ReviewComponent} from './review/review.component';
import {OrderComponent} from './order/order.component';
import {CommentComponent} from './comment/comment.component';

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
  {path: 'code-editor', component: CodeEditorComponent, canActivate: [LoginGuard]},
  {path: 'tree-view', component: TreeViewComponent, canActivate: [LoginGuard]},
  {path: 'preloader', component: PreloaderComponent, canActivate: [LoginGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [LoginGuard]},
  {path: 'contact-client', component: ContactClientComponent, canActivate: [LoginGuard]},
  {path: 'project-list', component: ProjectListComponent, canActivate: [LoginGuard]},
  {path: 'project-details', component: ProjectDetailsComponent, canActivate: [LoginGuard]},
  {path: 'bar-charts', component: BarChartsComponent, canActivate: [LoginGuard]},
  {path: 'line-charts', component: LineChartsComponent, canActivate: [LoginGuard]},
  {path: 'area-charts', component: AreaChartsComponent, canActivate: [LoginGuard]},
  {path: 'rounded-charts', component: RoundedChartsComponent, canActivate: [LoginGuard]},
  {path: 'c3-charts', component: C3ChartsComponent, canActivate: [LoginGuard]},
  {path: 'sparklines-charts', component: SparklinesChartsComponent, canActivate: [LoginGuard]},
  {path: 'peity-charts', component: PeityChartsComponent, canActivate: [LoginGuard]},
  {path: 'static-table', component: StaticTableComponent, canActivate: [LoginGuard]},
  {path: 'data-table', component: DataTableComponent, canActivate: [LoginGuard]},
  {path: 'basic-elements', component: BasicElementsComponent, canActivate: [LoginGuard]},
  {path: 'advance-elements', component: AdvanceElementsComponent, canActivate: [LoginGuard]},
  {path: 'password-meter', component: PasswordMeterComponent, canActivate: [LoginGuard]},
  {path: 'multi-upload', component: MultiUploadComponent, canActivate: [LoginGuard]},
  {path: 'text-editor', component: TextEditorComponent, canActivate: [LoginGuard]},
  {path: 'dual-list-box', component: DualListBoxComponent, canActivate: [LoginGuard]},
  {path: 'notifications', component: NotificationsComponent, canActivate: [LoginGuard]},
  {path: 'alerts', component: AlertsComponent, canActivate: [LoginGuard]},
  {path: 'modals', component: ModalsComponent, canActivate: [LoginGuard]},
  {path: 'buttons', component: ButtonsComponent, canActivate: [LoginGuard]},
  {path: 'tabs', component: TabsComponent, canActivate: [LoginGuard]},
  {path: 'accordions', component: AccordionsComponent, canActivate: [LoginGuard]},
  {path: 'tab-menus', component: TabMenusComponent, canActivate: [LoginGuard]},
  {path: 'icons', component: IconsComponent, canActivate: [LoginGuard]},
  {path: 'linea-icons', component: LineaIconsComponent, canActivate: [LoginGuard]},
  {path: 'metriza-icons', component: MetrizaIconsComponent, canActivate: [LoginGuard]},
  {path: 'open-iconic-icons', component: OpenIconicIconsComponent, canActivate: [LoginGuard]},
  {path: 'themify-icons', component: ThemifyIconsComponent, canActivate: [LoginGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoginGuard]},
  {path: 'captcha', component: CaptchaComponent, canActivate: [LoginGuard]},
  {path: 'checkout', component: CheckoutComponent, canActivate: [LoginGuard]},
  {path: 'contacts', component: ContactsComponent, canActivate: [LoginGuard]},
  {path: 'review', component: ReviewComponent, canActivate: [LoginGuard]},
  {path: 'order', component: OrderComponent, canActivate: [LoginGuard]},
  {path: 'comment', component: CommentComponent, canActivate: [LoginGuard]},  


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
