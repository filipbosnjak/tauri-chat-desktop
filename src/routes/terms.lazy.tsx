import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/terms")({
  component: () => <div>Hello /components/terms!</div>,
})
