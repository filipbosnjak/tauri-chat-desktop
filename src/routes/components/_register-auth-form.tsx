import * as React from "react"
import {
  SomethingWentWrongToast,
  SuccessToast,
} from "@/routes/components/_toast-utils"
import { Label } from "@radix-ui/react-label"
import { useNavigate } from "@tanstack/react-router"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

import { useRegisterMutation } from "../../../generated/graphql/mutations/Register.generated"

export type RegisterInput = {
  username: string
  password: string
  confirmPassword: string
}
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegisterAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading] = React.useState<boolean>(false)

  const navigate = useNavigate()

  const [registerUser, { error }] = useRegisterMutation()
  const {
    handleSubmit,
    watch,
    formState: { errors, isValid },
    control,
  } = useForm<RegisterInput>({
    defaultValues: {
      confirmPassword: "",
      username: "",
      password: "",
    },
    mode: "onChange",
  })

  console.log(error?.graphQLErrors)

  const onSubmitHF: SubmitHandler<RegisterInput> = async ({
    username,
    password,
  }: RegisterInput) => {
    console.log("calling")
    const { data } = await registerUser({
      variables: {
        registerInput: {
          username,
          password,
        },
      },
    })
    if (data?.register.error) {
      SomethingWentWrongToast(data?.register?.error ?? "")
    } else {
      SuccessToast("Registered successfully")
      navigate({
        to: "/login",
      })
    }
  }
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmitHF)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="m-0.5 text-sm text-gray-400" htmlFor="username">
              Username
            </Label>
            <Controller
              name="username"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <>
                  <Input
                    {...field}
                    id={field.name}
                    placeholder="name@example.com"
                    type="text"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                  {errors.username?.type === "required" && (
                    <p className={"my-1 text-sm text-red-600"}>
                      This field is required
                    </p>
                  )}
                </>
              )}
            />

            <Label className="m-0.5 text-sm text-gray-400" htmlFor="password">
              Password
            </Label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <>
                  <Input
                    {...field}
                    id="password"
                    placeholder=""
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                  {errors.password?.type === "required" && (
                    <p className={"my-1 text-sm text-red-600"}>
                      This field is required
                    </p>
                  )}
                </>
              )}
            />

            <Label
              className="m-0.5 text-sm text-gray-400"
              htmlFor="confirmPassword"
            >
              Confirm password
            </Label>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: true,
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match"
                  }
                },
              }}
              render={({ field }) => (
                <>
                  <Input
                    {...field}
                    id="confirmPassword"
                    placeholder=""
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                  {errors.confirmPassword?.type === "required" && (
                    <p className={"my-1 text-sm text-red-600"}>
                      This field is required
                    </p>
                  )}
                  {errors.confirmPassword?.type === "validate" && (
                    <p className={"my-1 text-sm text-red-600"}>
                      "Your passwords do no match"
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <Button disabled={isLoading || !isValid}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Register with Email
          </Button>
        </div>
      </form>
    </div>
  )
}
