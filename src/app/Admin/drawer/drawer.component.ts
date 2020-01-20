import { Component, OnInit } from '@angular/core';
import { routes } from '../../Utilities/routes';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  Navigation = routes
  constructor() { }

  ngOnInit() {
  }

}
