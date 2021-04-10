import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dateStorageService: DataStorageService) {
  }
  onSave() {
    this.dateStorageService.storeRecipes();
  }
}
