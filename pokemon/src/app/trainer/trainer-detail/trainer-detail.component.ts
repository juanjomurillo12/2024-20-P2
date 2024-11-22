import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail!: Trainer;
  @Input() trainerId!: number;

  constructor(private trainerService: TrainerService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.trainerId) {
      this.getTrainerDetail(this.trainerId);
    }
  }

  getTrainerDetail(id: number) {
    this.trainerService.getTrainerById(id).subscribe((trainer) => {
      this.trainerDetail = trainer;
    });
  }

  goBack() {
    this.router.navigate(['/']); 
  }

  calculateNumberOfPokemons(trainer: Trainer): number {
    return trainer.pokemons.length;
  }

  calculateAveragePokemonLevel(trainer: Trainer): number {
    const totalLevels = trainer.pokemons.reduce((acc, pokemon) => acc + pokemon.level, 0);
    return totalLevels / trainer.pokemons.length;
  }
}
