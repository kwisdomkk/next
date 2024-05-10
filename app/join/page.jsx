"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function Join() {
  const [state, formAction] = useFormState(createAccount, null);
  return (
    <div className="custom-width">
      <div className="max-w-screen-sm mx-auto w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>회원가입</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              이미 회원이시라면{" "}
              <Link className="hover:text-primary hover:font-bold" href="login">
                {" "}
                로그인
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="flex flex-col gap-y-4">
              <Input name="username" type="text" placeholder="아이디" required />
              {state?.fieldErrors.username && (<span className="text-red-500 text-sm">{state.fieldErrors.username}</span>)}
              <Input name="email" type="text" placeholder="이메일" required />
              {state?.fieldErrors.email && (<span className="text-red-500 text-sm">{state.fieldErrors.email}</span>)}
              <Input name="password" type="password" placeholder="패스워드" required />
              <Input name="password2" type="password" placeholder="패스워드 확인" required />
              {state?.fieldErrors.password2 && (<span className="text-red-500 text-sm">{state.fieldErrors.password2}</span>)}
              <Button className="w-full" type="submit">
                회원가입
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
