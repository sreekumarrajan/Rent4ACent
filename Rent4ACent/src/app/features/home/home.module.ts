import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {reducers} from './reducers';
import {StoreModule} from '@ngrx/store';
import { SearchComponent } from './components/search/search.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { RentalSitesContainerComponent } from './components/rental-sites-container/rental-sites-container.component';
import {HomeComponent} from './containers/home.component';
import {EffectsModule} from '@ngrx/effects';
import {HomeEffects} from './effects/home';
import {HomeService} from './services/home.service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature([HomeEffects])
  ],
  declarations: [
    HomeComponent,
    SearchComponent,
    StatisticsComponent,
    RentalSitesContainerComponent
  ],
  providers: [
    HomeService
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
