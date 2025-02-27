import './Home.css';
import heroImageMobile from "./images/hero-image-mobile.jpg";
import imageOfProposal from "./images/imageOfProposal.jpg";
import map from "./images/map.jpg";
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-08-01T00:00:00');
    const updateCountdown = () => {
      const currentDate = new Date();
      const difference = targetDate - currentDate;
      let daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
      
      if (daysLeft < 0) {
        daysLeft = 0;
      }
      setDays(daysLeft);
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span>{days}</span>
  );
};

function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsMenuVisible(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close the menu on mobile after clicking a link
    if (window.innerWidth <= 480) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="App">
      <nav className={`menu ${isMenuVisible ? 'visible' : ''} ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="hamburger"></span>
        </div>
        <ul>
          <li><a onClick={() => scrollToSection('howToGetThere')}>How to Get Here</a></li>
          <li><a onClick={() => scrollToSection('accommodation')}>Accommodation</a></li>
          <li><a onClick={() => scrollToSection('programme')}>Programme</a></li>
          <li><a onClick={() => scrollToSection('RSVP')}>RSVP</a></li>
          <li><a onClick={() => scrollToSection('activities')}>Activities</a></li>
          <li><a onClick={() => scrollToSection('weddingDetails')}>Wedding Details</a></li>
        </ul>
      </nav>

      <section className='hero section'>

        <div className='contentContainer'>
          <h1>Polina & Max</h1>
          <p>Friday, the 1st of August, 2025.</p>
          <p>Ammarnäs, Sweden.</p>
          <p><i>We are getting married in <Countdown /> days!</i></p>
          <div className='gradientBackgroundForMobile'></div>
        </div>

        <div className='imageContainer'>
          <img src={heroImageMobile} className='heroImage' alt="" />
        </div>
      </section>

      <section id="hello" className='hello section'>
        <h1>Hello and Welcome to our Wedding!</h1>
        <div className='contentContainer'>
          <p>
            We’ve chosen to have our wedding in <strong>Ammarnäs</strong> because it’s a place we love and visit every summer to recharge. It’s one of our favorite spots in the world, and we’re excited to share it with you.<br></br><br></br>

            Though it might be <i>a bit</i> remote, its beauty makes every journey worthwhile. There’s plenty to do, and we hope you’ll enjoy exploring this scenic corner of the world with us.<br></br><br></br>

            The ceremony will take place near the spot where Max proposed, in <a href='https://www.sorsele.se/media/1838/jilesnale_1806.pdf' target="_blank" rel="noopener noreferrer">Jillesnåle (Gillesnuole)</a>.<br></br><br></br>

            We hope you can join us for our wedding!<br></br><br></br>

            This is an active website, and we’ll be updating it regularly, so be sure to check back. If you have any questions, feel free to reach out to us.
          </p>

          <div className='imageContainer'>
            <img className="image" src={imageOfProposal} alt="" />
          </div>
        </div>
      </section>

      <section id="howToGetThere" className='howToGetThere section'>
        <h2>How to get here</h2>
        <div className='sectionContentContainer'> 
          <div className="contentContainer">
            <h3>Plane</h3>
            <p>Arvidsjaurs, Lycksele, Hemavans and Umeå are the nearby airports. <br></br><br></br> Arvidsjaurs is the closest airport, 183 km from Ammarnäs.<br></br><br></br> If you fly to Arvidsjaur (AJR) with <a href='https://populair.com' target="_blank" rel="noopener noreferrer">populair.com</a> from Stockholm (ARN) on July 31st, 2025, we will arrange a bus from the airport to Ammarnäs for our guests. The same applies for the return flight on August 3rd. Please let us know if you plan to take these flights.</p>
          </div>
          <div className="contentContainer">
            <h3>Car</h3>
            <p>By car, drive to Sorsele via road 363 or E45. From Sorsele, continue on road 363 to Ammarnäs. While there is a place to refuel in Ammarnäs, it’s an additional 89 km, so you may want to refuel in Sorsele before driving the final stretch.<br></br><br></br> If you have space in your car or need a ride, please post in the WhatsApp group.</p>
          </div>
          <div className="contentContainer">
            <h3>Train</h3>
            <p>You can take the train up to the north, and from there, buses connect to Sorsele. From Sorsele, there is a bus service, running once or twice a day, that will take you to Ammarnäs.<br></br><br></br> SJ and tabussen.nu provide more detailed information based on your departure station.<br></br><br></br> The best options are to take an overnight SJ train to either Östersund, Umeå, or Jörn, and then take a bus or rent a car from there. (It’s better to rent a car in Umeå as it’s closer to Ammarnäs; there is no car rental in Jörn.)<br></br><br></br> The bus from Östersund to Sorsele takes about 6 hours, and from Sorsele to Ammarnäs, it’s an additional 1.5 hours.<br></br><br></br> Alternatively, there’s the tourist train (<a href='https://res.inlandsbanan.se/en/book/ticket-and-seat-reservation' target="_blank" rel="noopener noreferrer">Inlandsbanan</a>) from Östersund to Sorsele, which takes about 7 hours (a charming, slightly slow train with beautiful views).<br></br><br></br> There is also a bus from Umeå to Lycksele, and then from Lycksele to Sorsele.</p>
          </div>
          <div className="contentContainer">
            <h3>Hiking to Ammarnäs</h3>
            <p>You can also hike to Ammarnäs. The King's Trail passes through Ammarnäs and from Hemavan it is 79 km. It is possible to hike between STF's staffed cabins when you come from Hemavan, which then takes 5-7 days. From Kvikkjokk it is 157 km. For more information follow this <a href="https://www.swedishtouristassociation.com/trails/signature-trail-kungsleden-hemavan/" target="_blank" rel="noopener noreferrer">link</a>.</p>
          </div>
          <div className="contentContainer">
            <h3>Helicopter</h3>
            <p>There are also regular <a href="https://arcticairhemavantarnaby.se/" target="_blank" rel="noopener noreferrer">helicopter tours</a> from Hemavan to Ammarnäs if you don’t want to hike the whole way.</p>
          </div>
        </div>
      </section>

      <section id="accommodation" className='accommodation section'>
        <h2>Accomodation</h2>
        <p>The party will be held at Ammarnäsgården Fjällhotell & Vandrarhem, where we have reserved rooms until May 31, 2025.<br></br><br></br>To book a room, please call (0952-600 03) or email (fjallhotell@ammarnasgarden.se) and mention that you are attending the “Max and Polina Wedding.” A 10% discount will apply to all bookings.<br></br><br></br>There are two room types available: 'Hotellrum' and 'Fjällrum'. Most of the 'Hotellrum' have been recently renovated and offer a more comfortable stay, while the 'Fjällrum' are a simpler, no-frills, budget-friendly choice.<br></br><br></br>If you’d prefer to stay elsewhere, please refer to <a href="https://www.visitammarnas.se/boende " target="_blank" rel="noopener noreferrer">this page</a> for more options.</p>
      </section>

      <section id="programme" className='programme section'>
        <h2>Programme</h2>
        <div className="sectionContentContainer">
          <div className='contentItemContainer'>
            <h3>Thursday - Arrival Day and BBQ on Potato Hill</h3>
            <p>If the weather isn't ideal, we’ll move the food and karaoke to the hotel instead.</p>
          </div>
          <div className='contentItemContainer'>
            <h3>Friday - Wedding Day</h3>
            <p>Breakfast at the hotel, followed by getting dressed and ready.<br></br><br></br> The wedding bus will pick everyone up from Ammarnäs around 12:30 and take us to the ceremony location at Jillesnåle (Gillesnuole), where the ceremony will begin around 13:30. Afterward, there will be drinks and a light lunch. <br></br><br></br> At 16:00, the wedding bus will return everyone to Ammarnäs.<br></br><br></br> At 18:00, dinner and the party will begin at Ammarnäsgården Fjällhotell & Vandrarhem. <br></br><br></br>During dinner, there will be a kids' corner with a TV and a few toys (feel free to bring your own).</p>
          </div>
          <div className='contentItemContainer withMapImage'>
            <h3>Saturday - Activities Day (weather permitting)</h3>
            <p>
              Ammarnäs may feel remote, but it’s a hub for many nature-related activities. We encourage you to take this day to relax and experience the true beauty of northern nature. Please refer to the Activities Page for more details on what you can do here.<br></br><br></br>

              In the evening, there will be a buffet dinner available for purchase at the hotel for 180 kr per person. And of course, a party afterwards.<br></br><br></br>
            
              For those interested, we’d be happy if you joined us for a hike to the top of Gáisátje (Gajssietjåhkka) around lunchtime. The hike is 4 km from the Tjulträsk parking lot to the summit. The first 2 km follow a stream through mountain birch forest. Once at the top (1008 m), you’ll be rewarded with a view of the entire reserve. The hike is a relatively easy walk through mountain moorland, with excellent birdwatching opportunities. Difficulty: Medium – the hike includes a 456-meter elevation gain.<br></br><br></br>
              
              For those who prefer a round-trip hike from Ammarnäs, you can follow the Ammarnäs-Tjulträsk parking lot trail (8.2 km), then continue from Tjulträsk parking lot to Gáisátje (4 km). From Gáisátje, you can hike via Karsbäcken to Småfjällen and then join the King’s Trail back to Ammarnäs, which is about 10 km (see the highlighted trail in yellow below).<br></br><br></br>
              
              <div className="imageContainer"> <img className='image' src={map} alt="" /> </div> 
              
              For more info please see <a href="https://www.naturkartan.se/sv/vasterbottens-lan/gajsatjakke?utm_source=naturkartan&utm_medium=map" target="_blank" rel="noopener noreferrer">the map</a>.</p>
          </div>
          <div className='contentItemContainer'>
            <h3>Sunday - Departure Day</h3>
            <p>For those taking the PopulAir flight to Stockholm (ARN) at 13:00, we will arrange a bus to drive from Ammarnäs to Arvidsjaur Airport in the morning.</p>
          </div>
        </div>
      </section>

      <section id="RSVP" className='RSVP section'>
        <h2>RSVP</h2>
        <p>Coming...</p>
        <p>To let us know that you are, please fill in <a href='https://docs.google.com/forms/d/e/1FAIpQLSfd_d6r2Zfq_GcwiNubxgnlQ0qsBLBgZxFSlXFkssmuLUrBng/viewform?usp=dialog' target="_blank" rel="noopener noreferrer">this form</a> by 31 May 2025.</p>
      </section>

      <section id="activities" className='activities section'>
        <h2>Activities</h2>
        <ul>
          <li>Fishing (<a href='https://natureit.se/en/area/sorsele?language=en' target="_blank" rel="noopener noreferrer">Option 1</a> and <a href='https://vindelriverfishing.se' target="_blank" rel="noopener noreferrer">Option 2</a>)</li> 
          <li>Horse Riding (<a href='https://fjallhasten.se/' target="_blank" rel="noopener noreferrer">Option 1</a> and <a href='https://aha-lodge.com/english/' target="_blank" rel="noopener noreferrer">Option 2</a>)</li>
          <li>Hiking (<a href='https://www.naturkartan.se/sv/explore' target="_blank" rel="noopener noreferrer">Option 1</a>, <a href='https://www.vindelfjallen.se/vandra/hitta-leder-stugor/' target="_blank" rel="noopener noreferrer">Option 2</a> and <a href='https://www.svenskaturistforeningen.se/aktiviteter/vandring/fjallvandring/' target="_blank" rel="noopener noreferrer">Option 3</a>)</li>
          <li>Birdwatching</li>
          <li>Sámi Handicraft</li>
          <li>Naturum</li>
          <li><a href='https://www.naturkartan.se/sv/vasterbottens-lan/ammarnas-potatisbacken' target="_blank" rel="noopener noreferrer">Potato Hill</a></li>
          <li>Swimming</li>
          <li><a href='https://visit.sorsele.se/sv/2021/06/14/brudslojan/' target="_blank" rel="noopener noreferrer">Brudslöjan</a></li>
          <li><a href='https://visit.sorsele.se/sv/2021/06/14/gimegolts/' target="_blank" rel="noopener noreferrer">Gimegolts</a></li>
          <li><a href='http://samiecolodge.se/' target="_blank" rel="noopener noreferrer">Geunja Sami Ecolodge</a></li>
          <li>Huskies (<a href='https://cold-nose-huskies.se/en/dog-sled-tours/summer-adventures/' target="_blank" rel="noopener noreferrer">Option 1</a> and <a href='https://www.trails-of-lapland.de/' target="_blank" rel="noopener noreferrer">Option 2</a>)</li>
        </ul>
      </section>

      <section id="weddingDetails" className='weddingDetails section'>
        <h2>Wedding Details</h2>
        <div className="contentContainer">
          <div className="contentItemContainer">
            <h3>Dress code</h3>
            <p>We are in the wild, so wear your <i>wildest</i> outfit.</p>
          </div>
          <div className="contentItemContainer">
            <h3>Toast masters</h3>
            <p>TBA...<br></br> In a traditional Crimean wedding, proposing toasts is as natural as taking a breath, so we’d be happy to hear if you’d like to say something. At the end of the toast, you might want to say “Gorka,” which means "bitter," which obviously signals that Max and I have to kiss. For an even more traditional touch, you can start counting to 10, and Max and I will only stop kissing once you reach 10.</p>
          </div>
          <div className="contentItemContainer">
            <h3>What to pack</h3>
            <p>The weather in the mountains can change quickly, so please check the forecast before you travel. Be sure to bring mosquito repellent with you.</p>
          </div>
          <div className="contentItemContainer">
            <h3>Included with our celebration</h3>
            <p>BBQ and welcome drink on Thursday, along with all food and drinks on the wedding day.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;