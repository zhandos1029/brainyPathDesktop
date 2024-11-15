import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {subjectsRoutes} from './subjects-routing.module';
import {RouterModule} from "@angular/router";
import { PhysicsComponent } from './physics/physics.component';
import { BiologyComponent } from './biology/biology.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { GeographyComponent } from './geography/geography.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    PhysicsComponent,
    BiologyComponent,
    ChemistryComponent,
    GeographyComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(subjectsRoutes),
        MatIconModule,
    ]
})
export class SubjectsModule { }
