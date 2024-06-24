import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class LeaveApplicationService {


private apiUrl = '  http://localhost:3000/leaveForms';

constructor(private http: HttpClient) { }

getLeaveApplications(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl );
}
}
