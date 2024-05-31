import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/nonlazy')({
  component: () => <div>Hello /nonlazy!</div>
})