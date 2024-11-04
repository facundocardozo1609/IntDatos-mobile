import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppStackNavigatior from "./src/navigation/StackNavigator";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStackNavigatior />
    </QueryClientProvider>
  );
}
