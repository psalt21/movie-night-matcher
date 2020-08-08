import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-info-modal',
  templateUrl: './movie-info-modal.component.html',
  styleUrls: ['./movie-info-modal.component.scss'],
})
export class MovieInfoModalComponent implements OnInit {
  constructor(public modalCtrl: ModalController ) { }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
