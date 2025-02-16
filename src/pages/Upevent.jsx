import React from 'react';
import '../pages/Upevent.css';
import Frame from "../assets/Frame.png";
import Football from "../assets/Football.jpg";
import Kabaddi from "../assets/Kabaddi.jpg";
import Volleyball from "../assets/Volleyball.webp";
import Chess from "../assets/Chess.jpg";
import Gambling from "../assets/Gambling.webp";
import Badminton from "../assets/Badminton.webp";
import TableTennis from "../assets/TableTennis.webp";
import Squidgame from "../assets/SquidGame.jpg";
import footprintbg from '../assets/landingpage.png'



const Upevent = () => {
  const events = [
    { name: 'Squid Game', time: 'Coming Soon', block: 'Girls Basketball Ground', date:'03 Feb', image: Squidgame, link: 'https://forms.gle/rv2KBhR3osTuu25T9' },
    { name: 'Gully Cricket', time: '5:30 pm - 6:30 pm', block: 'Girls Basketball Ground', date:'04 Feb', image: Football, link: 'https://forms.gle/sdgWuY8SbM5vREUE7' },
    // { name: 'Kabaddi', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'16 Dec', image: Kabaddi, link: 'https://example.com/kabaddi' },
    // { name: 'Volleyball', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'17 Dec', image: Volleyball, link: 'https://example.com/volleyball' },
    // { name: 'Chess', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'18 Dec', image: Chess, link: 'https://example.com/chess' },
    // { name: 'Gambling', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'19 Dec', image: Gambling, link: 'https://example.com/gambling' },
    // { name: 'Badminton', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'20 Dec', image: Badminton, link: 'https://example.com/badminton' },
    // { name: 'Table-Tennis', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'21 Dec', image: TableTennis, link: 'https://example.com/table-tennis' },
  ];

  const pastevents = [
    { name: 'Football', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'15 Dec', image: Football, link: 'https://forms.gle/sdgWuY8SbM5vREUE7' },
    { name: 'Kabaddi', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'16 Dec', image: Kabaddi, link: '/pages/KabaddiWinner.jsx' },
    { name: 'Volleyball', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'17 Dec', image: Volleyball, link: 'https://example.com/volleyball' },
    { name: 'Chess', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'18 Dec', image: Chess, link: 'https://example.com/chess' },
    { name: 'Gambling', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'19 Dec', image: Gambling, link: 'https://example.com/gambling' },
    { name: 'Badminton', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'20 Dec', image: Badminton, link: 'https://example.com/badminton' },
    { name: 'Table-Tennis', time: '5:30 pm - 6:30 pm', block: 'R-Block', date:'21 Dec', image: TableTennis, link: 'https://example.com/table-tennis' },
  ];

  
  return (
    <div className="events-page">
      <header className="events-header">
        <img src={footprintbg} alt="event" className="fit-image" />
      </header>

      <section className="register-section">
        <h2>Register Now</h2>
        <p>
          Be part of the thrill! Register now for our upcoming college sports events
          and take the stage to showcase your talent.
        </p>
        <p>
          Compete, conquer, and create unforgettable moments with fellow athletes.
          Spots are filling fast—secure yours today and let the games begin!
        </p>
      </section>

      <section className="events-section">
        <h3>Upcoming Event
        </h3>
        <div className="events-list">
          {events.map((event, index) => (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="event-card"
            >
              <div
                className="event-image"
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>
             
              <div className="event-details">
                <h4 className="event-name">{event.name}</h4>
                <p className="event-time">{event.time}</p>
                <p className="event-block">{event.block}</p>
                <p className="event-date">{event.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* <section className="events-section">
        <h3>Past Events</h3>
        <div className="events-list">
          {events.map((pastevent, index) => (
            <a
              href={pastevent.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="event-card"
            >
              <div
                className="event-image"
                style={{ backgroundImage: `url(${pastevent.image})` }}
              ></div>
              
              <div className="event-details">
                <h4 className="event-name">{pastevent.name}</h4>
                <p className="event-time">{pastevent.time}</p>
                <p className="event-block">{pastevent.block}</p>
                <p className="event-date">{pastevent.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section> */}

    </div>
  );
};

export default Upevent;
