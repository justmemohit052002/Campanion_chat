import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={HospitalIcon} alt="Hospital" width="30" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="Logout" width="30" />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Companion Pager</p>
  </div>
)
const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        {/* SelfCosing Startment */}
        <ChannelSearch />
        <ChannelList
          // Props |
          filters={{}}  //filters is an object that allow to filter messages
          channelRenderFilterFn={() => { }} //function that is call for filter
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="team"
            />
          )}

          Preview={(PreviewProps) => (
            <TeamChannelPreview
              {...PreviewProps}
              type="team"
            />
          )}
        />
        <ChannelList
          // Props |
          filters={{}}  //filters is an object that allow to filter messages
          channelRenderFilterFn={() => { }} //function that is call for filter
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="messaging"
            />
          )}

          Preview={(PreviewProps) => (
            <TeamChannelPreview
              {...PreviewProps}
              type="messaging"
            />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
