import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component/login.component';
import { RegisterComponent } from './register/register.component';
import  {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TrainingServie } from './training.service';
import { MustMatchDirective } from './mustMatchDirective';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule} from '@angular/common/http';
import { BankComponent } from './bank/bank.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:"*",
    component:LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent  // TODO : Change the component name 
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bank',
    component: BankComponent
  },
  {
    path: 'reactiveForm',
    component: ReactiveFormComponent
  },
  {
    path:"service",
   // component:OverviewComponent
    loadChildren:()=> import("./service.module").then(function(m){
      return m.ServiceModule;
    })
  }
]; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    MustMatchDirective,
    ReactiveFormComponent,
    BankComponent,
    WithdrawComponent,
    DepositComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TrainingServie
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
