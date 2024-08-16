import React from "react";
import '../Dashboard.css';
import facebookIcon from '../../images/icon-facebook.svg'
import twitterIcon from '../../images/icon-twitter.svg';
import instagramIcon from '../../images/icon-instagram.svg';
import youtubeIcon from '../../images/icon-youtube.svg';

function Dashboard({ darkMode }) {
  return (
    <div className="dashboard">
      <h1>Social Media Dashboard</h1>
      <h2>Total Followers: 23,004</h2>

      <div className="cards">
        <div className="card">
        <img src={facebookIcon} alt="Facebook" className="icon" /><span className="span">@nathanf</span>
          <h1 className="Number">1987</h1>
          <p>1987 Followers</p>
          <p>+12 Today</p>
        </div>
        <div className="card">
          <img src={twitterIcon} alt="Twitter" className="icon" /><span className="span">@nathanf</span>
          <h1 className="Number">1044</h1>
          <p>1044 Followers</p>
          <p>+99 Today</p>
        </div>
        <div className="card">
          <img src={instagramIcon} alt="Instagram" className="icon" /><span className="span">@realnathanf</span>

          <h1 className="Number">11k</h1>
          <p>11k Followers</p>
          <p>+1099 Today</p>
        </div>
        <div className="card">
          <img src={youtubeIcon} alt="YouTube" className="icon" /><span className="span">Nathan F.</span>

          <h1 className="Number">8239</h1>
          <p>8239 Subscribers</p>
          <p>-144 Today</p>
        </div>
      </div>

      {/* Overview - Today Section */}
      <h2>Overview - Today</h2>
      <div className="cards overview">
        <div className="card">
          <img src={facebookIcon} alt="Facebook" className="icon" />
          <p>page views</p>
          <h1 className="need">87</h1>
          <span className="change positive">+3%</span>
        </div>
        <div className="card">
          <img src={facebookIcon} alt="Facebook" className="icon" />
          <p>Likes</p>
          <h1 className="need">52</h1>
          <span className="change negative">-2%</span>
        </div>
        <div className="card">
          <img src={twitterIcon} alt="Twitter" className="icon" />
          <p>Retweets</p>
          <h1 className="need">117</h1>
          <p className="change positive">+303%</p>
        </div>
        <div className="card">
          <img src={twitterIcon} alt="Twitter" className="icon" />
          <p>Likes</p>
          <h1 className="need">507</h1>
          <p className="change positive">+553%</p>
        </div>
        <div className="card">
          <img src={instagramIcon} alt="Instagram" className="icon" />
          <p>Likes</p>
          <h1 className="need">5462</h1>
          <p className="change positive">+2257%</p>
        </div>
        <div className="card">
          <img src={instagramIcon} alt="Instagram" className="icon" />
          <p>Profile Views</p>
          <h1 className="need">52k</h1>
          <p className="change positive">+1375%</p>
        </div>
        <div className="card">
          <img src={youtubeIcon} alt="YouTube" className="icon" />
          <p>Likes</p>
          <h1 className="need">107</h1>
          <p className="change negative">-19%</p>
        </div>
        <div className="card">
          <img src={youtubeIcon} alt="YouTube" className="icon" />
          <p>Total Views</p>
         <h1 className="need" >1407</h1><span className="change negative">-12%</span>
        </div> 
      </div>
    </div>
  );
}

export default Dashboard;