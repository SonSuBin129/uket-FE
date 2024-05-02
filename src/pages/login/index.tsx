import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { GOOGLE_LOGIN_URL, KAKAO_LOGIN_URL } from "@/constants/auth_url";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center h-full">
      <header className="container mt-2 w-full h-fit">
        <div className="text-2xl font-bold">Uket</div>
      </header>
      <main className="flex flex-col justify-evenly w-full h-full">
        <section className="container flex flex-col gap-4 w-full">
          <h1 className="text-2xl font-black">
            <p>학교 축제 티켓을</p>
            <p>예매해 볼까요?</p>
          </h1>
          <h2 className="text-[#454545]">
            회원가입/로그인 방식을 선택해 주세요.
          </h2>
        </section>
        <section className="container flex flex-col gap-2 justify-center items-center w-full">
          <Link to={KAKAO_LOGIN_URL} className="block w-full">
            <Button className="h-12 w-full rounded-xl bg-[#FEE500] text-base text-[#191919] hover:bg-[#eed600]">
              카카오 계정으로 계속하기
            </Button>
          </Link>
          <Link to={GOOGLE_LOGIN_URL} className="block w-full">
            <Button className="w-full h-12 text-base text-black bg-transparent rounded-xl border hover:bg-primary-foreground">
              구글 계정으로 계속하기
            </Button>
          </Link>
        </section>
      </main>
    </main>
  );
};
export default LoginPage;