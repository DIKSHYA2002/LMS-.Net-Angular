import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import {  } from '../../shared.module';
import {  RouterModule } from '@angular/router';

export interface NavigationItems{
  value:string;
  link:string;
}

@Component({
  selector: 'app-sidenav-elements',
  standalone: true,
  imports: [MaterialModule ,RouterModule],
  templateUrl: './sidenav-elements.component.html',
  styleUrl: './sidenav-elements.component.scss'
})
export class SidenavElementsComponent {

  panelName:string="STUDENT";

  navItems: NavigationItems[]=[];

  /**
   *
   */
  constructor() {
     this.navItems =[
      {value : "Books" , link:"view-books"},
      {value : "My Orders" , link:"my-orders"}
     ]
    
  }
}
