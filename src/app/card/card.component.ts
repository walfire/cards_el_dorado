import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() color: string;
  @Input() item: string;
  @Input() buyingPower: string;
  @Input() walkingPower: string;
  @Input() type: string;
  @Input() price: string;
  @Input() description: string;
  @Input() displayName: string;
  @Input() power: string;
  //nota bene: "moveType" and "kind" are not useful here-I think. Color already covers what we need!

  constructor() { }

  ngOnInit() {
  }

}
