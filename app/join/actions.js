"use server";

import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { z } from "zod";

const checkUniqueUsername = async (username) => {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
    },
  });
  // if (user) {
  //   return false;
  // } else {
  //   return true;
  // }
  return Boolean(!user);
};

const checkUniqueEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(!user);
};

const checkPasswords = ({ password, password2 }) => password === password2;

const formSchema = z
  .object({
    username: z.string().min(2, "아이디는 최소 2글자 이상이어야 합니다.").refine(checkUniqueUsername, "입력하신 아이디는 이미 사용중입니다."),
    email: z.string().email("이메일 형식이 아닙니다.").refine(checkUniqueEmail, "입력하신 이메일은 이미 사용중입니다."),
    password: z.string(),
    password2: z.string(),
  })
  .refine(checkPasswords, {
    message: "패스워드와 패스워드 확인은 같아야 합니다.",
    path: ["password2"],
  });

export async function createAccount(prevState, formData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    password2: formData.get("password2"),
  };
  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    return result.error.flatten();
  }

  // const username = formData.get("username");
  // const email = formData.get("email");
  // const password = formData.get("password");
  // const password2 = formData.get("password2");
  const hashedPassword = await bcrypt.hash(result.data.password, 10);

  await prisma.user.create({
    data: {
      username: result.data.username,
      email: result.data.email,
      password: hashedPassword,
    },
  });

  return redirect("/settings")
}
