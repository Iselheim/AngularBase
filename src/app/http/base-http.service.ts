import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(private http: HttpClient) {
  }

  public getFakeData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');

    // return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    //     .pipe(
    //         map((value) => {return value['userId']})
    //     );
  }
}
