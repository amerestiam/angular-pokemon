import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonAPI } from 'src/app/models/pokemon-api';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  @Input() pokemonInput:any
  @Output() select = new EventEmitter();

  pokemon!: PokemonAPI;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonsService.getPokemon(this.pokemonInput.url).subscribe(res => {
      this.pokemon = res
    })
  }

  clicSurImage() {
    this.select.emit(this.pokemon);
  }
}


