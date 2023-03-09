import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { ErrorComponent } from './component/error/error.component';
import { LanguageSelectComponent } from './component/language-select/language-select.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserDetailsComponent,
    ErrorComponent,
    LanguageSelectComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function httpTranslateLoader(http: HttpClient) {
  console.log('http',http)
  return new TranslateHttpLoader(http, '/sample/assets/i18n/', '.json');
  // return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
