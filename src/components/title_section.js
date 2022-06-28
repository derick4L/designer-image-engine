const TitleSection = () => {
  return (
    <div className="app_title">
      <h2>Designer Image Engine</h2>
      <div className="app_subtitle">
        <p>
          Created by{" "}
          <span>
            <a
              href="https://www.thederickmcmillian.com"
              target="_blank"
              rel="noopener noreferrer"
              id="shameless-plug"
            >
              {" "}
              Derick McMillian{" "}
            </a>
          </span>
          | Powered by Unsplash
        </p>
      </div>
    </div>
  );
};
export default TitleSection;
