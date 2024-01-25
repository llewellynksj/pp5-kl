import { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Image, Row, Col, Container, Alert } from "react-bootstrap";
import { axiosReq } from "../../services/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import Button from "../../components/Button";

const UpdateProfileForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    bio: "",
    image: "",
    status: "",
  });
  const { name, bio, image, status } = profileData;
  const [statusChoices, setStatusChoices] = useState([]);
  const [errors, setErrors] = useState({});

  // Fetch the status choices from api
  useEffect(() => {
    async function fetchStatusChoices() {
      try {
        const response = await axiosReq.get("/profiles/status-choices");
        setStatusChoices(response.data);
      } catch (error) {
        console.error("Error fetching status choices:", error);
      }
    }

    fetchStatusChoices();
  }, []);

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}`);
          const { name, bio, image, status } = data;
          setProfileData({ name, bio, image, status });
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("status", status);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={bio}
          onChange={handleChange}
          name="bio"
          rows={7}
        />
      </Form.Group>

      {errors?.bio?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Label>
        <Form.Control
          className=""
          as="select"
          name="status"
          id="status"
          value={status}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          {statusChoices.map((statusChoice) => (
            <option key={statusChoice.value} value={statusChoice.value}>
              {statusChoice.label}
            </option>
          ))}
        </Form.Control>
      </Form.Label>
      {errors?.status?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button onClick={() => history.goBack()}>Cancel</Button>
      <Button type="submit">Update</Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label className={`btn my-auto`} htmlFor="image-upload">
                  Change Profile Image
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default UpdateProfileForm;
