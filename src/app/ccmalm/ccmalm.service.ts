import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { CrudService }  from '../core/crud.service';
import { Ccmalm } from './ccmalm.model';

@Injectable({ providedIn: 'root' })
export class CcmalmService extends CrudService<Ccmalm, string> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9999/api/ccmalm');
  }
}