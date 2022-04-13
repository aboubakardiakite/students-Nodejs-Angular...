import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })

export class groupeService{

    data=[];

    constructor(private http : HttpClient,){}




async StudentInGroupe(i:number){
    return  this.http.get(`http://localhost:3000/groupes/${i}`).toPromise();
}

async putOnGroupe(ngp:number,id:any){
    
    return this.http.put(`http://localhost:3000/groupes/${ngp}/${id}`,null).toPromise();
}


async deleteFromGroup(id:any){

    return this.http.delete(`http://localhost:3000/groupes/${id}`).toPromise();
}


}