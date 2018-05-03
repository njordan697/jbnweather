import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BulletinComponent } from '../bulletin/bulletin.component';
import { StatistiquesComponent } from '../statistiques/statistiques.component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StatistiquesService {
  

  statsSubject = new Subject<any[]>();


  emitStatsSubject(){
    this.statsSubject.next(this.stats.slice());
  }

  private stats = [
    {
  
      _id: "5ad8462c40741c0634b8b8bb"
  
    }
  
    ];

  constructor(private httpClient: HttpClient) { }


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

}