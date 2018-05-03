import { Component, OnInit } from '@angular/core';
import { BulletinService } from './../services/bulletin.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bulletin-view',
  templateUrl: './bulletin-view.component.html',
  styleUrls: ['./bulletin-view.component.scss']
})
export class BulletinViewComponent implements OnInit {

  bulletins: any[];
  bulletinsSubscription: Subscription;

  stats: any[];
  statsSubscription: Subscription;

  forecast: any[];
  forecastSubscription: Subscription;
  // Pie
pieChartLabels:string[] = ["test1", "test2"];
pieChartData:string[];
pieChartType:string = 'pie';
 


lineChartLabels:string[] = ["00h","01h", "02h", "03h", "04h","05h", "06h","07h","08h", "09h", "10h","11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h","22h","23h"];
lineChartData:Array<any> = [];



lineChartOptions:any = {
  responsive: true
};

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

lineChartLegend:boolean = true;
lineChartType:string = 'line';


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

// CHART COLOR.
colors = [
  { // 1st Year.
    backgroundColor: 'rgba(77,83,96,0.2)'
  },
  { // 2nd Year.
    backgroundColor: 'rgba(30, 169, 224, 0.8)'
  }
]



  //nbLigne = this.stats[0].temperatureLaPlusFroide;

  nb: number;

  isDataOk: boolean = false;


  lat: number = 46.84999847;
  lng: number = 6.84999990;

  constructor(private bulletinService: BulletinService) { 
    
    console.log(this.lineChartData);
    
  }

  ngOnInit() {
    this.bulletinService.getBulletinToday();
    this.bulletinsSubscription = this.bulletinService.bulletinsSubject.subscribe(
      (bulletins: any[]) => {
        this.bulletins = bulletins;
      }
    );
    this.bulletinService.emitAppareilSubject();

    this.bulletinService.getStats();
    this.statsSubscription = this.bulletinService.statsSubject.subscribe(
      (bulletins: any[]) => {
        this.stats = bulletins
        //var tempArray = this.stats[0].typeTempsValeurs;
        this.pieChartData = this.stats[0].typeTempsValeurs;
        console.log(this.stats);
        //this.isDataOk = true;
        this.pieChartLabels = this.stats[0].typeTemps;
        //console.log(tempArray[0]);
        //console.log(this.pieChartData[0]);
        var temperaturesReelles = {data: this.stats[0].temperatureDansJourneeReel, label:'Température réelle' };
        var temperaturesRessenties = {data: this.stats[0].temperatureDansJourneeRessentie, label:'Température ressentie' };

        this.lineChartData[0] = temperaturesReelles;
        this.lineChartData[1] = temperaturesRessenties;
        //console.log(this.pieChartData);
        console.log(this.pieChartLabels);
      }
    )
    
    this.bulletinService.emitStatsSubject();
    //this.nb = this.stats[0].temperatureLaPlusFroide;
    
    this.bulletinService.getForecast();
    
    this.forecastSubscription = this.bulletinService.forecastSubject.subscribe(
      (bulletins: any[]) => {
        this.forecast = bulletins;
        console.log(this.forecast[0]);
      }
    );
  }




  ngOnDestroy() {
    this.bulletinsSubscription.unsubscribe();
    this.statsSubscription.unsubscribe();
    this.forecastSubscription.unsubscribe();
  }

}
