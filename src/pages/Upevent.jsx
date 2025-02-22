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
import footprintbg from '../assets/RegistrationPage.png'
import basketball from '../assets/Basketball.jpg'
import carrom from '../assets/Carrom.jpg'
import jumps from '../assets/Jumps.jpg'
import kho from '../assets/Kho-Kho.jpg'
import running from '../assets/running.jpg'
import throws from '../assets/Throws.jpg'
import tugofwar from '../assets/TugofWar.jpg'
import discusthrow from '../assets/discusthrow.jpg'
import longjump from '../assets/longjump.jpg'
import shotput from '../assets/shotput.jpg'
import slowcycling from '../assets/slowcycling.jpg'


const Upevent = () => {
  const events = [
    { name: 'Basketball', time: '', block: 'R-Block',       image: basketball, link: 'https://forms.gle/obd7SdbVn1TiejYn6' },
    { name: 'Badminton', time: '', block: 'R-Block',     image: Badminton, link: 'https://forms.gle/E2gHHVbUJYQWzXCG9' },
     { name: 'Table-Tennis', time: '', block: 'R-Block',     image: TableTennis, link: 'https://forms.gle/JgEVcQsLGdKEfZCH6' },
     { name: 'Chess', time: '', block: 'R-Block',    image: Chess, link: 'https://forms.gle/JgEVcQsLGdKEfZCH6' },
     { name: 'Carrom', time: '', block: 'R-Block',    image: carrom, link: 'https://forms.gle/JgEVcQsLGdKEfZCH6' },
   { name: 'Race', time: '', block: 'R-Block',     image: running, link: 'https://forms.gle/JgEVcQsLGdKEfZCH6' },
    { name: 'Volleyball', time: '', block: 'R-Block',     image: Volleyball, link: 'https://forms.gle/rpz953UCYbqwztxL8' },
    { name: 'Football(Boys)', time: '', block: 'R-Block',     image:Football , link: 'https://forms.gle/pZhChZQhRKHsFAtv7' },
    { name: 'Kho-Kho', time: '', block: 'R-Block',      image:kho, link: 'https://forms.gle/ZKw15PAtRnDMP6kQ7' },
    { name: 'Kabaddi(Boys)', time: '', block: 'R-Block',    image: Kabaddi, link: 'https://forms.gle/trTfLXmUnGn8WyGm6' },
    { name: 'Tug of War', time: '', block: 'R-Block',    image: tugofwar, link: 'https://forms.gle/h64ft6dzjDmSDG7s9' },
     { name: 'Discus Throws', time: '', block: 'R-Block',     image: discusthrow , link: 'https://forms.gle/JgEVcQsLGdKEfZCH6' },
     { name: 'Long Jump', time: '', block: 'R-Block',      image: longjump, link: 'https://forms.gle/JgEVcQsLGdKEfZCH6' },
     { name: 'Shot Put', time: '', block: 'R-Block',     image: shotput, link: 'https://forms.gle/JgEVcQsLGdKEfZCH6' },
      { name: 'Slow Cycling(Girls)', time: '', block: 'R-Block',      image: slowcycling , link: 'https://forms.gle/JgEVcQsLGdKEfZCH6' },
 

  ];

  const pastevents = [
    { name: 'Football', time: '', block: 'R-Block', date:'15 Dec', image: Football, link: 'https://forms.gle/sdgWuY8SbM5vREUE7' },
    { name: 'Kabaddi', time: '', block: 'R-Block', date:'16 Dec', image: Kabaddi, link: '/pages/KabaddiWinner.jsx' },
    { name: 'Volleyball', time: '', block: 'R-Block', date:'17 Dec', image: Volleyball, link: 'https://example.com/volleyball' },
    { name: 'Chess', time: '', block: 'R-Block', date:'18 Dec', image: Chess, link: 'https://example.com/chess' },
    { name: 'Gambling', time: '', block: 'R-Block', date:'19 Dec', image: Gambling, link: 'https://example.com/gambling' },
    { name: 'Badminton', time: '', block: 'R-Block', date:'20 Dec', image: Badminton, link: 'https://example.com/badminton' },
    { name: 'Table-Tennis', time: '', block: 'R-Block', date:'21 Dec', image: TableTennis, link: 'https://example.com/table-tennis' },
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
