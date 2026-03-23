import { useState, useEffect } from "react";
import friends from "../data/friends";
import PasswordModal from "../components/PasswordModel";


function Home() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch]=useState("");
  const [selectedFriend, setSelectedFriend] = useState(null);


  useEffect(()=>{
    const timer = setTimeout(()=>{
        setDebouncedSearch(search)
    },400)
    return ()=>clearTimeout(timer)
  },[search])
  

  const filteredFriends = search.trim()===""?[]: friends.filter((f) =>
    f.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const handleClick = (friend) => {
    setSelectedFriend(friend);
  };

  const closeModal = () => {
    setSelectedFriend(null);
  };

  const handleSuccess = (friend) => {
    localStorage.setItem("currentFriend", JSON.stringify(friend));
    window.location.href = "/memory";
  };

  return (
    <div className="home">
      <h1 className="title">TY-BSCIT 2023-2026 </h1>

      <h2 className="subtitle">Search Your Name 🔍</h2>

      <input
        type="text"
        className="search"
        placeholder="Enter your name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="results fadeIn">
        {filteredFriends.map((friend, index) => (
          <div className="card" key={index} onClick={() => handleClick(friend)}>
            <img src={friend.image} alt={friend.name} className="image" />
            <p className="name">{friend.name}</p>
          </div>
        ))}
      </div>

      {selectedFriend && (
        <PasswordModal
          friend={selectedFriend}
          onClose={closeModal}
          onSuccess={handleSuccess}
        />
      )}

      <div className="kavita">
       <h3>tumchya sathi </h3>
       <p>
       अनोळखी व्यक्ती म्हणून भेटलो आपण पण मैत्री आपली घट्ट झाली ,

बघता बघता तुमच्या सोबतची 3 वर्ष ही पूर्ण झाली ,
आणि चुकल असेल काही तर आपला म्हणून समजून घ्या, 
कारण संपला आहे हा प्रवास आपला आता लांब जान्याची वेळ आली 😉🫂
       </p>
      </div>
    </div>
  );
}

export default Home;