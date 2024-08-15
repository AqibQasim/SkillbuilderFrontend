import pool from "@/utils/db";

export default async function handler(req, res) {
    const { name, email, image } = req.body;

    console.log("data:", req?.body);

    // const fullName = profile;
    const [first_name, ...last_name_arr] = name.split(' ');
    const last_name = last_name_arr.join(' ');

    const userData = {
        first_name : first_name,
        last_name : last_name,
        email: email,
        source: 'google',
        image: image
    }

    try {
        const { rows } = await pool.query(
            'INSERT INTO user (first_name, last_name, email, source, image) VALUES ($1, $2, $3, $4 ,$5) RETURNING *',
            [userData?.first_name, userData?.last_name, userData?.email, userData?.source, userData?.image]
        );
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}