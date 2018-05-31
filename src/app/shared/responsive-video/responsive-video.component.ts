import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-responsive-video',
  templateUrl: './responsive-video.component.html',
  styleUrls: ['./responsive-video.component.scss']
})
export class ResponsiveVideoComponent {

  @Input() videoUrl: string;

  constructor() { }

}
