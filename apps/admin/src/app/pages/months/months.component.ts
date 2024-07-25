import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { MessageService } from 'primeng/api';
 import { User, UsersService } from '@eshop/products';
import { timer } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'admin-month',
  templateUrl: './months.component.html',
  styles: [
  ]
})
export class MonthsComponent implements OnInit {
  monthlySum: any[] = []; // Initialize as an empty array

  constructor(    private usersService: UsersService,
    private router: Router,
    private messageService : MessageService,
) { }

  ngOnInit(): void {
    this.usersService.getSommeByMonth().subscribe((data) => {
      this.monthlySum = Object.keys(data).map(month => ({
        month: month,
        sum: data[month]
      }));
    });
  }
      
  }


 

