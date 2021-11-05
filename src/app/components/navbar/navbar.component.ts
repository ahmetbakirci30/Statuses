import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  categories: any[] = [];

  ngOnInit(): void {
    this.categoryService
      .get(1000)
      .subscribe((result) => (this.categories = result));
  }
}
