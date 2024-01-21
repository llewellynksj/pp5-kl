import { Container } from "react-bootstrap";
import Asset from "../../components/Asset";
import Profile from "./Profile";
import { useProfileData } from "../../contexts/ProfileDataContext";
import s from "../../App.module.css";

const HottestProfiles = ({ mobile }) => {
  const { hottestProfiles } = useProfileData();

  return (
    <Container className={`${mobile && "d-lg-none text-center mb-3"}`}>
      {hottestProfiles.results.length ? (
        <>
          <p className={s.Heading}>Hottest Profiles</p>
          {mobile ? (
            <div className={`d-flex justify-content-around`}>
              {hottestProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            hottestProfiles.results
              .slice(0, 5)
              .map((profile) => <Profile key={profile.id} profile={profile} />)
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default HottestProfiles;
