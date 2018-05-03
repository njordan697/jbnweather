import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  

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


toAuth() {
  this.httpClient
.post('http://localhost:3000/api/authenticate', { "name": "jbn", "password": "ApiMete02018$" })
    .subscribe(
      (response) => {
        console.log(response);
        //this.stats = response;
        //console.log(this.stats);
        this.emitStatsSubject();
        
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
};

}