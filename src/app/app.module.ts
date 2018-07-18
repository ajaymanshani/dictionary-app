import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// mdb import
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SearchComponent } from './search/search.component';
import { FullViewComponent } from './full-view/full-view.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
// Progressbar import
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { SearchBoxComponent } from './search-box/search-box.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FullViewComponent,
    AboutComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
