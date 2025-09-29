import { Component } from '@angular/core';
import { ProfileCard } from "./common-ui/profile-card/profile-card";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard, RouterOutlet],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class App {

  }


