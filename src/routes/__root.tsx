import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client"
import { ErrorLink, onError } from "@apollo/client/link/error"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Menu } from "@/components/menu"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkY2RhNzVmMC0xNWVhLTQ0Y2ItYWY1ZC1jMzZjZDViOGMyODkiLCJpYXQiOjE3MTcwMzAxNDksImV4cCI6MTcxNzAzMDIwOX0.afkEC8vGpoh8sgnoYmfrrlvTRUfsAKJFIfnST0sph9Q",
  },
})

export const Route = createRootRoute({
  component: () => (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="h-screen overflow-clip">
            <div
              className={cn(
                "h-screen overflow-auto border-t border-none bg-background pb-8",
                // "scrollbar-none"
                "scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md"
              )}
            >
              <Menu />
              <Toaster />
              <Outlet />
              <TanStackRouterDevtools />
            </div>
          </div>

          <TailwindIndicator />
        </ThemeProvider>
      </ApolloProvider>
    </>
  ),
})
