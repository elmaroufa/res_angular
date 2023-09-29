import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../../services/reqres.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users : User[] = [];
  loading: boolean = false;

  constructor( private reqresService: ReqresService, private router: Router ) {
    this.getUsers();
  }

  ngOnInit(): void {

  }

  getUsers() {
    this.loading = true;
    this.reqresService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
        this.loading = false;
        //console.log(res);
      },
      (err) => {
        console.error(err);
        }
      );
  }
  userDetails( id: number ) {
    console.log(id);
    this.router.navigate(['user', id]);
    }

  addUser(): void{
    this.router.navigate(['add']);
  }

  deleteUser(user: any){
    this.users = this.users.filter(u => u !== user);
    this.reqresService.deleteUser(user).subscribe();
  }
}
