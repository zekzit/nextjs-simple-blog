"use client"
import React, {useState} from 'react';
import { doLogin } from './action';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      setUsername('');
      setPassword('');
      
      doLogin({username, password});
    };
  
    return (
      <div className="container mx-auto w-full max-w-sm p-4">
        <div className="pt-8 pb-6">
                <h1 className="text-2xl font-bold mb-2">Login</h1>
            </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="username" className="text-sm font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <label htmlFor="password" className="text-sm font-medium mt-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary mt-4 w-full">
            Login
          </button>
        </form>
      </div>
    );
  }