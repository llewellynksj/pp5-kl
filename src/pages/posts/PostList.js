import { Form, Col, Row, Container } from "react-bootstrap";
import s from "../../styles/PostList.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../services/axiosDefaults";
import Post from "./Post";
import Asset from "../../components/Asset";
import NoRes from "../../assets/no_results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import HottestProfiles from "../profiles/HottestProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import BackToTop from "../../components/BackToTopButton";

function PostList({ message }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const currentUser = useCurrentUser();

  // Conditional filter to render PostList by likes_count if on '/trending' route
  let filter = "";
  if (pathname === "/trending") {
    filter = "ordering=-likes_count";
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(
          `/posts/?${filter}&search=${query}`
        );
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <HottestProfiles mobile />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className={s.SearchContainer}>
            <Form
              className={s.SearchBar}
              onSubmit={(event) => event.preventDefault()}
            >
              <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="Search"
              />
            </Form>
          </div>
          {hasLoaded ? (
            <>
              {posts.results.length ? (
                <>
                  <InfiniteScroll
                    children={posts.results.map((post) => (
                      <Post key={post.id} {...post} setPosts={setPosts} />
                    ))}
                    dataLength={posts.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!posts.next}
                    next={() => fetchMoreData(posts, setPosts)}
                    className={s.Scroll}
                  />
                  <BackToTop />
                </>
              ) : (
                <Container>
                  <Asset src={NoRes} message={message} />
                </Container>
              )}
            </>
          ) : (
            <Container>
              <Asset spinner />
            </Container>
          )}
        </div>
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <HottestProfiles />
      </Col>
    </Row>
  );
}
export default PostList;
