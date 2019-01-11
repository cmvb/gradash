import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './components/app.routing';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {HomeComponent} from './components/home/home.component';
import {DataObjects} from './components/ObjectGeneric';
import {Functions} from './components/Functions';
import {Util} from './components/Util';
import {LoginGuard} from './components/login.guard';
import {NgxPaginationModule} from 'ngx-pagination';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FooterComponent} from './components/footer/footer.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {BreadcrumbMobileComponent} from './components/breadcrumb-mobile/breadcrumb-mobile.component';
import {HeaderMobileComponent} from './components/header-mobile/header-mobile.component';
import {AnalyticsComponent} from './components/analytics/analytics.component';
import {WidgetsComponent} from './components/widgets/widgets.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ViewMailComponent } from './components/view-mail/view-mail.component';
import { ComposeMailComponent } from './components/compose-mail/compose-mail.component';
import { MapsComponent } from './components/maps/maps.component';
import { DataMapsComponent } from './components/data-maps/data-maps.component';
import { FileViewerComponent } from './components/file-viewer/file-viewer.component';
import { XEditableComponent } from './components/x-editable/x-editable.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { ImagesCropperComponent } from './components/images-cropper/images-cropper.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactClientComponent } from './components/contact-client/contact-client.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { BarChartsComponent } from './components/bar-charts/bar-charts.component';
import { LineChartsComponent } from './components/line-charts/line-charts.component';
import { AreaChartsComponent } from './components/area-charts/area-charts.component';
import { RoundedChartsComponent } from './components/rounded-charts/rounded-charts.component';
import { C3ChartsComponent } from './components/c3-charts/c3-charts.component';
import { SparklinesChartsComponent } from './components/sparklines-charts/sparklines-charts.component';
import { PeityChartsComponent } from './components/peity-charts/peity-charts.component';
import { StaticTableComponent } from './components/static-table/static-table.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { BasicElementsComponent } from './components/basic-elements/basic-elements.component';
import { AdvanceElementsComponent } from './components/advance-elements/advance-elements.component';
import { PasswordMeterComponent } from './components/password-meter/password-meter.component';
import { MultiUploadComponent } from './components/multi-upload/multi-upload.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { DualListBoxComponent } from './components/dual-list-box/dual-list-box.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { AccordionsComponent } from './components/accordions/accordions.component';
import { TabMenusComponent } from './components/tab-menus/tab-menus.component';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ReviewComponent } from './components/review/review.component';
import { OrderComponent } from './components/order/order.component';
import { CommentComponent } from './components/comment/comment.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { IconsComponent } from './components/icons/icons.component';
import { RegisterComponent } from './components/register/register.component';
import { LineaIconsComponent } from './components/linea-icons/linea-icons.component';
import { MetrizaIconsComponent } from './components/metriza-icons/metriza-icons.component';
import { OpenIconicIconsComponent } from './components/open-iconic-icons/open-iconic-icons.component';
import { ThemifyIconsComponent } from './components/themify-icons/themify-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    BreadcrumbMobileComponent,
    HeaderMobileComponent,
    AnalyticsComponent,
    WidgetsComponent,
    InboxComponent,
    ViewMailComponent,
    ComposeMailComponent,
    MapsComponent,
    DataMapsComponent,
    FileViewerComponent,
    XEditableComponent,
    TreeViewComponent,
    PreloaderComponent,
    ImagesCropperComponent,
    ProfileComponent,
    ContactClientComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    BarChartsComponent,
    LineChartsComponent,
    AreaChartsComponent,
    RoundedChartsComponent,
    C3ChartsComponent,
    SparklinesChartsComponent,
    PeityChartsComponent,
    StaticTableComponent,
    DataTableComponent,
    BasicElementsComponent,
    AdvanceElementsComponent,
    PasswordMeterComponent,
    MultiUploadComponent,
    TextEditorComponent,
    DualListBoxComponent,
    NotificationsComponent,
    AlertsComponent,
    ModalsComponent,
    ButtonsComponent,
    TabsComponent,
    AccordionsComponent,
    TabMenusComponent,
    CaptchaComponent,
    CheckoutComponent,
    ContactsComponent,
    ReviewComponent,
    OrderComponent,
    CommentComponent,
    CodeEditorComponent,
    IconsComponent,
    RegisterComponent,
    LineaIconsComponent,
    MetrizaIconsComponent,
    OpenIconicIconsComponent,
    ThemifyIconsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [DataObjects, LoginGuard, Util, Functions],
  bootstrap: [AppComponent]
})
export class AppModule {}
