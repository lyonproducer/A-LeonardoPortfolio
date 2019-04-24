import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  works:any[] = [];

  constructor(public http:HttpClient) {

    this.getWorks();
    
  }

  getWorks(){
    this.http.get('https://leonardo-portfolio.firebaseio.com/works.json').subscribe(
      (data:any[])=>{
        this.works = data;
        console.log(data);
      }
    );
  }

}
