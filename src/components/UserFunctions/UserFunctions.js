import axios from 'axios';

export const register = newUser => {
    return axios 
    .post('api/register',newUser, {
        headers:{ 'Content-Type' : 'application/json'}
    })
    .then(res =>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}

export const login = user => {
    return axios 
    .post('https://3mtestapi.000webhostapp.com/api/login',{
        email: user.email,
        password: user.password}, {
        headers:{ 'Content-Type' : 'application/json'}
    })
    // .then(json=>{
    //     localStorage.setItem('usertoken',json.data.token)
    // })
    .then(json => {
        localStorage.setItem('usertoken',json.data.token);
        if (json.data.success) {
          const token = json.data.token;
          let userData = {
            token,
            timestamp: new Date().toString()
          };
          let appState = {
            user: userData
          };
          localStorage["appState"] = JSON.stringify(appState);
        //   this.setState({
        //     user: appState.user
        //   });
        } else alert("Login Failed!");

      })
      .catch(err=>{
        console.log(err)
    })
}
export const getProfile = () => {
    return axios 
    .get('api/profile', {
        headers:{ Authorization : `Bearer ${localStorage.usertoken}`}
    })
    .then(res =>{
        console.log(res)
        return res.data
    })
    .catch(err=>{
        console.log(err)
    })
}