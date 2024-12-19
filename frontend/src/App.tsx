import { useDispatch, useSelector } from "react-redux";
import NotTodoUI from "./components/todos/NotTodoUI";
import { Switch } from "./components/ui/switch";
import { changeTheme } from "./app/reducers-actions/theme/themeSlice";
import { RootState } from "./app/store";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleThemeChange = () => {
    dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className="w-full h-screen flex justify-center flex-col items-center"
      style={{
        backgroundColor: theme === "light" ? "#f3f4f6" : "#1f2937",
        color: theme === "light" ? "#111827" : "#f3f4f6",
      }}
    >
      <Switch onClick={handleThemeChange} />
      <h1>Not To Do App</h1>
      <NotTodoUI />
    </div>
  );
}

export default App;
