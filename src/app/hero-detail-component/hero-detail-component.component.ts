import { Component ,Input} from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-detail-component',
  templateUrl: './hero-detail-component.component.html',
  styleUrls: ['./hero-detail-component.component.css']
})
export class HeroDetailComponentComponent {
@Input() hero? :Hero;
}
