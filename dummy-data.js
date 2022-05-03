const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Music is for everyone",
    description: "“I think music in itself is healing,” American musician Billy Joel once said. “It’s an explosive expression of humanity. It’s something we are all touched by. No matter what culture we’re from, everyone loves music.”",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/music1.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for musicians",
    description: "“I think music in itself is healing,” American musician Billy Joel once said. “It’s an explosive expression of humanity. It’s something we are all touched by. No matter what culture we’re from, everyone loves music.”",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/music2.jpg",
    isFeatured: false,
  },
  {
    id: "e3",
    title: "Studio Session at The Garage",
    description: "“I think music in itself is healing,” American musician Billy Joel once said. “It’s an explosive expression of humanity. It’s something we are all touched by. No matter what culture we’re from, everyone loves music.”",
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
