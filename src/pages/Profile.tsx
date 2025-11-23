import "./Profile.css";

function Profile() {
    // placeholder korisnik
    const user = {
        name: "John Doe",
        bio: "Food lover. Cooking since 2010.",
        avatar: "https://via.placeholder.com/150",
        link: "https://example.com",
    };

    // placeholder postovi
    const posts = Array.from({ length: 6 });

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={user.avatar} alt="avatar" className="profile-avatar" />
                <div>
                    <h2>{user.name}</h2>
                    <h3>Social Media Link: {user.link}</h3>
                    <p>Bio: {user.bio}</p>
                </div>
            </div>

            <h3 className="profile-section-title">Recipes</h3>

            <div className="profile-posts">
                {posts.map((_, i) => (
                    <div key={i} className="profile-post-item">
                        <img
                            src={`https://via.placeholder.com/300?text=Recipe+${i + 1}`}
                            alt={`Recipe ${i + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
