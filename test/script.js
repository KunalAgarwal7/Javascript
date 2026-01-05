import fetchData from "./fetchapi.js";

const filteredData = fetchData.filter((x) => x.userId > 50);
const mapedData = fetchData.map((x) => x.completed);
const sortedData = fetchData.sort((a, b) => a.todo.length - b.todo.length);
const reducedData = fetchData.reduce((acc, curr) => acc + curr.completed, 0);

