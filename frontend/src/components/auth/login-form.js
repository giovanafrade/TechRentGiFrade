"use client";

import { useState } from "react";
import { ArrowRightIcon, LockKeyholeIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setSession } from "@/lib/auth-storage";
import { getHomeByRole } from "@/lib/route-guard";
import { authService } from "@/services/auth.service";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await authService.login({ email, senha });
      setSession({ token: data.token, user: data.usuario });
      router.replace(getHomeByRole(data.usuario?.nivel_acesso));
    } catch (err) {
      setError(err.message || "Falha ao autenticar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-8 rounded-[32px] border border-white/10 bg-white/85 p-8 text-foreground shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl md:gap-9 md:p-10"
    >
      <div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Bem-vindo novamente a TechRent</h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          Faça seu Login
        </p>
      </div>

      <div className="grid gap-5">
        <div className="grid gap-3">
          <label htmlFor="email" className="app-form-label">
            E-mail
          </label>
          <div className="app-form-shell">
            <MailIcon />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="voce@empresa.com"
            />
          </div>
        </div>

        <div className="grid gap-3">
          <label htmlFor="password" className="app-form-label">
            Senha
          </label>
          <div className="app-form-shell">
            <LockKeyholeIcon />
            <input
              id="password"
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              required
              placeholder="Digite sua senha"
            />
          </div>
        </div>
      </div>

      {error ? (
        <div className="rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="h-14 w-full rounded-2xl border-0 bg-[linear-gradient(135deg,#1e3a8a_0%,#1d4ed8_45%,#2563eb_100%)] px-6 text-base font-semibold text-white shadow-[0_20px_40px_-18px_rgba(37,99,235,0.72)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-18px_rgba(29,78,216,0.6)]"
      >
        {loading ? "Entrando..." : "Entrar agora"}
        <ArrowRightIcon className="transition-transform duration-300 group-hover/button:translate-x-1" />
      </Button>
      <p className="text-center text-sm text-slate-600">
        Não tem uma conta?{" "}
        <Link href="/registro" className="font-semibold text-slate-950 ">
          Criar agora
        </Link>
      </p>
    </form>
  );
}
