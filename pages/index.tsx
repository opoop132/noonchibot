
"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    const data = await res.json();
    setTranslated(data.translation);
    setLoading(false);
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>눈치봇</h1>
      <textarea
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="직장 상사의 애매한 말을 붙여넣으세요"
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <button onClick={handleTranslate} disabled={loading}>
        {loading ? "분석 중..." : "진짜 의미 해석하기"}
      </button>
      {translated && <p style={{ marginTop: "1rem" }}>{translated}</p>}
    </main>
  );
}
