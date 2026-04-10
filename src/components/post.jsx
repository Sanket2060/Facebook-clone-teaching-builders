import { comment } from "postcss";
import { useEffect, useState } from "react";
import { Link } from "react-router";
function Post(props) {
  const [like, setLike] = useState(0);
  function likeCount() {
    setLike((like) => like + 1);
    setTotalLikes((totalLikes) => totalLikes + 1);
  }
  const [viewComment, setViewComment] = useState(false);
  const [comments, setComments] = useState([
    {
      name: "sita",
      imageUrl:
        "https://images.unsplash.com/photo-1680355466468-bd0a68b11fa0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYW5rJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      commentText: "Nice post!!!",
    },
    {
      name: "Hari",
      imageUrl:
        "https://images.unsplash.com/photo-1680355466468-bd0a68b11fa0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYW5rJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      commentText: "Awesome 🔥",
    },
  ]);

  function seeComment() {
    setViewComment((viewComment) => !viewComment);
    console.log(viewComment);
  }

  function addComment(e) {
    e.preventDefault();
    const comment = e.target.inputComment.value;
    console.log("comment", comment);
    console.log("hello");
    console.log(e);
  }
  const name = props.name || "Unknown User";
  const setTotalLikes = props.setTotalLikes;
  const caption = props.caption;
  const image = props.image;
  const id = props.id;
  const profile =
    props.profile ||
    "https://images.unsplash.com/photo-1680355466468-bd0a68b11fa0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYW5rJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";
  const time = props.time;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4">
      {/* Post Header */}
      <Link to={`/profile/${id}`}>
        <div className="flex items-center px-4 py-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={profile}
            alt="User"
          />
          <div className="ml-3">
            <span className="text-gray-800 font-semibold">{name}</span>
            <p className="text-gray-500 text-sm">{time}</p>
          </div>
        </div>
      </Link>
      {/* Post Caption */}
      <div className="px-4 py-2">
        <p className="text-gray-700">{caption}</p>
      </div>

      {/* Post Image */}
      {image ? (
        <div>
          <img className="w-full h-64 object-cover" src={image} alt="Post" />
        </div>
      ) : (
        <div></div>
      )}

      {/* Post Actions */}
      <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200">
        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10a6 6 0 0112 0 6 6 0 01-12 0z" />
          </svg>
          <button onClick={likeCount}>Like</button>

          <span>{like}</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5h16v10H2z" />
          </svg>
          <button onClick={seeComment}>Comment</button>
          {/* <span>{viewComment}</span> */}
        </button>

        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4l10 6-10 6V4z" />
          </svg>
          <span>Share</span>
        </button>
      </div>
      {viewComment ? (
        <div>
          {/* Comment Input */}
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <form onSubmit={addComment}>
                <input
                  type="text"
                  name="inputComment"
                  placeholder="Write a comment..."
                  className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600"
                >
                  Post
                </button>
              </form>
            </div>
          </div>

          {/* Comments Section */}
          <div className="px-4 pb-4 space-y-2">
            {comments.map((comment) => {
              return (
                <div className="flex items-start space-x-2">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1680355466468-bd0a68b11fa0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYW5rJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="User"
                  />
                  <div className="bg-gray-100 px-3 py-2 rounded-lg">
                    <p className="text-sm font-semibold">Hari</p>
                    <p className="text-sm text-gray-700">Awesome 🔥</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Post;
