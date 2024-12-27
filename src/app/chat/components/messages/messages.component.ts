import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class MessagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
