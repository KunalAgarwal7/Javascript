const getData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/users");
    if (res.status === 404) return [];

    const data = await res.json();
    return data.users;
  } catch (error) {
    return error;
  }
};

let fetchData = await getData();

export default fetchData;
