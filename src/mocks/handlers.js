import { rest } from "msw";

const baseURL = "https://pp5-api-kl-a5aee8435a6f.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 9,
        username: "Aubrey",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 9,
        profile_image:
          "https://res.cloudinary.com/ksjl86/image/upload/v1/media/images/nat_ghnprt",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
