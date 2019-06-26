import { Injectable } from '@angular/core';
import { ApiService } from '../../../modules/core/services';

@Injectable()
export class PaginationResolver {

  constructor(private apiService: ApiService) {}

  resolve() {
    return this.apiService.fetchPaginationInfo();
  }

}
