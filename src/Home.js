import './Home.css';
import imageOfProposal from "./images/imageOfProposal.jpg";
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-08-01T00:00:00');
    const updateCountdown = () => {
      const currentDate = new Date();
      const difference = targetDate - currentDate;
      let daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
      
      // Ensuring we don't show negative days if the target date has passed
      if (daysLeft < 0) {
        daysLeft = 0;
      }
      setDays(daysLeft);
    };

    // Set up an interval to update the countdown every second
    const timer = setInterval(updateCountdown, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <span>{days}</span>
  );
};

function Home() {

  return (
    <div className="App">

      <section className='hero section'>
        <h1>Polina & Max</h1>
        <p>Friday, the 1st of August, 2025.</p>
        <p>Ammarnäs, Sweden.</p>
        <p><i>We are getting married in <Countdown /> days!</i></p>
      </section>

      <section className='hello section'>
        <h1>Hello and Welcome to our Wedding!</h1>
        <div className='contentContainer'>
          <p>
            We’ve chosen to have our wedding in <strong>Ammarnäs</strong> because it’s a place we love and visit every summer to recharge. It’s one of our favorite spots in the world, and we’re excited to share it with you.<br></br><br></br>

            Though it might be <i>a bit</i> remote, its beauty makes every journey worthwhile. There’s plenty to do, and we hope you’ll enjoy exploring this scenic corner of the world with us.<br></br><br></br>

            The ceremony will take place near <u>the spot where Max proposed</u>, in Jillesnåle (Gillesnuole).<br></br><br></br>

            We hope you can join us for our wedding!
          </p>

          <div className='imageContainer'>
            <img className="image" src={imageOfProposal} alt="" />
          </div>

        </div>
      </section>

      <section className='howToGetThere section'>

        <h2>
          How to get here 
        </h2>

        <div className='sectionContentContainer'> 

          <div className="contentContainer">
            <h3>
              Plane
            </h3>
            <p>
              Arvidsjaurs, Lycksele, Hemavans and Umeå are the nearby airports. 

              Arvidsjaurs is the closest airport, 183 km from Ammarnäs.

              If you fly to Arvidsjaur (AJR) with popular.com from Stockholm (ARN) on July 31st, 2025, we will arrange a pre-booked bus from the airport to Ammarnäs for our guests. The same applies for the return flight on August 3rd. Please let us know if you plan to take these flights.
            </p>
          </div>

          <div className="contentContainer">
            <h3>
              Car
            </h3>
            <p>
              By car, drive to Sorsele via road 363 or E45. From Sorsele, continue on road 363 to Ammarnäs. While there is a place to refuel in Ammarnäs, it’s an additional 89 km, so you may want to refuel in Sorsele before driving the final stretch.

              If you have space in your car or need a ride, please post in the WhatsApp group.
            </p>
          </div>

          <div className="contentContainer">
            <h3>
              Train 
            </h3>
            <p>
              You can take the train up to the north, and from there, buses connect to Sorsele. From Sorsele, there is a bus service, running once or twice a day, that will take you to Ammarnäs.

              SJ and tabussen.nu provide more detailed information based on your departure station.

              The best options are to take an overnight SJ train to either Östersund, Umeå, or Jörn, and then take a bus or rent a car from there. (It’s better to rent a car in Umeå as it’s closer to Ammarnäs; there is no car rental in Jörn.)

              The bus from Östersund to Sorsele takes about 6 hours, and from Sorsele to Ammarnäs, it’s an additional 1.5 hours.

              Alternatively, there’s the tourist train (Inlandsbanan) from Östersund to Sorsele, which takes about 7 hours (a charming, slightly slow train with beautiful views).

              There is also a bus from Umeå to Lycksele, and then from Lycksele to Sorsele.
            </p>
          </div>

          <div className="contentContainer">
            <h3>
              Hiking to Ammarnäs
            </h3>
            <p>
              You can also hike to Ammarnäs. The King's Trail passes through Ammarnäs and from Hemavan it is 79 km. It is possible to hike between STF's staffed cabins when you come from Hemavan, which then takes 5-7 days. From Kvikkjokk it is 157 km. For more information follow this link https://www.swedishtouristassociation.com/trails/signature-trail-kungsleden-hemavan/ 
            </p>
          </div>

          <div className="contentContainer">
            <h3>
              Helicopter 
            </h3>
            <p>
              There are also regular helicopter tours from Hemavan to Ammarnäs if you don’t want to hike the whole way https://arcticairhemavantarnaby.se/ 
            </p>
          </div>
        </div>

      </section>

      <section className='accommodation section'>
        <h2>Accomodation</h2>
        <p>
          The party will be held at Ammarnäsgården Fjällhotell & Vandrarhem, where we have reserved rooms and are in the process of arranging discounts for guests. More information will be available soon.

          If you’d prefer to stay elsewhere, please refer to this page for more options.
          https://www.visitammarnas.se/boende 
        </p>
      </section>

      <section className='schedule section'>
        <h2>
          Schedule
        </h2>

        <div className="sectionContentContainer">


          <div className='contentItemContainer'>
            <h3>
              Thursday - Arrival Day and BBQ on Potato Hill
            </h3>
            <p>
              If the weather isn't ideal, we’ll move the food and karaoke to the hotel instead.
            </p>
          </div>

          <div className='contentItemContainer'>
            <h3>
              Friday - Wedding Day
            </h3>
            <p>
              Breakfast at the hotel, followed by getting dressed and ready.<br></br><br></br>
              The wedding bus will pick everyone up from Ammarnäs around 12:30 and take us to the ceremony location at Jillesnåle (Gillesnuole), where the ceremony will begin around 13:30. Afterward, there will be drinks and a light lunch. <br></br><br></br>
              At 16:00, the wedding bus will return everyone to Ammarnäs.<br></br><br></br>
              At 18:00, dinner and the party will begin at Ammarnäsgården Fjällhotell & Vandrarhem.
              During dinner, there will be a kids' corner with toys (but no supervision).
            </p>
          </div>

          <div className='contentItemContainer'>
            <h3>
              Saturday - Activities Day (weather permitting)
            </h3>
            <p>
              Ammarnäs may feel remote, but it’s a hub for many nature-related activities. We encourage you to take this day to relax and experience the true beauty of northern nature. Please refer to the Activities Page for more details on what you can do here.<br></br><br></br>

              In the evening, we’ll have a party at the hotel bar.<br></br><br></br>

              For those interested, we’d be happy if you joined us for a hike to the top of Gáisátje (Gajssietjåhkka) around lunchtime. The hike is 4 km from the Tjulträsk parking lot to the summit. The first 2 km follow a stream through mountain birch forest. Once at the top (1008 m), you’ll be rewarded with a view of the entire reserve. The hike is a relatively easy walk through mountain moorland, with excellent birdwatching opportunities. Difficulty: Medium – the hike includes a 456-meter elevation gain.<br></br><br></br>

              For those who prefer a round-trip hike from Ammarnäs, you can follow the Ammarnäs-Tjulträsk parking lot trail (8.2 km), then continue from Tjulträsk parking lot to Gáisátje (4 km). From Gáisátje, you can hike via Karsbäcken to Småfjällen and then join the King’s Trail back to Ammarnäs, which is about 10 km (see the highlighted trail in yellow below).<br></br><br></br>

              For more info please see the map below  https://www.naturkartan.se/sv/vasterbottens-lan/gajsatjakke?utm_source=naturkartan&utm_medium=map 
            </p>
          </div>

          <div className='contentItemContainer'>
            <h3>
              Sunday - Departure Day
            </h3>
            <p>
              For those taking the Popular flight to Stockholm (ARN) at 13:00, we will arrange a bus to drive from Ammarnäs to Arvidsjaur Airport in the morning.
            </p>
          </div>

        </div>

      </section>

      <section className='activities section'>
        <h2>
          Activities
        </h2>
        <ul>
          <li>Fishing</li> 
          <li>Horse Riding </li>
          <li>Hiking </li>
          <li>Birdwatching </li>
          <li>Sámi Handicraft</li>
          <li>Naturum</li>
          <li>Potato Hill</li>
          <li>Swimming </li>
          <li>Brudslöjan</li>
          <li>Gimegolts</li>
          <li>Geunja Sami Ecolodge</li>
          <li>Cold-Nose Huskies </li>
        </ul>
      </section>

      <section className='RSVP section'>
        <h2>
          RSVP
        </h2>
        <p>
          Please register kids separately and indicate if they require a children's chair.
          <ul>
            <li>Name and Surname </li>
            <li>Dietary requirements </li>
            <li>Drinking requirements (Alcohol or no alcohol)</li>
            <li>Other </li>
          </ul>
        </p>
      </section>

      <section className='weddingDetails section'>
        <h2>
          Wedding Details
        </h2>

        <div className="contentContainer">
          
          <div className="contentItemContainer">
            <h3>
              Dress code
            </h3>
            <p>
              We are in the wild, so wear your <i>wildest</i> outfit. 
            </p>
          </div>
          <div className="contentItemContainer">
            <h3>
              Toast masters
            </h3>
            <p>
              In a traditional Crimean wedding, proposing toasts is as natural as taking a breath, so we’d be happy to hear if you’d like to say something. At the end of the toast, you might want to say “Gorka,” which means "bitter," which obviously signals that Max and I have to kiss. For an even more traditional touch, you can start counting to 10, and Max and I will only stop kissing once you reach 10.
            </p>
          </div>

          <div className="contentItemContainer">
            <h3>
              What to pack 
            </h3>
            <p>
              The weather in the mountains can change quickly, so please check the forecast before you travel. Be sure to bring mosquito repellent with you.
            </p>
          </div>

          <div className="contentItemContainer">
            <h3>
              Included with our celebration
            </h3>
            <p>
              BBQ and welcome drink on Thursday, along with all food and drinks on the wedding day.
            </p>
          </div>

        </div>


      </section>

    </div>
  );
}

export default Home;
