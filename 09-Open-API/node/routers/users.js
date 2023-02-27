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
 *    responses:
 *     '200':
 *      description: Returns the user array
 */
router.post("/api/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send({data: users});
});

export default router;