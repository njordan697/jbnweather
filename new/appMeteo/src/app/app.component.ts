import { Component, OnInit } from '@angular/core';
import { BulletinService } from "./services/bulletin.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  secondes: number;
//bulletins: any[];




constructor(private bulletinService: BulletinService){
	
	

}

ngOnInit() {
  const counter = Observable.interval(1000);
  counter.subscribe(
    (value) => {
      this.secondes = value;
    },
    (error) => {
      console.log('Uh-oh, an error occurred! : ' + error);
    },
    () => {
      console.log('Observable complete!');
    }
  );
	//this.bulletins = this.bulletinService.bulletins;
}


}
