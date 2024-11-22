import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerDetailComponent } from './trainer/trainer-detail/trainer-detail.component';

const routes: Routes = [
  { path: 'trainers/:id', component: TrainerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
