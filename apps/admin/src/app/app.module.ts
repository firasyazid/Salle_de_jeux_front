import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ColorPickerModule} from 'primeng/colorpicker';
import {InputSwitchModule} from 'primeng/inputswitch';
import {EditorModule} from 'primeng/editor';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
 

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import { FieldsetModule } from 'primeng/fieldset';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import {InputTextModule} from 'primeng/inputtext';
import { CategoriesService } from '@eshop/products';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
 import { DialogModule } from 'primeng/dialog';

import {DropdownModule} from 'primeng/dropdown';
import { AuthGuardService, UsersModule } from '@eshop/users';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { SessionDetailsComponent } from './pages/order/session-details/session-details.component';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { MonthsComponent } from './pages/months/months.component';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuardService] ,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'sesssion_user',
        component: CategoriesListComponent
      },
      {
        path: 'categories/form',
        component: CategoriesFormComponent
      },
      {
        path: 'categories/form/:id',
        component: CategoriesFormComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/form',
        component: ProductsFormComponent
      },
      {
        path: 'products/form/:id',
        component: ProductsFormComponent
      },
       
      {
        path: 'users',
        component: UsersListComponent
      },
      {
        path: 'users/form',
        component: UsersFormComponent
      },
      {
        path: 'users/form/:id',
        component: UsersFormComponent
      },
      {
        path: 'orders',
        component: OrderListComponent
      },
      {
        path: 'session/form/:id',
        component: SessionDetailsComponent,
      },
      {
      path: 'stat',
      component: StatisticsComponent,
    },
    {
      path: 'month',
      component:MonthsComponent
      ,
    },
    ]
  }
];


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, ShellComponent, SidebarComponent, CategoriesListComponent,
     CategoriesFormComponent, ProductsListComponent, ProductsFormComponent, UsersListComponent, UsersFormComponent, OrdersComponent, OrderListComponent, SessionDetailsComponent, StatisticsComponent, MonthsComponent,    ],
  imports: [
     TagModule,DialogModule,
    BrowserModule,ChartjsModule,
    EditorModule,
    ColorPickerModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    InputNumberModule,
     CardModule,
     DropdownModule,
     ToastModule,
     FieldsetModule,
    ToolbarModule,
     ButtonModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
     InputSwitchModule,
     UsersModule,
       RouterModule.forRoot(routes,{ initialNavigation: 'enabledBlocking' }),

  ],
  providers: [CategoriesService, MessageService],
  bootstrap: [AppComponent],
  exports: [
   
    OrdersComponent,
        OrderListComponent,
        SessionDetailsComponent,
        StatisticsComponent,
        MonthsComponent
  ],
})
export class AppModule {}
