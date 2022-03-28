
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const AUTH_API = 'https://localhost:7230/api/Rooms/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'observe':'response'})
};
@Injectable({
  providedIn: 'root'
})
export class RoomService {
    
  constructor(private http: HttpClient) {
      
   }
  addRoom(roomNumber: string, roomTypeId: number): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    return this.http.post(AUTH_API + 'AddRoom', {
        roomNumber,
        roomTypeId
    }, {'headers':headers , observe: 'response'})
    
  } 
  getRoomTypes(): Observable<any> {
    return this.http.get(AUTH_API + 'GetRoomTypes');    
  }
}