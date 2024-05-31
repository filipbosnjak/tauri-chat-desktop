import React from "react"
import { ApolloError } from "@apollo/client"

import { ToastAction } from "@/components/ui/toast"
import { toast } from "@/components/ui/use-toast"

export type RegisterSuccessProps = {
  email: string
  password: string
}

export type SuccessToastProps = {
  title: string
  description: string
  action: React.ReactElement | null
}

export const SuccessfulRegistrationToast = (data: RegisterSuccessProps) => {
  toast({
    title: "User registration successful!",
    description: "Yaay! You have successfully registered.",
    action: (
      <ToastAction
        onClick={() => {
          //signin
          //redirect to home
        }}
        altText="Home"
      >
        Home
      </ToastAction>
    ),
  })
}

export const SuccessToastWithAction = ({
  title,
  description,
  action,
}: SuccessToastProps) => {
  toast({
    title,
    description,
    action: action ?? <></>,
  })
}

export const MessageSentSuccessfulyToast = () => {
  toast({
    title: "Message sent successfully!",
    description: "",
    action: <ToastAction altText="Home">OK</ToastAction>,
  })
}

export const SuccessToast = (title: string) => {
  toast({
    title,
    description: "",
    action: <ToastAction altText="Home">OK</ToastAction>,
  })
}

export const SomethingWentWrongToast = (message: String) => {
  toast({
    variant: "destructive",
    title: "Uh oh! Something went wrong.",
    description: `${message}`,
    action: <ToastAction altText="Try again">Try again</ToastAction>,
  })
}

export const NotAuthenticatedErrorToast = () => {
  SomethingWentWrongToast("Not authenticated")
}

export const ifNotAuthenticatedError = (error: ApolloError | undefined) => {
  if (error?.graphQLErrors[0].extensions.code === "UNAUTHENTICATED") {
    NotAuthenticatedErrorToast()
  }
}
