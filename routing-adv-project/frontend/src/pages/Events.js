//import { Suspense } from "react";
import { useLoaderData, json, defer/* , Await */ } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  /* if (data.isError) {
    return <p>{data.message}</p>
  } */

   const events = data.events;
  return <EventsList events={events} />;

 /* return (
     <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );*/
}

export default EventsPage;
/*
const loadEvents = async () => { */
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    /* return {isError: true, message: 'Could not fetch events'} */

    /*
    v1
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500,
    }); */

    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    /* const resData = await response.json();
    return resData.events; */
   return response;
  }
};

/* export const loader = () => {
  defer({
    events: loadEvents(),
  });
};
 */