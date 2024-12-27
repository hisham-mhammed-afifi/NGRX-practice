import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-attrs',
  templateUrl: './attrs.component.html',
  styleUrls: ['./attrs.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class AttrsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
