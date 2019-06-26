import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '.'

@Injectable()
export class UsersResolvere implements Resolve<any> {

  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): any {
    const page: number = route.queryParams['page'] || 1;
    return this.apiService.fetchUsers(page);
  }

}
