import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/lib/theme";
import ReduxProvider from "@/lib/redux/provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <ReduxProvider>{children}</ReduxProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
