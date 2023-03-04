import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileUser: User = {
    idUser: 0,
    firstName: '',
    lastName: '',
    email: 'nelsondmondragon@gmail.com'
  };
  token: string = '';


  counter: number = 0;
  constructor(private tokenService: TokenService,
    private usersService: UserService,
    private storeService: StoreService) {
  }
  ngOnInit(): void {
    // this.profile();

    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });

  }



  profile() {
    let token = this.tokenService.getToken();
    if (this.token) {
      console.log(this.token);
      console.log("sss");
      this.usersService.profile(this.token).subscribe((data) => {
        this.profileUser.firstName = 'Nelson Cortes';
      });
    }

  }

}
