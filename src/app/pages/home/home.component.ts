import { Component, OnInit } from '@angular/core';
import { DataFake } from 'src/app/fake/dataFake';
import Game from 'src/app/models/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: Game[] = [];

  constructor() { }

  ngOnInit(): void {
    this.games = DataFake;
  }

}
