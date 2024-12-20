import NotTodoUI from "./components/todos/NotTodoUI";
import { ThemeProvider } from "./components/theme/theme-provider";
import { ModeToggle } from "./components/theme/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative w-full h-screen flex justify-center flex-col items-center">
        <div className="absolute top-0 left-0 p-10">
          <ModeToggle />
        </div>
        <NotTodoUI />
      </div>
    </ThemeProvider>
  );
}

export default App;
