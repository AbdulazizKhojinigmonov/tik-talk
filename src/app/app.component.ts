import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from "./common-ui/profile-card/profile-card";
import { ProfileService } from './data/services/profile.service';
import { JsonPipe } from '@angular/common';
import { Profile } from './data/interfaces/profile.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProfileCard],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class App{
  protected readonly title = signal('tik-talk');
  profileService: ProfileService = inject(ProfileService);
  profiles :Profile[]= [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val: any) => {
      this.profiles = val as Profile[];
    });

    }
  }


