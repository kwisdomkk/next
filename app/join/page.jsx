import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Join() {
  return (
    <div className="custom-width">
      <div className="max-w-screen-sm mx-auto w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>회원가입</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              이미 회원이시라면{" "}
              <Link className="hover:text-primary hover:font-bold" href="/login">
                로그인
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-y-4">
              <Input type="text" placeholder="아이디" required />
              <Input type="text" placeholder="이메일" required />
              <Input type="password" placeholder="패스워드" required />
              <Input type="password" placeholder="패스워드 확인" required />
              <Button type="submit" className="w-full">
                회원가입
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
