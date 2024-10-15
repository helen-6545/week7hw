'use client';
import React from "react";
import {useRouter} from "next/navigation";

export default function home(){
  const router = useRouter();
  return (
    <><text>
    <ul>
      <li>
      <button onClick={() => router.push('/home')}>
          Home!!
        </button>
      </li>
      <li>
      <button onClick={() => router.push('/entrees')}>
          Entrees!!
        </button>
      </li>
    </ul>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </text></>
  )
}