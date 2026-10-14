import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { CrudService }  from '../core/crud.service';
import { Cpmcos } from './cpmcos.model';

@Injectable({ providedIn: 'root' })
export class CpmcosService extends CrudService<Cpmcos, string> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9999/api/cpmcos');
  }
}