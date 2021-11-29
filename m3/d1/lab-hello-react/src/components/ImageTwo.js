// If the image is coming from the local folder in the project
// we have to import it
import iconTwo from "./../images/icon2.png";

function ImageTwo() {
  return (
    <div>
      {/* <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png
"
        alt=""
      /> */}
      <img src={iconTwo} alt="icon" />
    </div>
  );
}

export default ImageTwo;
