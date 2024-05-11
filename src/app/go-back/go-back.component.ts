import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './go-back.component.html',
  styleUrl: './go-back.component.css',
})
export class GoBackComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
