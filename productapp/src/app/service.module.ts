import { NgModule } from '@angular/core';
import { DevelopmentComponent } from './services/development/development.component';
import { OutsourcingComponent } from './services/outsourcing/outsourcing.component';
import { TrainingComponent } from './services/training/training.component';
import { OverviewComponent } from './services/overview/overview.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes =[
    {
        path:"",
        component:OverviewComponent
    },
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

@NgModule({
    declarations:[
        DevelopmentComponent,
        OutsourcingComponent,
        TrainingComponent,
        OverviewComponent
    ],
    imports:[
        RouterModule.forChild(routes)
    ],
    providers:[],
    bootstrap:[
        OverviewComponent
    ]
})
export class ServiceModule{

}