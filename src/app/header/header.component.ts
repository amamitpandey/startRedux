import { Component, OnInit } from '@angular/core';
import { Store ,select} from '@ngrx/store';
import { Observable} from 'rxjs';
import { first } from 'rxjs/operators';
import { increment, decrement, reset } from '../store/actions/noIncreamentActios';
import { initialStateAction,state} from '../store/actions/userChangeAction'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Observable<string>
  count: Observable<any>;
  
  // here we are using two store same time
  constructor(public store:Store<{ AppReducers: string,SecondApproachReducer: any }>) { 
    // first way to assign store variable
    this.user=store.select('AppReducers')
    console.log("store state AppReducers user",this.user)
    
    // second way to assign store variable
    this.count = store.pipe(select('SecondApproachReducer'))
    
  }
  
  ngOnInit() {
    
  }
  
  
  increment() {
    this.store.dispatch(increment());
  }
  
  decrement() {
    this.store.dispatch(decrement());
  }
  
  reset() {
    this.store.dispatch(reset());
  }
  
  clicksss(){
    // here first used because we need first recent value of observable
    // we r no going to continoue see change
    this.user.pipe(first())
    .subscribe(data=>{
      console.log("data",data)
      if(data=="guest"){
        this.store.dispatch(state())
      }
      if(data=="Authuser"){
        this.store.dispatch(initialStateAction())
      }})
    }
    
  }
  