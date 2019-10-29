import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Subject} from '../interfaces/Subject';


@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    /* TODO: get those from a nice place */
    endpoint = 'http://localhost:4000/api';
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) {
    }

    AddSubject(data: Subject): Observable<any> {
        const API_URL = `${this.endpoint}/add-subject`;
        return this.http.post(API_URL, data)
            .pipe(
                catchError(this.errorMgmt)
            );
    }

    GetSubjects() {
        return this.http.get(`${this.endpoint}`);
    }

    GetSubject(id): Observable<any> {
        const API_URL = `${this.endpoint}/read-subjects/${id}`;
        return this.http.get(API_URL, {headers: this.headers}).pipe(
            map((res: Response) => {
                return res || {};
            }),
            catchError(this.errorMgmt)
        );
    }

    UpdateSubject(id, data: Subject): Observable<any> {
        const API_URL = `${this.endpoint}/update/${id}`;
        return this.http.put(API_URL, data, {headers: this.headers}).pipe(
            catchError(this.errorMgmt)
        );
    }

    DeleteSubject(id): Observable<any> {
        const API_URL = `${this.endpoint}/delete-student/${id}`;
        return this.http.delete(API_URL).pipe(
            catchError(this.errorMgmt)
        );
    }

    // Error handling
    errorMgmt(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
