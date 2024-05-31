import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/privacy')({
  component: () => <div>Hello /privacy!</div>
})