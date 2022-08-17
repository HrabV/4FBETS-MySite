import { axios } from "../../config";

export const all = async () => {
  const r = await axios.get("/api/news");
  return r.data;
};

export const oneById = async (id) => {
  const r = await axios.get(`/api/news/${id}`);
  return r.data;
};

export const add = async ({ title, body, image, accessToken }) => {
  const form = new FormData();
  form.append("title", title);
  form.append("body", body);
  form.append("image", image);

  const r = await axios.post("/api/news/", form, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return r.data;
};

export const update = async ({ accessToken, ...news }) => {
  await axios.put(
    `/api/news/${news.id}`,
    { ...news },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const remove = async ({ id, accessToken }) => {
  await axios.delete(`/api/news/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
