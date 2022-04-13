import { Route } from '@angular/compiler/src/core';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, element } from 'protractor';
import { groupeService } from '../service/groupe-service';

@Component({
  selector: 'app-groupes-views',
  templateUrl: './groupes-views.component.html',
  styleUrls: ['./groupes-views.component.css']
})
export class GroupesViewsComponent implements OnInit {

  numGroup='';

  constructor(private groupeService: groupeService, private router: Router) { }

  ngOnInit(): void {
  }






  async studentsIn(i: number) {

    const div = document.getElementById("students") as HTMLElement;
    div.textContent = "";

    try {
      const data = await this.groupeService.StudentInGroupe(i) as any;
      this.numGroup=`Groupe ${i}`;




      data.filter((elt: any) => elt != null).forEach((element: any) => {
        let student = document.createElement("li");
        student.className="list-group-item";
        
        this.studentInner(student, element);
        const groupes = [ 5,4,3,2,1];
        if (i == 0) {
          groupes.forEach(num => {
            if (num != i) {
              this.buttonCreationAndListen(student, num, element);
            }

          });
        } else {
          this.removeAndUpdate(student, element, i);
        }
        this.style(student);
        div.appendChild(student);

      });


    }
    catch (error) {
      console.log(error);
    }


  }

  buttonCreationAndListen(student: HTMLElement, num: number, element: any) {
    const btn = document.createElement("span");
    btn.style.float="right";
    btn.innerHTML = `<button class="btn-link">${num}</button>`;
    btn.style.marginLeft = "10px";
    btn.style.border = "5px solid salomon";
    btn.addEventListener("click", () => {
      this.puteOnGroup(num, element._id);
      student.remove();

    });
    student.appendChild(btn);

  }

  studentInner(student: HTMLElement, element: any) {
    student.innerHTML = ` 
    <span class="info col-5">nom :  ${element.name}</span>
    <span class="info col-5"> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp prenom : ${element.first_name}</span>
    <span class="info col-5">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp numéro : ${element.student_number}</span>`
  }



  style(student: HTMLElement) {
    student.style.width = "1000px";
    student.style.height = "60px";
    student.style.padding = "15px";
    student.style.marginLeft = "150px";
    student.style.fontSize = "18px";
    student.style.fontStyle = "italic";
    student.style.marginBottom = "30px";
    //student.style.backgroundColor = "gray";
    student.style.fontFamily = "Arial Rounded MT Bold";
    //student.style.color = 'white';
  }




  async puteOnGroup(i: number, id: any) {
    try {
      await this.groupeService.putOnGroupe(i, id);


    }
    catch (error) {
      console.log(error);
    }

  }


  async remove(id: any) {

    try {
      await this.groupeService.deleteFromGroup(id);
    }
    catch (error) {
      console.log(error);
    }


  }


  removeAndUpdate(student: HTMLElement, element: any, i: number) {

    const remove = document.createElement("button");

    remove.innerHTML = `remove`;

    //remove.style.marginLeft = "350px";
    remove.className = 'btn btn-danger';

  
    remove.style.float="right"
    remove.addEventListener("click", () => {
      try {
        this.remove(element._id);
        student.remove();

      }

      catch (error) {
        console.log(error);
      }

    });
   
    student.appendChild(remove);

  }
}









