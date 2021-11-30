import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweetObj }) {
  return (
    <div className="tweet">
      <ProfileImage imageAvatar={tweetObj.user.image} />

      <div className="body">
        <div className="top">
          <User userData={tweetObj.user} />

          <Timestamp time={tweetObj.timestamp} />
        </div>

        <Message messageData={tweetObj.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
