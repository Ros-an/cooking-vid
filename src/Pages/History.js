import {
  VideoCardTypeList,
  SectionHeading,
  NoItem,
} from "../Shared/MiniComponent";
import { useLikeHistoryWatchLater } from "../ContextAPI/likeHistoryWatchLater-context";

function History() {
  const { history } = useLikeHistoryWatchLater();
  return (
    <div className="section-padding">
      <SectionHeading headingName={"History"} />
      {history && (
        <div className="video-list-container">
          {history.map((vid) => (
            <VideoCardTypeList key={vid.id} {...vid} />
          ))}
        </div>
      )}
      {!history.length && (
        <NoItem heading={"No recent watch"} buttonText={"Watch"} />
      )}
    </div>
  );
}

export default History;
