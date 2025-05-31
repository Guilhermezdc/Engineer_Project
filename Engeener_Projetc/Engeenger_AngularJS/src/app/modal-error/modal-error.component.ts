import { Component, OnInit, OnDestroy } from '@angular/core';
import {ModalerroService} from '../services/modalerro.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-error.component.html',
  styleUrl: './modal-error.component.css'
})

export class ModalErrorComponent implements OnInit, OnDestroy {

  message: string | null = ``;
  private subscription!: Subscription;

  constructor(private modalService: ModalerroService) { }

  ngOnInit() {

    this.subscription = this.modalService.modalError$.subscribe(msg => this.message = msg);

  }

  close(){
    this.modalService.closeModal()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

}
