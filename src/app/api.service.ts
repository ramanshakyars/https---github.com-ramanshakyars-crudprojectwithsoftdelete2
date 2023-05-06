import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public httpClient: HttpClient) { }
  baseUrl = 'http://localhost:8080/'



  public loadData(){
    return  this.httpClient.get(`${this.baseUrl}employee`);
   }

  public postData(employees:any){
    return this.httpClient.post(`${this.baseUrl}create-employee`,employees)
  }
  public deleteUserData(id: number){
    return this.httpClient.delete(`${this.baseUrl}delete-employee/${id}`)
  }
  public updateData(employees:any){
    return this.httpClient.put(`${this.baseUrl}update-employee`,employees)
  }
  
}
