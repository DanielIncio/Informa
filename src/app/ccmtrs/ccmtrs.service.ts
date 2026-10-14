import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { CrudService }  from '../core/crud.service';
import { Ccmtrs } from './ccmtrs.model';

@Injectable({ providedIn: 'root' })
export class CcmtrsService extends CrudService<Ccmtrs, string> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9999/api/ccmtrs');
  }
}