import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-biology',
  templateUrl: './biology.component.html',
  styleUrls: ['./biology.component.scss']
})
export class BiologyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
