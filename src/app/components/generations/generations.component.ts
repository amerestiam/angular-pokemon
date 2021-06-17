import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css'],
})
export class GenerationsComponent implements OnInit {
  generations:any;
  nbreDeGenerations: number | undefined;
  constructor(private servicePokemon: PokemonsService) {}

  ngOnInit(): void {
    this.servicePokemon.getGenerations().subscribe(resultat => {
      this.generations = resultat.results;
      this.nbreDeGenerations = resultat.count;
    });
  }
}
