import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { CrudService }  from '../core/crud.service';
import { Ccmven } from './ccmven.model';

@Injectable({ providedIn: 'root' })
export class CcmvenService extends CrudService<Ccmven, string> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9999/api/ccmven');
  }
}