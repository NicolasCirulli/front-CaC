import { useEffect, useState, useRef } from "react";
import { getEvents } from "../../service/eventService";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loadEvents, filter } from "../../redux/actions/eventsActions";

export function Events() {
  const events = useSelector((store) => store.storeEvents.events);
  const filtered = useSelector((store) => store.storeEvents.filtered);
  const categories = useSelector((store) => store.storeEvents.categories);

  const dispatch = useDispatch();

  const search = useRef(null);
  const select = useRef(null);

  useEffect(() => {
    if (events.length == 0) {
      getEvents().then((res) => {
        dispatch(loadEvents(res));
      });
    }
  }, []);

  const handleChange = () => {
    dispatch(filter(search.current.value, select.current.value));
  };

  return (
    <>
      <h2 className="text-white text-5xl">Events</h2>
      <input type="text" onChange={handleChange} ref={search} />
      <select onInput={handleChange} ref={select}>
        <option value="all">All</option>
        {categories.length > 0 &&
          categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </select>
      <div className="flex flex-wrap gap-5 justify-center">
        {filtered.length > 0 &&
          filtered.map((event) => {
            return (
              <div key={event._id} className="bg-white">
                <h2 className="text-red-700">{event.name}</h2>
                <img className="w-[500px]" src={event.image} alt="" />
                <Link to={`/event/${event._id}`} className="text-black">
                  {" "}
                  Details{" "}
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}
