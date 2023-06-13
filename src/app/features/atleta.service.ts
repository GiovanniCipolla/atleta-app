import { Injectable } from '@angular/core';
import { Atleta } from '../model/atleta';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor() { }

  listaAtleti:Atleta[] = [
    {id:1,nome:'Luca',cognome:'Vallo',inAttivita:true,dataUltimaGara:new Date("2020-4-3"),numeroMedaglioVinte:4},
    {id:2,nome:'ColFischio',cognome:'sisi',inAttivita:false,dataUltimaGara:new Date("1975-1-3"),numeroMedaglioVinte:4}
  ]

  listAll(): Observable<Atleta[]> {
    return of(this.listaAtleti);
  }

  insert(atleta:Atleta): Observable<Atleta> {
    this.listaAtleti.push(atleta);
    return of(atleta);
  }

}
