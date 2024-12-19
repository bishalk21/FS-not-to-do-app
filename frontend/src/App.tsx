import { useDispatch, useSelector } from "react-redux";
import NotTodoUI from "./components/todos/NotTodoUI";
import { Switch } from "./components/ui/switch";
import { changeTheme } from "./redux/reducers-actions/theme/themeSlice";
import { RootState } from "./redux/store";
import { useGetPokemonByNameQuery } from "./services/pokemonQuery";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleThemeChange = () => {
    dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  };

  const res = useGetPokemonByNameQuery("bulbasaur");

  const { data, error, isLoading } = res;

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

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
      <div className="pt-3 border border-b p-4 drop-shadow-md">
        <h1 className="font-bold">Learning Redux Toolkit Query with</h1>

        {error ? (
          "Oh no, there was an error"
        ) : (
          <div className="flex items-center gap-5">
            <h1>
              {data?.id}. {data?.species.name}
            </h1>
            <img src={data?.sprites.front_default} alt={data?.species.name} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
