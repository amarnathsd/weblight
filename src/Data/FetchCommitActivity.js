import axios from "axios";

const fetchCommitActivity = async (owner, repo) => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/stats/commit_activity`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching commit activity:", error);
  }
};

export default fetchCommitActivity;
