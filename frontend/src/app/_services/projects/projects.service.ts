import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/_models/project';

const PROJECTS_API = 'http://localhost:8080/projects';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }
 
  getAllFreeProjects() : Observable<Project[]>{
    return this.http.get<Project[]>(PROJECTS_API, httpOptions)
  }

  createProject(projectId: number): Observable<any>{
    return this.http.post(PROJECTS_API, projectId, httpOptions)
  }
 }
