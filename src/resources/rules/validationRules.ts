import { defineRule } from "vee-validate";

defineRule("required", (value: any) => {
  if (value) return true;
  return "Esse campo é obrigatório";
});

defineRule("email", (email: string) => {
  const regExp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regExp.test(email) || "E-mail inválido";
});
