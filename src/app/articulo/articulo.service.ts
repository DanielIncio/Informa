import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { CrudService }  from '../core/crud.service';
import { ArticuloSave } from './articulo.model';

@Injectable({ providedIn: 'root' })
export class ArticuloService extends CrudService<ArticuloSave, string> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9999/api/articulo');
  }
}