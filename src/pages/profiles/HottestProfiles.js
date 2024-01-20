import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../services/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import s from "../../App.module.css";
import Asset from "../../components/Asset";
import Profile from "./Profile";

const HottestProfiles = ({ mobile }) => {
  const [profileData, setProfileData] = useState({
    userProfile: { results: [] },
    hottestProfiles: { results: [] },
  });
  const { hottestProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          hottestProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [currentUser]);

  return (
    <Container className={`${mobile && "d-lg-none text-center mb-3"}`}>
      {hottestProfiles.results.length ? (
        <>
          <p>Hottest Profiles</p>
          {mobile ? (
            <div className={`d-flex justify-content-around`}>
              {hottestProfiles.results.map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            hottestProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default HottestProfiles;
