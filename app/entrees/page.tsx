'use client';
import React from "react";
import Link from 'next/link'
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
  return (
    <text>
    <ul>
      <li>
        <Link href="/home">Home!!</Link>
      </li>
      <li>
        <Link href="/appetizers">Appetizers!!</Link>
      </li>
    </ul>
    <p>{display}</p>
    </text>
  )
}