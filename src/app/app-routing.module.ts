import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridFilterDataComponent } from './grid-filter-data/grid-filter-data.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

const routes: Routes = [
  {
    path: 'app-grid-filter-data',
    component: GridFilterDataComponent,
  },
  {
    path: '',
    component: SimpleFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
