import React from "react";
import './Events.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useEffect, useState} from "react";


function Events() {

    const [events, setEvents] = useState([]);

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/');
    };

    const handleEvents = (e) => {
        e.preventDefault();
        navigate('/Events');
    };

    const handleHome = (e) => {
        e.preventDefault();
        navigate('/Home');
    };

    useEffect(() => {
        const fetchEvents = async () => {
          try {
            const response = await fetch('/mock_events_data.json');
            const data = await response.json();
            setEvents(data.events);
          } catch (error) {
            console.error('Error fetching events data:', error);
          }
        };
    
        fetchEvents();
    }, []);

    return(
        <div className="events">
            
            <div>
                <div className="events-feed">
                    {events.map(event => (
                    <div key={event.id} className="event-card">
                        <img src={event.image} alt={event.title} className="event-image" />
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                        <p><strong>Location:</strong> {event.location}</p>
                        <p><strong>Date:</strong> {event.date}</p>
                        
                        {/* Interested Button */}
                        <button
                        className="interested-btn">Interested
                        </button>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Events;