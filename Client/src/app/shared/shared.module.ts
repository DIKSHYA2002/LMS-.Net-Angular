import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavElementsComponent } from './components/sidenav-elements/sidenav-elements.component';
import { Router, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule , MaterialModule ,HeaderComponent,SidenavElementsComponent , RouterModule , PageNotFoundComponent
  ] ,
  exports :[ CommonModule , MaterialModule , HeaderComponent ,SidenavElementsComponent , RouterModule , PageNotFoundComponent]
})
export class SharedModule { }
