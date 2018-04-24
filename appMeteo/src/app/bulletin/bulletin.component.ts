import { Component, Input, OnInit } from '@angular/core';
import { BulletinService } from "./../services/bulletin.service";
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})
export class BulletinComponent implements OnInit {

	@Input() bulletinId: string;
  @Input() bulletinTempc: string;


   constructor(private bulletinService: BulletinService) { }

  ngOnInit() {
  }

}
