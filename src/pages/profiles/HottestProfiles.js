import { Container, Accordion, Card } from "react-bootstrap";
import Asset from "../../components/Asset";
import Profile from "./Profile";
import { useProfileData } from "../../contexts/ProfileDataContext";
import s from "../../styles/SideBarHottestProfiles.module.css";
import { BsChevronDown } from "react-icons/bs";

const HottestProfiles = ({ mobile }) => {
  const { hottestProfiles } = useProfileData();

  if (mobile) {
    return (
      <Container className="d-lg-none text-center mb-3">
        {hottestProfiles.results.length ? (
          <Accordion>
            <Card className={s.Accordion}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className={`${s.Heading} p-0 d-flex justify-content-center`}
              >
                Hottest Profiles
                <div className="mx-2">
                  <BsChevronDown />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="p-0">
                  <div className={`d-flex justify-content-around`}>
                    {hottestProfiles.results.slice(0, 4).map((profile) => (
                      <Profile key={profile.id} profile={profile} mobile />
                    ))}
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ) : (
          <Asset spinner />
        )}
      </Container>
    );
  } else {
    return (
      <Container>
        {hottestProfiles.results.length ? (
          <>
            <p className={s.Heading}>Hottest Profiles</p>
            {hottestProfiles.results.slice(0, 5).map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))}
          </>
        ) : (
          <Asset spinner />
        )}
      </Container>
    );
  }
};

export default HottestProfiles;
