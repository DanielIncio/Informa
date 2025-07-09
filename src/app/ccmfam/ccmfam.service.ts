import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { CrudService }  from '../core/crud.service';
import { Ccmfam } from './ccmfam.model';

@Injectable({ providedIn: 'root' })
export class CcmfamService extends CrudService<Ccmfam, string> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9999/api/ccmfam');
  }
}
