import { TestBed } from '@angular/core/testing';

import { ModalerroService } from './modalerro.service';

describe('ModalerroService', () => {
  let service: ModalerroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalerroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
