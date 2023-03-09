import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';
import { LanguageList, LanguageKeys } from 'src/app/common/enum';
import { getStorage, setStorage } from 'src/app/common/utills';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent {
  selectedLang: string;
  public languageOptions = LanguageList;

  constructor(public translate: TranslateService) {
    this.selectedLang = getStorage('seletedLanguage');
    translate.addLangs(Object.keys(this.languageOptions));
    translate.setDefaultLang(this.selectedLang);
  }

  switchLang(lang: MatSelectChange) {
    this.translate.use(lang.value);
    this.selectedLang = lang.value;
    setStorage('seletedLanguage',lang.value)
  }
  getLangOption(language: string) {
    return this.languageOptions[language as LanguageKeys];
  }
}
