import "./Feed.css";

function Feed() {
    // samo placeholder podaci
    const items = Array.from({ length: 12 });

    return (
        <div className="feed-container">
            {items.map((_, i) => (
                <div key={i} className="feed-item">
                    <img
                        src={`https://via.placeholder.com/300?text=Recipe+${i + 1}`}
                        alt={`Recipe ${i + 1}`}
                    />
                </div>
            ))}
        </div>
    );
}

export default Feed;
