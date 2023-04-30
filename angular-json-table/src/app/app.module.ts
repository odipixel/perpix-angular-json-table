import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonTableComponent } from './json-table/json-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderbyPipe } from './orderby.pipe';
@NgModule({
  declarations: [
    AppComponent,
    JsonTableComponent,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
