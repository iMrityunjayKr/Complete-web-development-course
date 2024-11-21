function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched successfully");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data");
    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();
    // console.log(blogData);
    // console.log(commentData);
    const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData])
  } catch (error) {
    console.error("Error fectching blod data", error);
  }
}

getBlogData();
