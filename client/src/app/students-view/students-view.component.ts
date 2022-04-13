import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentService } from '../service/students.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.css']
})
export class StudentsViewComponent implements OnInit {
  data!: any;
  addStudForm!: FormGroup;
  upForm!: FormGroup;
  status = '';
  add = true;
  container!: HTMLElement;
  updated = false;
  nom!: string;
  prenom!: string;
  toUpdate!: any;
  numEncour!: number;
  nomE = '';
  prenomE='';


  constructor(private http: HttpClient, private studentService: StudentService, private service: StudentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.container = document.getElementById("container") as HTMLElement;
    this.initForm();
    this.initFormUp();
    this.displayAllStudents();

  }
  async getStudents() {

    const data = await this.service.getStudent() as [];
    return data;
  }


  initForm() {

    this.addStudForm = this.formBuilder.group({
      nom: ["", [Validators.required]],
      prenom: ["", Validators.required],
      num: ["", Validators.required]
    }

    );
  }
  initFormUp() {

    this.upForm = this.formBuilder.group({
      nom: ["",],
      prenom: ["",]
    }

    );
  }



  async addStudent() {


    const student = this.formStudentValue();

    try {
      const added = await this.studentService.addStudent(student);
      this.displayOneStudent(added);
      this.data.push(added);
      this.status = '';
    }
    catch (error) {
      this.status = "Numéro doit étre unique";
    }
  }





  async displayAllStudents() {
    this.data = await this.service.getStudent() as [];
    this.data.forEach((element: any) => {
      this.displayOneStudent(element)
    })
  }






  formStudentValue() {
    const name = this.addStudForm.get('nom')?.value;
    const prenom = this.addStudForm.get('prenom')?.value;
    const numero = this.addStudForm.get('num')?.value;
    const student = { name: name, first_name: prenom, student_number: numero, groupe_number: 0 };
    return student;
  }





  displayOneStudent(student_: any) {
    let student = document.createElement("li");
    student.className="list-group-item";
    this.studentInner(student, student_);
    this.removeAndUpdate(student, student_);
    this.style(student);
    this.container.appendChild(student);


  }



  async remove(id: any) {

    try {
      const res = await this.studentService.remove(id);
      console.log(res);
    }
    catch (error) {
      console.log("cant");
    }
  }







  removeAndUpdate(student: HTMLElement, element: any) {

    const remove = document.createElement("button");
    remove.id = element._id;
    const update = document.createElement("button");
    update.id = element._id;
    this.buttonStyle(remove, update);
    this.buttonListener(remove, update, student);
    student.appendChild(remove);
    student.appendChild(update);

  }




  removeAndUpdate_(parent: HTMLElement) {
    const remove = document.createElement("button");
    remove.id = this.toUpdate;
    const update = document.createElement("button");
    update.id = this.toUpdate;
    this.buttonStyle(remove, update);
    this.buttonListener(remove, update, parent);
    parent.appendChild(remove);
    parent.appendChild(update);

  }







  buttonStyle(remove: HTMLElement, update: HTMLElement) {
    remove.innerHTML = `remove`;
    update.innerHTML = `update`;

    remove.style.float="right";
    update.style.float="right";
    update.style.marginRight="10px";
    //update.style.marginLeft = '20px';
    remove.className = 'btn btn-danger';
    update.className = "btn btn-info";
  }









  buttonListener(remove: HTMLElement, update: HTMLElement, student: HTMLElement) {

    remove.addEventListener("click", () => {
      try {
        this.remove(remove.id);
        student.remove();
      }

      catch (error) {
        console.log(error);
      }

    });

    update.addEventListener("click", () => {
      this.toUpdate = update.id;
      const stud = this.data.find((stud:any)=>stud._id==update.id);
      console.log(stud);
      this.nomE=stud.name;
      this.prenomE=stud.first_name;
     

      this.add = false;
      this.updated = true;


    })
  }






  async update() {

    const student = this.formValue();
    console.log(student);


    try {
      await this.studentService.updateStudent(this.toUpdate, student);
      const up = this.getNumById();
      this.prenomE="prenom";
      this.nomE="nom";

      const updated_ = up[1].parentNode as HTMLElement;
      updated_.textContent = "";
      this.updateDisplayer(updated_, { ...student, student_number: up[0] });
    }
    catch (error) {
      //this.errorStatus="cant update"
    }
  }


  updateDisplayer(updated_: HTMLElement, student: Object) {
    this.studentInner(updated_, student);
    this.removeAndUpdate_(updated_);
    this.style(updated_);



  }


  getNumById() {
    const updated = document.getElementById(this.toUpdate) as HTMLElement;
    const number = this.data.filter((elt: any) => elt._id == this.toUpdate);
    const num = number[0].student_number;
    return [num, updated];
  }




  formValue() {
    const name = this.upForm.get('nom')?.value;
    const prenom = this.upForm.get('prenom')?.value;
    let student = { first_name: prenom, name: name };
    return student;
  }




  canAdd() {
    this.add = true;
    this.updated = false;

  }



  displayUpdateForm() {
    this.add = false;
    this.updated = true;
  }



  studentInner(student: HTMLElement, element: any) {

    student.innerHTML = `
      <span class="info">nom :  ${element.name}</span>
      <span class="info">  &nbsp&nbsp prenom : ${element.first_name}</span>
      <span  class="info"> &nbsp&nbsp   numéro : ${element.student_number}</span>`
  }








  style(student: HTMLElement) {
    student.style.width = "800px";
    student.style.height = "60px";
    student.style.padding = "15px";
    student.style.marginLeft = "220px";
    student.style.fontSize = "18px";
    student.style.fontStyle = "italic";
    student.style.marginBottom = "10px";
    //student.style.backgroundColor = "gray";
    student.style.fontFamily = "Arial Rounded MT Bold";
   // student.style.color = 'white';
  }






}
