 import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { Session, UsersService } from '@eshop/products';

@Component({
  selector: 'admin-stat',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @ViewChild('myChart', {static: true}) private chartRef: ElementRef;
  private chart: Chart;

  data: any;
  constructor( 

    private sessionService: UsersService,


  ) { }

  ngOnInit() {

    this.sessionService.getStat().subscribe((claimsByMonth) => {
      this.data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Compteur Per Day',
            backgroundColor: '#f87979',
            data: claimsByMonth
          }
        ]
      };

      const chartElement = this.chartRef.nativeElement;
      this.chart = new Chart(chartElement, {
        type: 'bar',
        data: this.data,
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    });


  }

}
