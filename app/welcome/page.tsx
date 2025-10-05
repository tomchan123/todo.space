import type { Metadata } from "next";
import { Button } from "@/components/Button";
import Field from "@/components/form/Field";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Welcome | todo.space",
};

export default function WelcomePage() {
  return (
    <div className="flex flex-col h-full justify-center items-center gap-6">
      <Logo />
      <main className="border-border border rounded-xl w-full gap-4 flex flex-col overflow-hidden md:max-w-[580px]">
        <form id="createAccountForm" className="flex flex-col gap-4 p-6">
          <div className="mb-2">
            <h1 className="text-3xl font-bold">Welcome</h1>
            <p className="text-xs leading-tight text-foreground/70">
              Please create an account to get started.
            </p>
          </div>
          <Field>
            <Label>Avatar</Label>
            {/** TODO: avatar selection */}
            <div className="h-18 border-border border rounded-xl flex justify-center items-center gap-4 overflow-hidden">
              <div className="size-13 border-border border rounded-full"></div>
              <div className="size-13 border-border border rounded-full"></div>
              <div className="size-13 border-border border rounded-full"></div>
              <div className="size-13 border-border border rounded-full"></div>
            </div>
          </Field>
          <Field>
            <Label>Name</Label>
            <Input type="text" name="name" />
          </Field>
          <Button type="submit">Create</Button>
        </form>
        <div className="bg-muted p-6 flex flex-col gap-4">
          <p className="text-xs leading-tight text-foreground/70">
            Already has an account?
          </p>
          <Button variant="outline">Log In</Button>
        </div>
      </main>
    </div>
  );
}
