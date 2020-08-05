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
  constructor(public toastController: ToastController) { }
  ngOnInit() {}

  addToWatchList(movieTitle: string) {
    console.log(movieTitle, 'Added!');
    this.presentToast(movieTitle);
  }

  async presentToast(movieTitle: string) {
    const toast = await this.toastController.create({
      message: movieTitle + ' has been added to your Watchlist!',
      duration: 2000
    });
    toast.present();
  }

}
