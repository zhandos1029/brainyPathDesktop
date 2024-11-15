import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-physics',
  templateUrl: './physics.component.html',
  styleUrls: ['./physics.component.scss']
})
export class PhysicsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
