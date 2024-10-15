'use client';
import React from "react";
import Link from 'next/link'
import {useRouter} from "next/navigation";


export default function home(){
  const router = useRouter();
  return (
    <><ul>
      <li>
        <button onClick={() => router.push('/entrees')}>
          Entrees!!
        </button>
      </li>
      <li>
      <button onClick={() => router.push('/appetizers')}>
          Appetizers!!
        </button>
      </li>
    </ul></>
  )
}
