import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-geography',
  templateUrl: './geography.component.html',
  styleUrls: ['./geography.component.scss']
})
export class GeographyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
