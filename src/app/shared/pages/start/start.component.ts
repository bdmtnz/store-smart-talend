import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  constructor(private readonly router:Router) { }

  redirect(uri: string) {
    this.router.navigateByUrl(uri)
  }
}
