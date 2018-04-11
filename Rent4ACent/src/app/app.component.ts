import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LocalizationService} from './core/services/localization/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private translate: TranslateService,
              private localizationService: LocalizationService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    // translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('en');
  }

  ngOnInit() {
    this.localizationService.getTranslationsObject('en')
      .subscribe((translationObject) => {
        this.translate.setTranslation('en', translationObject, true);
        this.translate.use('en');
      });
  }
}
