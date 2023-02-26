import {
  /* useParams */ useRouteLoaderData,
  json,
  redirect,
} from "react-router-dom";
import EventItem from "../components/EventItem";
/* import EventsList from "../components/EventsList";
 */
const EventDetailPage = () => {
  /* const params = useParams(); */

  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
{/*       <EventsList events={} />
 */}
      {/*       <h1>EventDetailPage</h1>
      <p>event ID: {params.eventId}</p> */}
    </>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected events" },
      { status: 500 }
    );
  } else {
    return response;
  }
};

export const action = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }

  return redirect("/events");
};


/* const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
   return response;
  }
};

const loadEvent = async (id) => {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected events" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}; */