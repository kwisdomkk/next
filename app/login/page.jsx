import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { login } from "./actions";

export default function Login() {
  return (
    <div className="custom-width">
      <div className="max-w-screen-sm mx-auto w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>
              아직 회원이 아니라면{" "}
              <Link href="/join" className="hover:text-primary hover:font-bold">
                회원가입
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={login} className="flex flex-col gap-y-4">
              <Input name="username" type="text" placeholder="아이디" required />
              <Input name="password" type="password" placeholder="패스워드" required />
              <Button type="submit" className="w-full">
                로그인
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
