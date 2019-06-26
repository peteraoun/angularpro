import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/modules/core';
import { UserInterface } from 'src/interfaces';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserInterface;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
    const userId: number = this.activatedRoute.snapshot.params['id'];
    this.apiService.fetchUserById(userId).subscribe(user => {
      this.user = user;
    });
    
  }

  back(): void {
    this.router.navigate(['./users']);}

}


