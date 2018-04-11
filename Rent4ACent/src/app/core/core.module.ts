import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalizationService} from './services/localization/localization.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [LocalizationService]
})
export class CoreModule { }
