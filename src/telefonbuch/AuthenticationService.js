
class AuthenticationService {


RegisterSuccessfulLogin(username,Password){


 sessionStorage.setItem('authenticatedUser',username);

}

logout(){

sessionStorage.removeItem('authenticatedUser');

}
//here is a method to find out of the user has successfully logged in 

isUserLoggedIn(){

    let user=sessionStorage.getItem('authenticatedUser')
    if(user===null) return false;
     return true;
}

}
export default new AuthenticationService()