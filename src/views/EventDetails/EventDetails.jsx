import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EventDetails = () => {
  const params = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/event/" + params.id)
      .then((response) => response.json())
      .then((data) => setEvent(data.event))
      .catch((err) => err);
  }, []);

  return (
    <div>
      {event && <h2>{event.name}</h2>}
      <Link to="/events">back </Link>
    </div>
  );
};

export default EventDetails;
