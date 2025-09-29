import { Component, inject, signal } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileCard } from '../../common-ui/profile-card/profile-card';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './search-page.html',
  styleUrls: ['./search-page.scss']
})
export class SearchPageComponent {
  protected readonly title = signal('tik-talk');
  profileService: ProfileService = inject(ProfileService);
  profiles :Profile[]= [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val: any) => {
      this.profiles = val as Profile[];
    });

    }
}
