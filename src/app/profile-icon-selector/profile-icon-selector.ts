import { Component } from '@angular/core';
import { profileIconNames } from './profile-icon-names';

@Component({
  selector: 'con-profile-icon-selector',
  imports: [],
  templateUrl: './profile-icon-selector.html',
  styleUrl: './profile-icon-selector.css'
})
export class ProfileIconSelector {
  profileIcons = profileIconNames;
  showAllIcons = true;
  selectedIcon!: string | null;

  iconSelected(icon: string): void {
    this.showAllIcons = false;
    this.selectedIcon = icon;
  }
}
