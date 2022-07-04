import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  userId: any = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      profissao: '',
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      console.log(this.userId);
      if (this.userId) {
        this.userService.getUserById(this.userId).subscribe({
          next: (data) =>
            this.userForm.patchValue({
              id: data.id,
              nome: data.nome,
              sobrenome: data.sobrenome,
              idade: data.idade,
              profissao: data.profissao,
            }),
        });
      }
    });
  }

  createUser(): void {
    this.userService.postUser(this.userForm.value).subscribe({
      next: (data) =>
        console.log(
          `Usuário ${data.nome} ${data.sobrenome} cadastrado com sucesso!`
        ),
      error: (error) => console.log(error),
      complete: () => this.router.navigate(['/']),
    });
    // this.userForm.patchValue({
    //   nome: '',
    //   sobrenome: '',
    //   idade: '',
    //   profissao: '',
    // });
  }

  updateUser(): void {
    this.userService.putUser(this.userId, this.userForm.value).subscribe({
      next: (data) =>
        console.log(
          `Usuário ${data.nome} ${data.sobrenome} atualizado com sucesso!`
        ),
      error: (error) => console.log(error),
      complete: () => this.router.navigate(['/']),
    });
  }

  actionButton() {
    if (this.userId) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }
}
