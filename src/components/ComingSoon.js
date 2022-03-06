import React from "react";
import MailchimpContainer from "./MailchimpContainer";

const ComingSoon = () => (
  <section className="comingsoon">
    <section className="box">
      <h1 className="title">COMING SOON</h1>
      <section>
        <p>
          We're creating what you've been waiting for.
          <br />
          This website is for the NFT community, by the NFT community - because
          it's time to give back. Join FREE raffles and have a chance to win
          tokens and NFT's on multiple networks.
        </p>
        <br />
        <p>
          We aim on launching around end of April. Make sure you sign up below
          to get notified for when it's time.
        </p>
      </section>
      <MailchimpContainer />
      <section>
        <p>
          Also, follow us on{" "}
          <a
            href="https://twitter.com/nftrafflewin"
            target="_blank"
            rel="noreferrer"
          >
            twitter
          </a>{" "}
          to get more updates on what's happening and upcoming raffles.
        </p>
      </section>
    </section>
  </section>
);

export default ComingSoon;
