import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })

export class StudentService{




    constructor(private http : HttpClient){}



    async addStudent(student:object){
        
        return this.http.post("http://localhost:3000/etudiants",student).toPromise();
        
      


}


async getStudent(){
   return  this.http.get("http://localhost:3000/etudiants").toPromise();
}


async updateStudent(id:any,stud:object){

    return this.http.put(`http://localhost:3000/etudiants/${id}`,stud).toPromise();
}


async remove(id:any){
    return this.http.delete(`http://localhost:3000/etudiants/${id}`).toPromise();
}


async addStudInGroupe(idEtu:any,idGp:number){


    return this.http.put(`http://localhost:3000/groupes/${idGp}/${idEtu}`,null).toPromise();
        
    
}




}
    





