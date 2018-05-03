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

  constructor(private bulletinService: BulletinService) { 
  }

  ngOnInit() {
    this.bulletinService.getBulletinToday();
    this.bulletinsSubscription = this.bulletinService.bulletinsSubject.subscribe(
      (bulletins: any[]) => {
        this.bulletins = bulletins;
        console.log(this.bulletins);
      }
    );
    this.bulletinService.emitAppareilSubject();
  }




  ngOnDestroy() {
    this.bulletinsSubscription.unsubscribe();
  }

}
