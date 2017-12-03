import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    Error404Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    RouterModule.forRoot([
      { path: 'landing', component: LandingComponent },
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: '**', component: Error404Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
