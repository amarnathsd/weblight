import axios from "axios";

const fetchContributorsData = async (owner, repo) => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/stats/contributors`
    );
    console.log(response.data);
    return response.data[0].weeks;
  } catch (error) {
    console.error("Error fetching contributors data:", error);
  }
};

export default fetchContributorsData;
