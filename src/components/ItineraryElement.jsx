


export default function ItineraryElement({ el }) {
    return (
        <div>
            <h5>Day {el.day}</h5>
            <ul>
                {el.activities.map((activity) => <li key={activity}>{activity}</li>)}
            </ul>
        </div>
    )
}