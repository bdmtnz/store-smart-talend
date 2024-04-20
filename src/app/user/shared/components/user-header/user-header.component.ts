import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [
    NgStyle,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.scss'
})
export class UserHeaderComponent {
  constructor(private readonly router: Router) { }
  redirect(uri: string) {    
    this.router.navigateByUrl(`user${uri}`)
  }
}
