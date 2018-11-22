import { Component, OnInit } from '@angular/core';
import * as fromHome from '../reducers';
import {Store} from '@ngrx/store';
import * as HOME_ACTIONS from '../actions/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public store: Store<fromHome.State>) {
    console.log('firing the store action to load rental sites');
    this.store.dispatch( new HOME_ACTIONS.LoadRentalSiteAction());
  }

  ngOnInit() {
  }

}
