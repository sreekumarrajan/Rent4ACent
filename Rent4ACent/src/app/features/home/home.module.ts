import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {reducers} from './reducers';
import {StoreModule} from '@ngrx/store';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('home', reducers)
  ],
  declarations: []
})
export class HomeModule { }
