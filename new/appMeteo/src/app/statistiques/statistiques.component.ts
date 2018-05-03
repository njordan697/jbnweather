import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {


  @Input() typeTemps: any[];
  @Input() typeTempsValeurs: any[];
  @Input() temperatureDansJourneeReel: any[];
  @Input() temperatureDansJourneeRessentie: any[];
  @Input() UpdateDate;
  @Input() jourLePlusChaud: string;
  @Input() jourLePlusFroid: string;
  @Input() temperatureLaPlusChaude: number;
  @Input() temperatureLaPlusFroide: number;

  constructor() { }

  ngOnInit() {
  }

}
