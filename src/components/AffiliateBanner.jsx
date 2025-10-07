import "../css/AffiliateBanner.css";

function AffiliateBanner() {
  return (
    <div className="affiliate-banner">
      <a
        href="https://www.rebelbetting.com/valuebetting?x=datatrixet&amp;a_bid=df3338f4"
        target="_blank"
        rel="nofollow sponsored"
      >
        <img
          src="//affiliates.rebelbetting.com/accounts/default1/banners/df3338f4.png"
          alt="Value betting by RebelBetting - the easiest way to make money on sports"
          title="Value betting by RebelBetting - the easiest way to make money on sports"
          className="affiliate-image"
        />
      </a>

      {/* Spårningspixel – behåll! */}
      <img
        style={{ border: 0 }}
        src="https://affiliates.rebelbetting.com/scripts/imp.php?x=datatrixet&amp;a_bid=df3338f4"
        width="1"
        height="1"
        alt=""
      />
    </div>
  );
}

export default AffiliateBanner;

