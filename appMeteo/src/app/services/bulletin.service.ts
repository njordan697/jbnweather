import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BulletinComponent } from '../bulletin/bulletin.component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BulletinService {
  //bulletins: any[];

  bulletinsSubject = new Subject<any[]>();

  statsSubject = new Subject<any[]>();


  forecastSubject = new Subject<any[]>();


  emitAppareilSubject() {
    this.bulletinsSubject.next(this.bulletins.slice());
  }

  emitStatsSubject(){
    this.statsSubject.next(this.stats.slice());
  }

  emitForecastSubject(){
    this.forecastSubject.next(this.forecast.slice());
  }
//private bulletins: any[];

	private bulletins = [
  {

  	_id: "5ad8462c40741c0634b8b8bb"

  }

  ];

  private stats = [
    {
  
      _id: "5ad8462c40741c0634b8b8bb"
  
    }
  
    ];
 
    private forecast = [
      {
    
        _id: "5ad8462c40741c0634b8b8bb"
    
      }
    
      ];


  constructor(private httpClient: HttpClient) { }

  getBulletinToday() {
    this.httpClient
      .get<any[]>('http://localhost:3000/api/today')
      .subscribe(
        (response) => {
          this.bulletins = response;
          
          this.emitAppareilSubject();
          
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
};

getStats() {
  this.httpClient
    .get<any[]>('http://localhost:3000/api/statistiques')
    .subscribe(
      (response) => {
        this.stats = response;
        console.log(this.stats);
        this.emitStatsSubject();
        
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
};

getForecast() {
  this.httpClient
    .get<any[]>('http://localhost:3000/api/prevision')
    .subscribe(
      (response) => {
        this.forecast = response;
        
        this.emitForecastSubject();
        
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
};





}