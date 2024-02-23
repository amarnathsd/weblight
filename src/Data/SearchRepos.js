import axios from "axios";

const SearchRepos = async (page) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error searching repositories:", error);
  }
};

export default SearchRepos;
