"use client";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";


export default async function dashboard() {
  
  return (
    <div className="min-h-screen flex flex-col text-white bg-red-400">
      Done
    </div>
  );
}