import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { NavLink } from '../dto/nav-links';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  // NavLink DTO (Data Transfer Object / Model)
  navLinks!: NavLink[]

  constructor(protected apiService: ApiService<NavLink>) { }

  ngOnInit(): void {
    this.apiService.fetch("navlinks").subscribe(res => {
      this.navLinks = res as NavLink[];
      console.log("navLinks ", this.navLinks)
    })
  }

}
