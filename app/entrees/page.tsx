'use client';
import React from "react";
import {useRouter} from "next/navigation";
import { useState, useEffect } from 'react'
let display = "test";
fetch("entreeText.txt")
  .then(response => response.text())
  .then(text => {
    // Do something with the fetched text
    display = text;
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error fetching file:', error);
  });

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
      <button onClick={() => router.push('/appetizers')}>
          Appetizers!!
        </button>
      </li>
    </ul>
    <p>{display}</p>
    </text></>
  )
}