import { Router } from "express";
const router = Router();


const users = [
    {
        id: 1,
        name: "John Doe"
    }];

/**
 * @openapi
 * /api/users:
 *  get:
 *    description: Get all users
 *    responses:
 *     '200':
 *      description: Return all users
 */
router.get("/api/users", (req, res) => {
    res.send({data: users});
});

/**
 * @openapi
 * /api/users:
 *  post:
 *    description: post a user to the users array
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                type: integer
 *               name:
 *                 type: string
 *             required:
 *               - id
 *               - name
 *           example:
 *             id: 1
 *             name: john doe
 *    responses:
 *     '200':
 *      description: User created
 */
router.post("/api/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send ({ data: users.find((user) => user.id === user.id) });
});

export default router;