import { Component, OnInit } from '@angular/core';
import { ProductsService, UsersService } from '@eshop/products';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 statistics: any []= [];
 statisticsss: any []= [];
 stat: any []= [];

  constructor(
    private userService:  UsersService,
    private productService: ProductsService,
   ) {}

  ngOnInit(): void {
    combineLatest([
       this.userService.getUsersCount(),
     ]).subscribe((values) => {
      this.statistics = values;
    });

    combineLatest([
      this.userService.getSessionsSum(),
   ]).subscribe((values) => {
    this.statisticsss = values;
  });


  combineLatest([
    this.userService.getSessionsSumMonth(),
 ]).subscribe((values) => {
  this.stat = values;
});
  }

  
}