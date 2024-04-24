import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard";
import AlexImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistance</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                imageUrl={AlexImage}
                description="lorem ipsum The hero component allows you 
                to add a full width banner to your webpage, which can optionally 
                cover the full height of the page as well.
                "
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                imageUrl={CortanaImage}
                description="lorem ipsum The hero component allows you 
                to add a full width banner to your webpage, which can optionally 
                cover the full height of the page as well.
                 "
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                imageUrl={SiriImage}
                description="lorem ipsum The hero component allows you 
                to add a full width banner to your webpage, which can optionally 
                cover the full height of the page as well.
                "
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
