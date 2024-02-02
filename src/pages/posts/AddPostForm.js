import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../services/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import Button from "../../components/Button";
import Asset from "../../components/Asset";
import upload from "../../assets/upload.png";
import ImageCropper from "../../components/ImageCropper";

// Bootstrap
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

// Styles
import s from "../../styles/AddPostForm.module.css";

function AddPostForm() {
  useRedirect("loggedOut");
  const [postData, setPostData] = useState({
    caption: "",
    image_tag: "",
    image_tag2: "",
    image_tag3: "",
    image_tag4: "",
    image_tag5: "",
    image: "",
  });
  const {
    caption,
    image_tag,
    image_tag2,
    image_tag3,
    image_tag4,
    image_tag5,
    image,
  } = postData;

  const [errors, setErrors] = useState({});
  const history = useHistory();
  const [tagChoices, setTagChoices] = useState([]);
  const [openCrop, setOpenCrop] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);

  // Fetch the tag choices from api
  useEffect(() => {
    async function fetchTagChoices() {
      try {
        const response = await axiosReq.get("/posts/tag-choices");
        setTagChoices(response.data);
      } catch (error) {
        console.error("Error fetching tag choices:", error);
      }
    }

    fetchTagChoices();
  }, []);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // Image cropping code adapted from tutorial by 'Code Like a Pro'
  // with help of chatGPT: https://www.youtube.com/watch?v=MWzaItRRTXw

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
      setOpenCrop(true);
    }
  };

  const handleCropComplete = (croppedImage) => {
    console.log("Cropped image:", croppedImage);
    setOpenCrop(false);
    setCroppedImage(croppedImage);
    setPostData({ ...postData, image: croppedImage.url });
  };

  const imageInput = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("caption", caption);
    formData.append("image_tag", image_tag);
    formData.append("image_tag2", image_tag2);
    formData.append("image_tag3", image_tag3);
    formData.append("image_tag4", image_tag4);
    formData.append("image_tag5", image_tag5);

    // Check if a cropped image is available
    if (croppedImage) {
      const croppedFile = new File([croppedImage.file], "cropped.jpeg", {
        type: "image/jpeg",
      });
      formData.append("image", croppedFile);
    } else {
      // If no cropped image available, append the original image file
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  // Form fields to complete excluding image upload
  const formFields = (
    <div className="text-center">
      {/* Caption */}
      <Form.Group>
        <Form.Label>Caption</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="caption"
          value={caption}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <>
        <p>Select up to 5 Tags:</p>
        {/* Tag 1 */}
        <div className="d-flex sm-col m-1 justify-content-center">
          <Form.Label>
            <Form.Control
              className=""
              as="select"
              name="image_tag"
              id="image_tag"
              value={image_tag}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              {tagChoices.map((tagChoice) => (
                <option key={tagChoice.value} value={tagChoice.value}>
                  {tagChoice.label}
                </option>
              ))}
            </Form.Control>
          </Form.Label>
        </div>
        {errors?.image_tag?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        {/* Tag 2 */}
        <div className="d-flex sm-col m-1 justify-content-center">
          <Form.Label>
            <Form.Control
              className=""
              as="select"
              name="image_tag2"
              id="image_tag2"
              value={image_tag2}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              {tagChoices.map((tagChoice) => (
                <option key={tagChoice.value} value={tagChoice.value}>
                  {tagChoice.label}
                </option>
              ))}
            </Form.Control>
          </Form.Label>
        </div>
        {errors?.image_tag2?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        {/* Tag 3 */}
        <div className="d-flex sm-col m-1 justify-content-center">
          <Form.Label>
            <Form.Control
              className=""
              as="select"
              name="image_tag3"
              id="image_tag3"
              value={image_tag3}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              {tagChoices.map((tagChoice) => (
                <option key={tagChoice.value} value={tagChoice.value}>
                  {tagChoice.label}
                </option>
              ))}
            </Form.Control>
          </Form.Label>
        </div>
        {errors?.image_tag3?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        {/* Tag 4 */}
        <div className="d-flex sm-col m-1 justify-content-center">
          <Form.Label>
            <Form.Control
              className=""
              as="select"
              name="image_tag4"
              id="image_tag4"
              value={image_tag4}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              {tagChoices.map((tagChoice) => (
                <option key={tagChoice.value} value={tagChoice.value}>
                  {tagChoice.label}
                </option>
              ))}
            </Form.Control>
          </Form.Label>
        </div>
        {errors?.image_tag4?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        {/* Tag 5 */}
        <div className="d-flex sm-col m-1 justify-content-center">
          <Form.Label>
            <Form.Control
              className=""
              as="select"
              name="image_tag5"
              id="image_tag5"
              value={image_tag5}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              {tagChoices.map((tagChoice) => (
                <option key={tagChoice.value} value={tagChoice.value}>
                  {tagChoice.label}
                </option>
              ))}
            </Form.Control>
          </Form.Label>
        </div>
        {errors?.image_tag5?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </>

      <Button onClick={() => history.goBack()}>Cancel</Button>
      <Button type="submit">Post</Button>
    </div>
  );

  return (
    <Container>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <h1>Add a new post</h1>
        <div className="h-20">
          <Button onClick={() => history.goBack()}>Back</Button>
        </div>
      </div>
      {openCrop && (
        <ImageCropper
          image={postData.image}
          onCropComplete={handleCropComplete}
        />
      )}
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
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
                      <Form.Label
                        className={`${s.Text} btn`}
                        htmlFor="image-upload"
                      >
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
                  className={s.FormFile}
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage}
                  ref={imageInput}
                />
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

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
