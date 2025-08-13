export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const payload = req.body;
    console.log("Revspot callback:", payload);

    // TODO: upsert to DB with payload.contact_id

    return res.status(200).send("ok");
  } catch (e) {
    console.error(e);
    return res.status(200).send("ok");
  }
}
