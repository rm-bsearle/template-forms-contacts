import { Component, forwardRef, Provider } from '@angular/core';
import { profileIconNames } from './profile-icon-names';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const PROFILE_ICON_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ProfileIconSelector),
  multi: true
}

@Component({
  selector: 'con-profile-icon-selector',
  imports: [],
  templateUrl: './profile-icon-selector.html',
  styleUrl: './profile-icon-selector.css',
  providers: [PROFILE_ICON_VALUE_ACCESSOR]
})
export class ProfileIconSelector implements ControlValueAccessor {
  profileIcons = profileIconNames;
  showAllIcons = true;
  selectedIcon!: string | null;

  onChange!: Function;
  onTouched!: Function;

  iconSelected(icon: string): void {
    this.showAllIcons = false;
    this.selectedIcon = icon;
    this.onChange(icon);
  }

  writeValue(icon: string | null): void {
    this.selectedIcon = icon;

    if (icon && icon !== '') {
      this.showAllIcons = false;
    } else {
      this.showAllIcons = true;
    }
  }

  registerOnChange(fn: Function): void {
    this.onChange = (icon: string)=> { fn(icon) };
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }
}
