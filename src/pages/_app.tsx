import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { theme } from "@/theme/nexxsic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
      retryOnMount: false,
      refetchInterval: false,
    },
  },
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cacheRtl}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}
