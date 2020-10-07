// fetch("https://diyaswarns90559.ipage.com/test/wp-json/wp/v2/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("finished");

const getData = async function () {
  const response = await fetch(
    "https://diyaswarns90559.ipage.com/test/wp-json/wp/v2/posts"
  );
  const data = response.json();
  return data;
};

const value = getData();
console.log(value);
