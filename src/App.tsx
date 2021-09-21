import { ContextFormProvider } from "./components/form/ContextForm";
import Router from "./router/Router";

export default function App() {
  return (
    <ContextFormProvider>
      <Router />
    </ContextFormProvider>
  );
}
