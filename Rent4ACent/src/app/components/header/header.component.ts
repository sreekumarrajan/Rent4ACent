import { Component, OnInit } from '@angular/core';
import {HeaderService} from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public selectedCities: any;
  public selectedCity: string;
  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.getCities()
      .subscribe(cities => {
        this.selectedCities = cities;
        this.selectedCity = cities[1];
      });
  }

}
