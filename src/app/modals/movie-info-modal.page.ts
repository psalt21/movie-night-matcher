import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-movie-info-modal-page',
})
export class MovieInfoModalPage {

    constructor() {}

    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
          'dismissed': true
        });
      }

}