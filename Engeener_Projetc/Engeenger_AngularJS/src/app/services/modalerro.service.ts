import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalerroService {

  private _showErrorModel = new BehaviorSubject < string | null >(null);

  modalError$ = this._showErrorModel.asObservable();

  showError(message: string) {
    this._showErrorModel.next(message);
  }

  closeModal() {
    this._showErrorModel.next(null);
  }

  constructor() { }
}
