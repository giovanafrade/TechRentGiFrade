"use client";

import { useState } from "react";
import { ArrowRightIcon, LockKeyholeIcon, MailIcon, UserIcon, UsersIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authService } from "@/services/auth.service";
import { Button } from "@/components/ui/button";

const ACCESS_LEVEL_OPTIONS = [
  { value: "cliente", label: "Cliente" },
  { value: "tecnico", label: "Tecnico" },
  { value: "admin", label: "Admin" },
];

export default function RegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senhaSemHash: "",
    nivel_acesso: "cliente",
  });
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setFeedback("");
    setLoading(true);

    try {
      await authService.register(form);
      setFeedback("Conta criada com sucesso. Redirecionando para o login...");
      router.push("/login");
    } catch (err) {
      setError(err.message || "Falha ao registrar conta.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-[28px] border border-white/10 bg-white/85 p-6 text-foreground shadow-2xl shadow-slate-950/10 backdrop-blur md:p-8"
    >
      <div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Criar conta</h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Cadastre usuarios com perfis diferentes para operar chamados, manutencoes e gestao do parque.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="nome" className="app-form-label">
            Nome completo
          </label>
          <div className="app-form-shell">
            <UserIcon />
            <input
              id="nome"
              type="text"
              value={form.nome}
              onChange={(event) => updateField("nome", event.target.value)}
              required
              className="bg-transparent"
              placeholder="Nome do usuario"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="email-registro" className="app-form-label">
            E-mail
          </label>
          <div className="app-form-shell">
            <MailIcon />
            <input
              id="email-registro"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              required
              className="bg-transparent"
              placeholder="usuario@empresa.com"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="senha" className="app-form-label">
            Senha
          </label>
          <div className="app-form-shell">
            <LockKeyholeIcon />
            <input
              id="senha"
              type="password"
              value={form.senhaSemHash}
              onChange={(event) => updateField("senhaSemHash", event.target.value)}
              required
              className="bg-transparent"
              placeholder="Minimo 6 caracteres com letra maiuscula e numero"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="perfil" className="app-form-label">
            Perfil
          </label>
          <div className="app-form-shell">
            <UsersIcon />
            <select
              id="perfil"
              value={form.nivel_acesso}
              onChange={(event) => updateField("nivel_acesso", event.target.value)}
              className="bg-transparent"
            >
              {ACCESS_LEVEL_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {error ? (
        <div className="rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      {feedback ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {feedback}
        </div>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="h-14 w-full rounded-2xl border-0 bg-[linear-gradient(135deg,#1e3a8a_0%,#1d4ed8_45%,#2563eb_100%)] px-6 text-base font-semibold text-white shadow-[0_20px_40px_-18px_rgba(37,99,235,0.72)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-18px_rgba(29,78,216,0.6)]"
      >
        {loading ? "Criando conta..." : "Cadastrar usuario"}
        <ArrowRightIcon className="transition-transform duration-300 group-hover/button:translate-x-1" />
      </Button>
      <p className="text-center text-sm text-slate-600">
        Ja tem conta?{" "}
        <Link href="/login" className="font-semibold text-slate-950">
          Entrar
        </Link>
      </p>
    </form>
  );
}
