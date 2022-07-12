import Router from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { parseCookies, setCookie } from 'nookies';

type SignInType = {
  email: string;
  password: string;
}

type AuthContextType = {
  token: string;
  signIn: (data: SignInType) => Promise<void>;
}

type AuthProviderType = {
  children?: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderType) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const { 'orange-user-token': token } = parseCookies()
    if (token) {
      setToken(token)
    }
    else {
      Router.push('/')
    }
  },[])

  async function signIn({ email, password }: SignInType) {
    const token = await fetch('http://localhost:1337/auth/local', {
      method: "POST",
      headers: {
        'Content-type': "application/json",
      },
      body: JSON.stringify(
       {
         identifier: email,
         password: password
       }
      )
    })
    .then((response) => response.json())
    .then((data) => data.jwt)
    .catch((error) => {
      console.log('An error occurred:', error.response);
    });
    setCookie({}, 'orange-user-token', token, { 
      maxAge: 60 * 60 * 6, //6 hours
    })
    setToken(token)
    Router.push('/lists/foods') 
  }

  return (
    <AuthContext.Provider value={ { signIn, token } }>
      {children}
    </AuthContext.Provider>
  )
}