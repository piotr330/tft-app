import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../items.service";
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemArray = [];
  constructor(private items: ItemsService) { }

  ngOnInit(): void {
    this.itemArray = this.items.items
  }

}
