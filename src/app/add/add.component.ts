import { Component, OnInit } from '@angular/core';
import { Store ,select} from '@ngrx/store';
import { Observable } from 'rxjs';
import * as addRemoveAction from '../store/actions/addRemoveArrayAction'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // here we can declare any but we are checking data type
  testArray:Observable<{name:string,url:string}>
  
  
  
  constructor(public store:Store<{readAddReducer:{name:string,url:string}}>) { 
  }
  
  ngOnInit() {
  }
  
  onclickAddfn(){
    this.store.dispatch(new addRemoveAction.addArray({ name:"new", url:"blank1"}))
  }
  
  onclickRemovefn(){
    this.store.dispatch(new addRemoveAction.removeArray(1))
  }
  
}
