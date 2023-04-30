import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonTableComponent } from './json-table/json-table.component';

const routes: Routes = [{
  path:'',
  component:JsonTableComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
