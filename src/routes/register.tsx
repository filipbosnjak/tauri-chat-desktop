import React from "react"
import { RegisterAuthForm } from "@/routes/components/_register-auth-form"
import ThemeToggle from "@/routes/components/_theme-toggle"
import { createFileRoute, Link } from "@tanstack/react-router"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const Register = () => {
  return (
    <div className="container relative grid  h-screen flex-col items-center justify-center lg:max-w-none lg:px-0">
      <Link
        to="/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <ThemeToggle className={"absolute left-4 top-4 md:left-8 md:top-8"} />
      <div className="max-w-[400px] lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <RegisterAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
export const Route = createFileRoute("/register")({
  component: Register,
})
