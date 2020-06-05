import { NgModule } from '@angular/core';
import { DevelopmentComponent } from './services/development/development.component';
import { OutsourcingComponent } from './services/outsourcing/outsourcing.component';
import { TrainingComponent } from './services/training/training.component';
import { OverviewComponent } from './services/overview/overview.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

const routes : Routes =[
   {
       path:"",
       component:OverviewComponent,
       children:[
            {
                path:"development",
                component:DevelopmentComponent
            },
            {
                path:"outsource",
                component:OutsourcingComponent
            },
            {
                path:"training",
                component:TrainingComponent
            }
       ]
   }
    
]

@NgModule({
    declarations:[
        DevelopmentComponent,
        OutsourcingComponent,
        TrainingComponent,
        OverviewComponent,
        FilterPipe
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers:[],
    bootstrap:[OverviewComponent],
    entryComponents:[OverviewComponent]
    
})
export class ServiceModule{

}