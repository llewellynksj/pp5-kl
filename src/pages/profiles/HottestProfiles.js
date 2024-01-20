import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../services/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import s from "../../App.module.css";
import Asset from "../../components/Asset";

const HottestProfiles = () => {
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
    <Container>
      {hottestProfiles.results.length ? (
        <>
          <p>Hottest Profiles</p>
          {hottestProfiles.results.map((profile) => (
            <p key={profile.id} className={s.Text}>
              {profile.owner}
            </p>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default HottestProfiles;
