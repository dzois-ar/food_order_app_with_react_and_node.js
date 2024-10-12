import useHttp from '../hooks/useHttp.js';
import MealItem from './Mealltem.jsx';
import Error from './Error.jsx';
const requstConfing = {}

export default function Meals() {
    const { data : loadedMes , isLoading, error } = useHttp('http://localhost:3000/meals', requstConfing, []);
     
   
    if (isLoading) {
        return <p className="center">Fetching meals...</p>
    }

    if (error) {
        return <Error title='Failed to fetch meals' message={error} />;
    }

    // if (!data) {
    //     return <p>No meals found.</p>
    // }
    return (
        <ul id="meals">
            {loadedMes.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}
