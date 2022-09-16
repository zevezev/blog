import * as React from "react";

const PostList = ({ postData }: { postData: PostData[] }) => {
  return (
    <div>
      {postData?.map((node) => (
        <p>{node.name}</p>
      ))}
    </div>
  );
};

export default PostList;

interface PostData {
  name: string;
}
