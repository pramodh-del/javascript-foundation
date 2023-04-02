const pass = "hello123";
let password=(x)=>{
    if(x===pass){
        console.log("Password Matched.Password validation Successful.");

    }
    else{
        console.log("Password didn't match. Password validation unsuccessfu");
    }
    

}
password("hello123");