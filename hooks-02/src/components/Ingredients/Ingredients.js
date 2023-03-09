import React, {
  useCallback,
  useEffect,
  useReducer /* , useState */,
} from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingridient];
    case "REMOVE":
      return currentIngredients.filter((item) => item.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

const Ingredients = () => {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);

  const {
    isLoading,
    data,
    error,
    sendRequest,
    requestExtra,
    requestIdentifier,
    clear,
  } = useHttp();

  //const [ingredients, setIngredients] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);

  useEffect(() => {
    if (!isLoading && requestIdentifier === "REMOVE_INGREDIENT") {
      dispatch({ type: "REMOVE", id: requestExtra });
    } else if (!isLoading && !error && requestIdentifier === "ADD_INGREDIENT") {
      dispatch({
        type: "ADD",
        ingridient: { id: data.name, ...requestExtra },
      });
    }
  }, [data, requestExtra, requestIdentifier, isLoading, error]);

  const addIngredientHandler = useCallback((ingridient) => {
    sendRequest(
      "https://hooks-8da86-default-rtdb.firebaseio.com/ingredients.json",
      "POST",
      JSON.stringify({ ingridient }),
      ingridient,
      "ADD_INGREDIENT"
    );

    //setIsLoading(true);
    /*     dispatchHttp({ type: "SEND" });

    fetch("https://hooks-8da86-default-rtdb.firebaseio.com/ingredients.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingridient }),
    })
      .then((response) => {
        // setIsLoading(false);
        dispatchHttp({ type: "RESPONSE" });
        return response.json();
      })
      .then((responseData) => {
        // setIngredients((prev) => {
         // return [
         //   ...prev,
        //    {
         //     id: responseData.name,
         //     ...ingridient,
        //   },
         // ];
        //});
        dispatch({
          type: "ADD",
          ingridient: { id: responseData.name, ...ingridient },
        });
      })
      .catch((err) => {
        //setError(err.message);
        //setIsLoading(false);

        dispatchHttp({ type: "ERROR", errorMessage: err.message });
      }); */
  }, [sendRequest]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    //setIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const removeIngredientHandler = useCallback(
    (id) => {
      //setIsLoading(true);
      //dispatchHttp({type: 'SEND'});

      /* fetch(
      `https://hooks-8da86-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        //setIsLoading(false);
        //setIngredients((prevState) => prevState.filter((item) => item.id !== id));
        dispatchHttp({type: 'RESPONSE'});

        dispatch({ type: "REMOVE", id: id });
      })
      .catch((err) => {
         //setError(err.message);
        //setIsLoading(false);

        dispatchHttp({type: 'ERROR', errorMessage: err.message});
      }); */

      sendRequest(
        `https://hooks-8da86-default-rtdb.firebaseio.com/ingredients/${id}.json`,
        "DELETE",
        null,
        id,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );

/*   const clearError = useCallback(() => {
    //setError(null);

    //dispatchHttp({ type: "CLEAR" });

  }, []); */

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}> {error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadedIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
