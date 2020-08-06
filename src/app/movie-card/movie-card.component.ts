import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() posterUrl: string;
  @Input() movieTitle: string;
  @Input() releaseYear: string;
  @Input() rating: number;
  @Input() reviewCount: number;

  added = false;
  toastMessage = '';

  constructor(public toastController: ToastController) { }
  ngOnInit() {}

  addToWatchList(movieTitle: string) {
    if (this.added) {
      this.added = false;
    } else if (!this.added) {
      this.added = true;
    }
    this.presentToast(movieTitle);
  }

  async presentToast(movieTitle: string) {
    if (this.added) {
      this.toastMessage = ' has been added to your Watchlist!';
    } else {
      this.toastMessage = ' has been removed from your Watchlist.';
    }

    const toast = await this.toastController.create({
      message: movieTitle + this.toastMessage,
      duration: 2000
    });
    toast.present();
  }

}
