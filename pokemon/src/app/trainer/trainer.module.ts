import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { PokemonModule } from '../pokemon/pokemon.module';

@NgModule({
  imports: [CommonModule, PokemonModule],
  declarations: [TrainerListComponent, TrainerDetailComponent],
  exports: [TrainerListComponent, TrainerDetailComponent],
})
export class TrainerModule {}
