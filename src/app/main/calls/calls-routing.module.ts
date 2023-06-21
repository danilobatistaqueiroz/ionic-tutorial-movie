import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallsPage } from './calls.page';

const routes: Routes = [
  {
    path: '',
    component: CallsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CallsPageRoutingModule {}
