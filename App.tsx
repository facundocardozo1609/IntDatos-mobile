import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppStackNavigatior from "./src/navigation/StackNavigator";
import { NameProvider } from "./src/context/ProductNameContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <NameProvider>
      <QueryClientProvider client={queryClient}>
        <AppStackNavigatior />
      </QueryClientProvider>
    </NameProvider>
  );
}
