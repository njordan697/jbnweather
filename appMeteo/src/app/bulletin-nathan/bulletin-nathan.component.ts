import { Component, OnInit } from '@angular/core';
import { BulletinService } from './../services/bulletin.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bulletin-nathan',
  templateUrl: './bulletin-nathan.component.html',
  styleUrls: ['./bulletin-nathan.component.scss']
})
export class BulletinNathanComponent implements OnInit {

  bulletins: any[];
  bulletinsSubscription: Subscription;

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
