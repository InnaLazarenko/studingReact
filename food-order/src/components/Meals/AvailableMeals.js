import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const responce = await fetch("http:.../meals.json");
      if (!responce.ok) {
        throw new Error("Somethis went wrong");
      }

      const responceData = await responce.json();

      const loadedMeals = [];

      for (const key in responceData) {
        loadedMeals.push({
          id: key,
          name: responceData[key].name,
          description: responceData[key].description,
          price: responceData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

      fetchMeals().catch(error => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  if (isLoading) {
    return (
      <Card>
        <p>loading ....</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <p style={{color: 'red'}}>{error}</p>
      </Card>
    );
  }


  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
