import { useParams } from "react-router-dom";
import "./Post.css";

function Post() {
    const { postId } = useParams();

    const post = {
        title: `Recipe ${postId}`,
        description: "This is placeholder recipe desc",
        image: "https://via.placeholder.com/800x500",
        rating: 4.5,
    };

    return (
        <div className="post-container">
            <img src={post.image} alt={post.title} className="post-image" />
            <h2 className="post-title">{post.title}</h2>
            <div className="post-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < post.rating ? "star filled" : "star"}>
                        ★
                    </span>
                ))}
            </div>

            <p className="post-description">{post.description}</p>
            <button className="post-button">Rate this recipe</button>
        </div>
    )
}
export default Post;
