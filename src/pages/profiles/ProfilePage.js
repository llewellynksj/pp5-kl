import React, { useEffect, useState } from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import Asset from "../../components/Asset";
import s from "../../styles/ProfilePage.module.css";
import HottestProfiles from "./HottestProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../services/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoRes from "../../assets/no_results.png";
import { UpdateProfileDropdown } from "../../components/MenuDropDown";
import appS from "../../App.module.css";
import Button from "../../components/Button";
import BackToTopButton from "../../components/BackToTopButton";
import SideBar from "../../components/SideBar";

function ProfilePage() {
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);
  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { userProfile } = useProfileData();
  const [profile] = userProfile.results;
  const is_owner = currentUser?.username === profile?.owner;
  const [profilePosts, setProfilePosts] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: userProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}`),
            axiosReq.get(`/posts/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          userProfile: { results: [userProfile] },
        }));
        setProfilePosts(profilePosts);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <UpdateProfileDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={s.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <div>
            {profile?.status && (
              <strong>
                <em className={appS.Highlight}>{profile.status}</em>
              </strong>
            )}
          </div>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button onClick={() => handleUnfollow(profile)}>Unfollow</Button>
            ) : (
              <Button onClick={() => handleFollow(profile)}>Follow</Button>
            ))}
        </Col>
        <Col className={`${s.CardBg} text-left`}>
          <div>
            {profile?.bio && (
              <Col className="p-3">
                <p className={`${s.SubHeading} mb-0`}>About</p>
                <em>{profile.bio}</em>
              </Col>
            )}
          </div>
        </Col>
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profilePosts.results.length ? (
        <>
          <InfiniteScroll
            children={profilePosts.results.map((post) => (
              <Col>
                <Post key={post.id} {...post} setPosts={setProfilePosts} />
              </Col>
            ))}
            dataLength={profilePosts.results.length}
            loader={<Asset spinner />}
            hasMore={!!profilePosts.next}
            next={() => fetchMoreData(profilePosts, setProfilePosts)}
          />
          <BackToTopButton />
        </>
      ) : (
        <Asset
          src={NoRes}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Container className="h-100">
      <Row>
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          <SideBar mobile />
          <HottestProfiles mobile />
          <Container>
            {hasLoaded ? (
              <>
                {mainProfile}
                {mainProfilePosts}
              </>
            ) : (
              <Asset spinner />
            )}
          </Container>
        </Col>
        <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
          <SideBar />
          <HottestProfiles />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
