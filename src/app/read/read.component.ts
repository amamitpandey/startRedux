import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  
  testArray:Observable<{name:string,url:string}>
  
  
  
  constructor(public store:Store<{readAddReducer:{name:string,url:string}}>) { 
    // assign store value to observable variable
    this.testArray=this.store.select('readAddReducer')
    
    console.log("this.testArray0",this.testArray)
  }
  
  ngOnInit() {
  }
  
}
