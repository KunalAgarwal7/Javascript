const getData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/posts");
    if (res.status === 404) return [];

    const data = await res.json();
    return data.posts;
  } catch (error) {
    return error;
  }
};

let ans = await getData();
export default ans;
