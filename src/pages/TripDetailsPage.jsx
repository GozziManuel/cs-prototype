import { useParams, Link } from "react-router";
import trips from "../data/trips";
import ItineraryElement from "../components/ItineraryElement";

export default function TripDetailsPage() {
    const { id } = useParams();
    const trip = trips.find((trip) => trip.id === parseInt(id));
    return (
        <div className="container">
            <div className="my-4 d-flex align-items-center flex-column flex-sm-row gap-5">
                <div>
                    <h1>Trip to {trip.city}</h1>
                    <h2>{trip.name}</h2>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-2">
                    <Link to={`/trips`} className="btn btn-primary">Return to trips list</Link>
                    <Link to={`/trips/${id}/participants`} className="btn btn-primary">
                        See participants
                    </Link>
                </div>
            </div>
            <p>{trip?.details?.description}</p>
            <ul className="list-unstyled">
                <li><strong>Departure date:</strong> {trip?.startDate}</li>
                <li><strong>Returning date:</strong> {trip?.endDate}</li>
                <li><strong>Meeting point for departure:</strong> {trip?.details?.meetingPoint}</li>
            </ul>
            <h3>Way of transportation</h3>
            <ul className="list-unstyled">
                <li><strong>Arrival:</strong> {trip?.details?.transport?.arrival}</li>
                <li><strong>Local:</strong> {trip?.details?.transport?.local}</li>
                <li><strong>Departure:</strong> {trip?.details?.transport?.departure}</li>
            </ul>
            <h3>Accommodation</h3>
            <p className="fw-bold fs-5 m-0">{trip?.details?.accommodation?.name}</p>
            <p>{trip?.details?.accommodation?.type}</p>
            <ul className="list-unstyled">
                <li><strong>Nights of stay:</strong> {trip?.details?.accommodation?.nights}</li>
            </ul>

            <h3>Itinerary</h3>
            <h4>Activities</h4>

            {trip.details.itinerary.map((el) => <ItineraryElement el={el} key={el.day} />)}

            <h3>Places to visit</h3>
            <ul>
                {trip.details.placesToVisit.map((place) => <li key={place}>{place}</li>)}
            </ul>
        </div>
    )
}