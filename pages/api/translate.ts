
export default async function handler(req, res) {
  const { text } = req.body;
  res.status(200).json({ translation: "이건 테스트 응답입니다: " + text });
}
