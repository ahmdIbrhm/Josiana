import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstructionOfNgo, CreateConstructionDTO, EditConstructionDTO, GetConstructionsWithNgos } from 'src/app/_models/construction';
import { StorageService } from '../storage/storage.service';

const CONSTRUCTION_API = 'http://localhost:8080/constructions';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  constructor(private http: HttpClient) { }

  getConstructionByNgo(ngoId: number): Observable<ConstructionOfNgo[]> {
    return this.http.get<ConstructionOfNgo[]>(CONSTRUCTION_API + '/ngo/' + ngoId,httpOptions);
  }

  getConstructionById(constructionId: string): Observable<ConstructionOfNgo> {
    return this.http.get<ConstructionOfNgo>(CONSTRUCTION_API + "/" + constructionId, httpOptions)
  }

  editConstruction(constructionId: number, editConstructionDto: EditConstructionDTO): Observable<any> {    
    return this.http.put<any>(CONSTRUCTION_API + "/" + constructionId, editConstructionDto, httpOptions)
  }

  createConstruction(createConstructionDto: CreateConstructionDTO): Observable<any> {
    return this.http.post(
      CONSTRUCTION_API,
      createConstructionDto,
      httpOptions
    );
  }

  getConstructionsWithNgos(): Observable<GetConstructionsWithNgos[]> {
    return this.http.get<GetConstructionsWithNgos[]>(CONSTRUCTION_API, httpOptions)
  }

  acceptConstruction(constructionId: number, accepted: boolean): Observable<boolean> {
    return this.http.put<boolean>(CONSTRUCTION_API + "/" + constructionId + "/decision?accepted=" + accepted, httpOptions);
  }

}
