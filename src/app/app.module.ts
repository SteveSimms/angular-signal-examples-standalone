import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetApiComponent } from './examples/set-api/set-api.component';
import { UpdateApiComponent } from './examples/update-api/update-api.component';
import { MutateApiComponent } from './examples/mutate-api/mutate-api.component';
import { ComputeApiComponent } from './examples/compute-api/compute-api.component';
import { ReplaceRxjsSubjectComponent } from './examples/replace-rxjs-subject/replace-rxjs-subject.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './examples/replace-rxjs-subject/components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    SetApiComponent,
    UpdateApiComponent,
    MutateApiComponent,
    ComputeApiComponent,
    ReplaceRxjsSubjectComponent,
    HomeComponent,
    ReviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
