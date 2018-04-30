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

  // Pie
pieChartLabels:string[] = ["test1", "test2"];
pieChartData:string[] = ['30','70'];
pieChartType:string = 'pie';
 
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
       
        this.isDataOk = true;
        this.pieChartLabels = this.stats[0].typeTemps;
        //console.log(tempArray[0]);
        console.log(this.pieChartData[0]);

        console.log(this.pieChartData);
        console.log(this.pieChartLabels);
      }
    )
    
    this.bulletinService.emitStatsSubject();
    //this.nb = this.stats[0].temperatureLaPlusFroide;
    
    
    
  }




  ngOnDestroy() {
    this.bulletinsSubscription.unsubscribe();
    this.statsSubscription.unsubscribe();
    
  }

}
