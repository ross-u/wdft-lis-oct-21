// If the image is coming from the local folder in the project
// we have to import it
import iconOne from "./../images/icon1.png";

function ImageOne() {
  return (
    <div>
      {/* <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png
"
        alt=""
      /> */}
      <img src={iconOne} alt="icon" />
    </div>
  );
}

export default ImageOne;
