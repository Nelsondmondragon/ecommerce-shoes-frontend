export interface User {
  idUser: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

export interface CreateUser extends Omit<User, 'idUser'> {

}
