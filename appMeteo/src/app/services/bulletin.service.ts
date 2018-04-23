import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BulletinComponent } from '../bulletin/bulletin.component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BulletinService {
  //bulletins: any[];

  bulletinsSubject = new Subject<any[]>();

  emitAppareilSubject() {
    this.bulletinsSubject.next(this.bulletins.slice());
  }
//private bulletins: any[];

	private bulletins = [
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





}