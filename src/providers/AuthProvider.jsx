import axios from "axios";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";



export const AuthContext =createContext();
const provider = new GoogleAuthProvider();
const auth =getAuth(app)
const AuthProvider =({children})=>{
    const [user,setUser]=useState();
    const [loading,setLoading]=useState(true)

    const createUser =(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
        
    };
    const signIn =(email,password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
        
    };
    const logOut =()=>{
        setLoading(true);
       return signOut(auth);
    };

    const updateUser =(name,photo)=>{
       return  updateProfile(auth.currentUser,{
        displayName: name, photoURL: photo
       })
    };

    const googleSignIn =()=>{
      setLoading(true)
      return signInWithPopup(auth,provider)
    };

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      console.log('current-user',currentUser)
      //get & set token using axios post
      if(currentUser){
        axios
          .post("http://localhost:5000/jwt",{email:currentUser.email})
          .then(data => {
            console.log(data.data.token)
            //set access token to local storage
            localStorage.setItem('access-token',data.data.token)
            setLoading(false);
          })
          .catch(err => console.error(err));
      }
      //remove token while loging out
      else{
        localStorage.removeItem('access-token')
      }

      
     });
     return () =>unSubscribe();
    },[]);

const authInfo={
user,
loading,
signIn,
createUser,
updateUser,
googleSignIn,
logOut
}

return (
    <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
);
};
export default AuthProvider;