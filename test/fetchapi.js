const getData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/todos");
    if (!res.ok) return [];

    const obj = await res.json();
    return obj.todos;
  } catch (error) {
    return error;
  }
};

let fetchData = await getData();


export default fetchData;
