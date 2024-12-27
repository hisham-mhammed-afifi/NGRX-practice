import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class FiltersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
