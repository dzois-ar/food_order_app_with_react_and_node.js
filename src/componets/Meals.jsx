import MealItem from './Mealltem.jsx';

export default function Meals({ meals }) {
    return (
        <ul id="meals">
            {meals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}
