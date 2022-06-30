import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      profissao: '',
    });
  }

  ngOnInit(): void {}

  createUser(): void {
    this.userService.postUser(this.userForm.value).subscribe((data) => {
      console.log(
        `Usuário ${data.nome} ${data.sobrenome} cadastrado com sucesso!`
      );
    });
  }
}
