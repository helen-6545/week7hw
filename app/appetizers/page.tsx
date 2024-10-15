'use client';
import React from "react";
import Link from 'next/link'

export default function home(){
  return (
    <text>
    <ul>
      <li>
        <Link href="/home">Home!!</Link>
      </li>
      <li>
        <Link href="/entrees">Entrees!!</Link>
      </li>
    </ul>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </text>
  )
}