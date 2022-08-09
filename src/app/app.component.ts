import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('videoPlayer') videoPlayer: HTMLVideoElement;
  name = 'Angular';
  videoProgress = 0;

  handleTimeUpdate() {
    this.videoProgress =
      (this.videoPlayer.nativeElement.currentTime /
        this.videoPlayer.nativeElement.duration) *
        100 +
      '%';
  }

  openFullscreen() {
    this.videoPlayer.nativeElement.requestFullscreen();
  }
}
