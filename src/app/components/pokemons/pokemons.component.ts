import { Component, OnInit } from '@angular/core';
import { FormRecherchePokemon } from 'src/app/models/form-recherche-pokemon';
import { Pokemon } from 'src/app/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  select: any;
  pokemons: any;
  limit = 25;
  page = 1;
  count = 0;
  formRecherchePokemon = new FormRecherchePokemon('');
  faOptinMonster = faOptinMonster;
  easterEggs = false;

  constructor(private PokeService: PokemonsService) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() {
    this.PokeService.getPokemons(this.limit, this.page).subscribe((res) => {
      this.pokemons = res.results;
      this.count = res.count;
    });
  }
  rechercher(nomDuPokemon: string) {
    // this.pokemons =this.PokeService.rechercherPokemon(nomDuPokemon);
    // this.easterEggs = false;
    // if (nomDuPokemon == 'C3PO') {
    //   this.easterEggs =true
    // }
  }
  annulerRecherche() {
    // this.pokemons = this.PokeService.getPokemons();
    // this.formRecherchePokemon.setNom('')
  }
}
