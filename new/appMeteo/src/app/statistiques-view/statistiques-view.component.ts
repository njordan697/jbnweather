import { Component, OnInit } from '@angular/core';
import { StatistiquesService } from './../services/statistiques.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-statistiques-view',
  templateUrl: './statistiques-view.component.html',
  styleUrls: ['./statistiques-view.component.scss']
})
export class StatistiquesViewComponent implements OnInit {

  //initialisation tableau des statistiques
  stats: any[];
  statsSubscription: Subscription;

  //coordonnées pour Google maps
  lat: number = 46.84999847;
  lng: number = 6.84999990;

  //Options pour le diagramme en forme de fromage
  pieChartLabels:string[];
  pieChartData:string[];
  pieChartType:string = 'pie';

  //Options pour le diagramme de ligne
  lineChartLabels:string[] = ["00h","01h", "02h", "03h", "04h","05h", "06h","07h","08h", "09h", "10h","11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h","22h","23h"];
  lineChartData:Array<any> = [];
  lineChartOptions:any = {
    responsive: true
  };
  lineChartLegend:boolean = true;
  lineChartType:string = 'line';

  lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

   // events
   public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(private statistiquesService: StatistiquesService) { }

  ngOnInit() {
    this.statistiquesService.getStats();

    this.statsSubscription = this.statistiquesService.statsSubject.subscribe(
      (statistiques: any[]) => {
        this.stats = statistiques

        this.pieChartData = this.stats[0].typeTempsValeurs;

        this.pieChartLabels = this.stats[0].typeTemps;

        var temperaturesReelles = {data: this.stats[0].temperatureDansJourneeReel, label:'Température réelle' };
        var temperaturesRessenties = {data: this.stats[0].temperatureDansJourneeRessentie, label:'Température ressentie' };

        this.lineChartData[0] = temperaturesReelles;
        this.lineChartData[1] = temperaturesRessenties;

      }
    )

    this.statistiquesService.emitStatsSubject();

  }

  ngOnDestroy()
  {
    this.statsSubscription.unsubscribe();
  }

}
