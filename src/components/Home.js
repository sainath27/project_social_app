import React from "react";
import './Home.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useEffect, useState} from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import Events from "./Events";

function Home() {

    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/');
    };

    const handleEvents = (e) => {
        e.preventDefault();
        navigate('/Events');
    };
    
    // Fetch the events from the mock JSON file
    useEffect(() => {
    const fetchPosts = async () => {
        try {
        const response = await fetch('/mock_homefeed_data.json');
        const data = await response.json();
        setPosts(data.posts);
        } catch (error) {
        console.error('Error fetching events data:', error);
        }
    };

    fetchPosts();
    }, []);

    const sliderSettings = {
        dots: true,           // Show dots for navigation
        infinite: true,       // Loop slides
        speed: 500,           // Transition speed
        slidesToShow: 1,      // Show one image at a time
        slidesToScroll: 1,    // Scroll one image at a time
        arrows: true          // Show navigation arrows
    };

    return(
        <div className="home">

            <main>
                <div>
                    <div className="feed">
                        {posts.map(post => (
                        <div key={post.id} className="post-card">
                            <div className="post-header">
                                <img src={post.user.profilePic} alt={post.user.firstName} className="profile-pic" />
                                <h3>{post.user.firstName}</h3>
                            </div>

                            <div className="event-details">
                                <h2>{post.event.title}</h2>
                                <p>{post.event.description}</p>
                                <div className="event-photos">
                                {/* Conditionally render slider only if there are multiple photos */}
                                {post.event.photos.length > 1 ? (
                                <Slider {...sliderSettings}>
                                    {post.event.photos.map((photo, index) => (
                                        <div key={index}>
                                            <img  src={photo} alt="Event" className="event-photo" />
                                        </div>
                                    ))}
                                </Slider>
                                ) : (
                                        <div>
                                            <img src={post.event.photos[0]} alt="Event" className="event-photo" />
                                        </div>
                                )}
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </main>
            

        </div>
    );
}

export default Home;