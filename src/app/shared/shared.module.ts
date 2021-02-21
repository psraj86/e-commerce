import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FeatherIconComponent } from './components/feather-icon/feather-icon.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';



@NgModule({
  declarations: [BreadcrumbComponent, FeatherIconComponent, FooterComponent, HeaderComponent, SidebarComponent, ContentLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [BreadcrumbComponent, FeatherIconComponent, FooterComponent, HeaderComponent, SidebarComponent, ContentLayoutComponent]
})
export class SharedModule { }
