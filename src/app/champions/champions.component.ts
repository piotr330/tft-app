import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  championArray = []
  gold = [0, 1, 2, 3, 4, 5]
  witam: number = 0;
  displayChampCost = false
  constructor(private champion: ChampionsService) { }

  ngOnInit(): void {
    this.championtsToTemplate();
  }
  championtsToTemplate() {
    this.championArray = []
    if (this.witam === 0) {
      this.championArray = this.champion.championNames()
      this.displayChampCost = false;
    } else (
      this.champion.championNames().map(obj => {
        this.displayChampCost = true;
        console.log(this.witam, obj.cost)
        if (obj.cost === this.witam) {
          this.championArray.push(obj)
        }
      })
    )

  }
  onChange() {
    this.championtsToTemplate()
  }
  dziala() {
  }
}
