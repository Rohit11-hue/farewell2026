import { useEffect, useRef, useState } from "react";
import React from "react";
import music from "../assets/music.mp3";

function Memory() {
  const [friend, setFriend] = useState(null);
  const [reply, setReply] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    const data = localStorage.getItem("currentFriend");
    if (data) {
      setFriend(JSON.parse(data));
    }

    // autoplay after user interaction
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    document.addEventListener("click", playMusic);

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, []);

  const sendReply = () => {
    if (!reply) return alert("Write something 😄");

    const phone = "+918828490172";
    const text = `Reply from ${friend.name}: ${reply}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  if (!friend) return <h2>No Data Found ❌</h2>;

  return (
    <div className="memory">
      {/* 🎵 MUSIC */}
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
      </audio>

      <h1 className="title">For You 💙</h1>

    <div className="photogallary">
        {friend.images.map((img, index)=>(
            <img key={index} src={img} alt="memory" className="gallaryimg"/>
        ))}
    </div>

      <h2 className="name">{friend.name}</h2>

      <p className="message">{friend.message}</p>

      <div className="replyBox">
        <textarea
          placeholder="Write your reply..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        ></textarea>

        <button onClick={sendReply}>Send Reply 💬</button>
      </div>
    </div>
  );
}

export default Memory;