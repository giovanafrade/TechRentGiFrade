import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const LoginForm = () => {
  return (
    <div className="flex mt-27">
      <div className="py-10 md:py-20 max-w-lg px-4 sm:px-0 mx-auto w-full">
        <Card className="max-w-lg px-6 py-8 sm:p-12 relative gap-6 flex justify-start">
          <CardHeader className="text-center gap-6 p-0">
            <div className="mx-auto">
              <a href="">
                <img
                  src="https://images.shadcnspace.com/assets/logo/logo-icon-black.svg"
                  alt="shadcnspace"
                  className="dark:hidden h-10 w-10" />
                <img
                  src="https://images.shadcnspace.com/assets/logo/logo-icon-white.svg"
                  alt="shadcnspace"
                  className="hidden dark:block h-10 w-10" />
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <CardTitle className="text-2xl font-medium text-card-foreground">
                Bem-vindo a TechRent
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground font-normal">
                Faça seu Login
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <form>
              <FieldGroup className="gap-6">

                <div className="flex flex-col gap-4">
                  <Field className="gap-1.5">
                    <FieldLabel htmlFor="email" className="text-sm text-muted-foreground font-normal">
                      Email
                    </FieldLabel>
                    <Input
                      id="email_login"
                      type="email"
                      placeholder="jose@gmail.com"
                      required
                      className="dark:bg-background h-9 shadow-xs" />
                  </Field>
                  <Field className="gap-1.5">
                    <FieldLabel htmlFor="password" className="text-sm text-muted-foreground font-normal">
                      Senha
                    </FieldLabel>

                    <Input
                      id="password_senha"
                      type="password"
                      placeholder="Entre com Sua Senha"
                      required
                      className="dark:bg-background h-9 shadow-xs" />
                  </Field>
                </div>

                <Field orientation="horizontal" className="justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox id="terms" defaultChecked className="cursor-pointer" />
                    <FieldLabel
                      htmlFor="terms"
                      className="text-sm text-primary font-normal cursor-pointer">
                      Lembrar de Mim
                    </FieldLabel>
                  </div>
                </Field>

                <Field className="gap-4">
                  <Button
                    type="submit"
                    size={"lg"}
                    className="rounded-lg h-10 hover:bg-primary/80 cursor-pointer">
                    Entrar
                  </Button>
                  <FieldDescription className="text-center text-sm font-normal text-muted-foreground">
                    Não tem uma conta?{" "}
                    <a href="#" className="font-medium text-card-foreground no-underline!">
                      Criar uma Conta
                    </a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>

  );
};

export default LoginForm;
