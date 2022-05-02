const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Music is for everyone",
    description: "More music and then some music",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/music1.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for musicians",
    description: "Music Music Music",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/music2.jpg",
    isFeatured: false,
  },
  {
    id: "e3",
    title: "Studio Session at The Garage",
    description: "Studio session at the garage",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/music3.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
