"use server";

import prisma from "@/lib/db";
import bcrypt from 'bcrypt';
import { getIronSession } from 'iron-session';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData){
  const username=formData.get("username");
  const password=formData.get("password");

  const user=await prisma.user.findUnique({
    where: {
      username: username,
    },
    select: {
      id:true,
      password:true
    },
  });

  if(user) {
    const ok = await bcrypt.compare(password,user.password);

    if(ok){
      const session=await getIronSession(cookies(),{
        cookieName:"yj",
        password:process.env.COOKIE_PASSWORD
      });
      session.id=user.id;
      await session.save();

      return redirect("/settings")
    }
  }

  console.log(username,password);
}