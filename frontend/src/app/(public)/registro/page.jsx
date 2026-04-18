import Link from "next/link";
import RegisterForm from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <div className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.72)_0%,rgba(236,244,255,0.92)_46%,rgba(225,247,245,0.95)_100%)]" />
      <div className="absolute left-1/2 top-[-9rem] -z-10 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-4rem] -z-10 h-[18rem] w-[18rem] rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="w-full max-w-[560px] space-y-4">
        <RegisterForm />
      </div>
    </div>
  );
}
