import React, { Component } from "react";

import Nav from "../../components/Nav/Nav";

import styles from "./AboutMe.module.css";

class About extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Nav />
        <div className={styles.aboutMe}>
          <h1 className={styles.header}>About me</h1>
          <div className={styles.content}>
            <img
              src="otherImages/art_site_profile_pic.JPG"
              className={styles.profilePic}
              alt="Failed to load"
            />
            <div className={styles.text}>
              <p>
                Kimmi Risk is a San Francisco based artist. She has turned her
                family’s garage into an eccentric studio where she creates her
                art. She primarily creates with many layers of acrylic paint
                sealed by a transparent shiny coat of resin on top of cradled
                hardboard.
              </p>
              <p>
                "My art changed dramatically after my son was diagnosed with
                cancer, and in a surprisingly wonderful way. Giving myself
                permission to do whatever I wanted on my canvas, my art became
                more genuine and marvelous. My paintings are inspired by flashes
                of images in my mind and as I build my paintings I’m enthralled
                and entranced by the interplay of color and texture. Circles
                have always been a big part of my art and my creative process.
                To me, circles represent the fun parts of life, like gumballs,
                lollipops and cookies - as opposed to more angular shapes which
                can be depressing. I also enjoy playing with the viscosity of
                acrylic paint along with adjusting it with a flow medium to make
                it thinner or thicker. The drip effect on the canvas represents
                the movement of life and the energy all around us. Music also
                plays a large part in my artistic process. Typically a single
                song rises to the top as I create a piece – and ends up becoming
                the title of that particular piece."
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
