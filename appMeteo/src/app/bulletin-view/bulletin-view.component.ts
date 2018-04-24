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


  lat: number = 46.84999847;
  lng: number = 6.84999990;

  constructor(private bulletinService: BulletinService) { }

  ngOnInit() {
    this.bulletinService.getBulletinToday();
    this.bulletinsSubscription = this.bulletinService.bulletinsSubject.subscribe(
      (appareils: any[]) => {
        this.bulletins = appareils;
      }
    );
    this.bulletinService.emitAppareilSubject();

    
  }

  ngOnDestroy() {
    this.bulletinsSubscription.unsubscribe();
  }

}
