// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns a string John Doe
 *     responses:
 *       200:
 *         description: John Doe
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref:
 *
 */

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
