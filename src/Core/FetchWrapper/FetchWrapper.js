export const FetchWrapper = {
  post,
};

const FETCH_METHODS = { POST: "POST", GET: "GET" };

const getCommonHeaders = () => ({
  headers: {
    "Content-Type": "application/json",
    Accept: " application / json",
  },
});

const getHeaders = (headers) => ({
  ...getCommonHeaders(),
  ...headers,
});

async function post(url, { body, headers }) {
  return await fetch(url, {
    body: JSON.stringify(body),
    method: FETCH_METHODS.POST,
    ...getHeaders(headers),
  });
}
