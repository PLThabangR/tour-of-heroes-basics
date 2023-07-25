import { Component,Input,EventEmitter,Output, OnInit, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  name:string="Thabang"
  blueClass =false;
  fontSize=30
  
  currentDate =new Date();
  money=5000;
  temperature=25.5
  pizza ={
    toppings:['pepperoni','bacon'],
    size:['Large']
  }

@Input() postImage='';

@Output() imageSelected = new EventEmitter<string>();

constructor(){
  console.log("constructor()")
}
  

}
