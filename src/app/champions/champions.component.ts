import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  championArray = []
  constructor(private champion: ChampionsService) { }

  ngOnInit(): void {
    this.championtsToTemplate()
  }
  championtsToTemplate() {
    this.championArray = this.champion.championNames()

  }

}
