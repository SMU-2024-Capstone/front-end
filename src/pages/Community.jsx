import React, { useState, useRef } from 'react';
import styled from "styled-components";
import SearchFriend from '../components/Common/SearchFriend';
import Navigation from '../components/Common/Navigation';
import CommunityContents from '../components/Common/Community_Contents';
import NewPost from '../assets/images/icons/NewPost.svg';

const Text = styled.div`
  margin-top: 12px;
  margin-left:16px;
  color: #FFFFFF;
  font-size: 14px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
`;

const Profile = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: #D3FF4E;
  cursor: pointer;
`;

const Nickname = styled.div`
  margin-top: 6px;
  color: #FFFFFF;
  font-size: 12px;
  font-family: "Apple-SD-GothicNeo-Light";
  letter-spacing: -0.3%;
  line-height: 140%; 
  padding-left: 7.5px;
`;

const AddIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 18px;
`;

const Friend = styled.div`
`;

const FriendList = styled.div`
  display: flex;
  margin-left: 16px;
  margin-top: 7px;
  margin-bottom: 9px;
  gap: 12px;
`;



const Community = () => {

  return (
    <div>
      <SearchFriend />
      <Text>즐겨찾는 친구들</Text>
      <FriendList>
          <Friend>
            <Profile>
              <AddIcon src={NewPost} alt="새 게시물" />
              </Profile>
            <Nickname>새 게시글</Nickname>
          </Friend>
      </FriendList>
      <CommunityContents />
      <Navigation />
    </div>
  );
};

export default Community;
