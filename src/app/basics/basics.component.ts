import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {
 

  
//imageUrl='https://picsum.photos/id/2/100/500'
//imageUrl2=
images =[
  'https://picsum.photos/id/2/100/400',
  'https://picsum.photos/id/2/100/300',
  'https://picsum.photos/id/2/100/500',
  'https://picsum.photos/id/2/50/500'
]

/*changeImage(e:KeyboardEvent){
  //this event is a html event
this.imageUrl= (e.target as HTMLInputElement).value
}*/

logImage(event:string){
console.log(event)
}
}
