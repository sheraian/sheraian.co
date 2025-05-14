import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";

import { api } from "./redux/apiSlice";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import globalStyles from "./styles/global.css";
import NotFound from "./components/NotFound";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/app/styles/global.css" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <div className="w-full pt-16 lg:pt-28 z-10">{children}</div>

        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <NotFound />;
}
