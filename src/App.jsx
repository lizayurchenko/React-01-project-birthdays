import { useReducer } from "react";
import data from "./data";

const initialState = { people: data };

const reducer = (state, action) => {
  switch (action.type) {
    case "remove person":
      return {
        people: state.people.filter((person) => person.id !== action.id),
      };
    case "remove all":
      return {
        people: [],
      };
    case "add all":
      return {
        people: data,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const PeopleList = () => {
    return (
      <section>
        <h2 className="birthdays">{state.people.length} Birthdays today</h2>

        {state.people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div key={id} className="person">
              <img src={image} alt={name} />
              <container>
                <h4>{name} </h4>
                <p>{age} years old</p>
                <button
                  className="btn"
                  onClick={() => dispatch({ type: "remove person", id })}
                >
                  Remove
                </button>
              </container>
            </div>
          );
        })}
        <div className="toggle">
          <ToggleAll />
        </div>
      </section>
    );
  };

  const ToggleAll = () => {
    return (
      <div>
        {state.people.length ? (
          <button
            className="toggle-btn"
            onClick={() => dispatch({ type: "remove all" })}
          >
            remove all
          </button>
        ) : (
          <button
            className="toggle-btn"
            onClick={() => dispatch({ type: "add all" })}
          >
            add all
          </button>
        )}
      </div>
    );
  };
  return (
    <main>
      <PeopleList />
    </main>
  );
};
export default App;
