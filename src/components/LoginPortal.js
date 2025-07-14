import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPortal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-800 to-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-2xl w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center mb-4">🚀 Enter the Portal</h1>

        <input
          className="w-full mb-3 p-2 rounded bg-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full mb-5 p-2 rounded bg-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() => {
            const audio = new Audio("/portal.mp3");
            audio.play();
            alert(`Welcome, ${username || "traveler"}!`);
          }}
          className="w-full bg-purple-700 hover:bg-purple-900 transition-all py-2 rounded font-semibold"
        >
          Enter Portal
        </button>
      </motion.div>
    </div>
  );
}
