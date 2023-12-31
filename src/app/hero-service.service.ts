import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  getHeroes() : Observable<Hero[]>{
   const heroes =of(HEROES)
   this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  constructor(private messageService:MessageService) { }
}
