import { useState, useRef } from "react";
import {
  Container,
  Form,
  Button,
  Alert,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../services/axiosDefaults";
import Asset from "../../components/Asset";
import upload from "../../assets/upload_icon.png";
import s from "../../styles/AddPostForm.module.css";

function AddPostForm() {
  const [postData, setPostData] = useState({
    content: "",
    image_tag: "",
    image: "",
  });
  const { content, image_tag, image } = postData;

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const imageInput = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new Form();

    form.append("content", content);
    form.append("image_tag", image_tag);
    form.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", form);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const formFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Caption</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Tags</Form.Label>
        <Form.Control
          type="text"
          name="image_tag"
          value={image_tag}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button onClick={() => history.goBack()}>Cancel</Button>
      <Button type="submit">Post</Button>
    </div>
  );

  return (
    <Container>
      <h1>Add a new post!</h1>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
            <Container
              className={`${s.Container} ${s.TextContainer} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center">
                {image ? (
                  <>
                    <figure>
                      <Image className={s.Image} src={image} rounded />
                    </figure>
                    <div>
                      <Form.Label className="btn" htmlFor="image-upload">
                        Change
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                  >
                    <Asset src={upload} message="Click to upload" />
                  </Form.Label>
                )}

                <Form.File
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage}
                />
              </Form.Group>
              <div className={`${s.TextContainer} d-md-none`}>{formFields}</div>
            </Container>
          </Col>
          <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
            <Container className={s.TextContainer}>{formFields}</Container>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default AddPostForm;
