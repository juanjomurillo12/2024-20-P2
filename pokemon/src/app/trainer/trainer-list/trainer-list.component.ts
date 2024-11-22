import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<Trainer> = [];
  selected: boolean = false;
  selectedTrainer!: Trainer;

  constructor(private trainerService: TrainerService, private router: Router) {}

  ngOnInit() {
    this.getTrainersList();
  }

  getTrainersList() {
    this.trainerService.getTrainers().subscribe((trainers) => {
      this.trainers = trainers;
    });
  }

  calculateNumberOfPokemons(trainer: Trainer): number {
    return trainer.pokemons.length;
  }


  onSelected(trainer: Trainer) {
    this.selected = true;
    this.selectedTrainer = trainer;
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/trainers/${id}`]);
  }

}
