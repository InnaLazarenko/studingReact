import { useCallback, useReducer } from "react";

const initialState = {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null,
  };

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier,
      };
    case "RESPONSE":
      return {
        ...currentHttpState,
        loading: false,
        data: action.responseData,
        extra: action.extra,
      };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("Should not be reached!");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const clear = useCallback(() =>  dispatchHttp({ type: "CLEAR" }), []);

  const sendRequest = useCallback(
    (url, method, body, requestExtra, requestIdentifier) => {
      dispatchHttp({ type: "SEND", identifier: requestIdentifier });

      fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      })
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          dispatchHttp({
            type: "RESPONSE",
            responseData: responseData,
            extra: requestExtra,
          });
        })
        .catch((err) => {
          dispatchHttp({ type: "ERROR", errorMessage: err.message });
        });
    },
    []
  );

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    requestExtra: httpState.extra,
    requestIdentifier: httpState.identifier,
    clear: clear,
  };
};

export default useHttp;
