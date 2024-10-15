'use client';
import React from "react";
import Link from 'next/link'


export default function home(){
  return (
    <ul>
      <li>
        <Link href="/entrees">Entrees!!</Link>
      </li>
      <li>
        <Link href="/appetizers">Appetizers!!</Link>
      </li>
    </ul>
  )
}
