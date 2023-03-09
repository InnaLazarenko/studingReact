import React, { useEffect, useRef, useState } from "react";
import useHttp from "../../hooks/http";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadedIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();

  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFilter}"`;

        sendRequest(
          "https://hooks-8da86-default-rtdb.firebaseio.com/ingredients.json" +
            query,
          "GET"
        );

        /* fetch(
          "https://hooks-8da86-default-rtdb.firebaseio.com/ingredients.json" +
            query
        )
          .then((response) => {
            return response.json();
          })
          .then((responseData) => {
            const loadedIngredients = [];

            for (const key in responseData) {
              loadedIngredients.push({
                id: key,
                title: responseData[key].ingridient.title,
                amount: responseData[key].ingridient.amount,
              });
            }

            onLoadedIngredients(loadedIngredients);
          }); */
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, /* onLoadedIngredients, */ inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];

      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].ingridient.title,
          amount: data[key].ingridient.amount,
        });
      }

      onLoadedIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadedIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}> {error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            type="text"
            ref={inputRef}
            value={enteredFilter}
            onChange={(e) => setEnteredFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
