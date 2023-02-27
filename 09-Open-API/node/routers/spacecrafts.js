import { Router } from "express";
import fetch from "node-fetch";

const router = Router()

/* 
Spacecraft:
      type: object
      required:
        - id
        - name
        - type
      properties:
        id:
          $ref: '#/components/schemas/SpacecraftId'
        name:
          type: string
        type:
          type: string
          enum:
            - capsule
            - probe
            - satellite
            - spaceplane
            - station
        description:
          type: string
    */
const spacecrafts = [
    { id: 1, name: "Cassini", type: "capsule", description: "Cassini–Huygens was a space probe that was launched by NASA in 1997 to study the planet Saturn and its system of rings." },
    { id: 2, name: "Voyager 1", type: "probe", description: "Voyager 1 is a space probe launched by NASA on September 5, 1977. It is the first human-made object to leave the Solar System." },
    { id: 3, name: "Voyager 2", type: "satellite", description: "Voyager 2 is a space probe launched by NASA on August 20, 1977. It is the second human-made object to leave the Solar System." },
    { id: 4, name: "Pioneer 10", type: "spaceplane", description: "Pioneer 10 is a space probe launched by NASA on March 2, 1972. It is the first spacecraft to leave the Solar System." },
]

// get spacecraft by id
/**
 * @openapi
 * /api/spacecrafts/{id}:
 *  get:
 *     description: Get a spacecraft by id
 *     responses:
 *     '200':
 *        description: Return a spacecraft
 *     '404':
 *        description: The spacecraft with the given ID was not found.
 * 
 */
router.get("/api/spacecrafts/:id", (req, res) => {
    const spacecraft = spacecrafts.find(spacecraft => spacecraft.id === parseInt(req.params.id))
    if (!spacecraft) return res.status(404).send("The spacecraft with the given ID was not found.")
    res.send(spacecraft)
})

/**
 * @openapi
 * /ngrok/spacecrafts/{id}:
 * get:
 *     description: Get a spacecraft by id
 *     responses:
 *     '200':
 *        description: Return a spacecraft
 *     '404':
 *        description: The spacecraft with the given ID was not found.
 * 
 */
router.get("/ngrok/spacecrafts/:id", (req, res) => {
    const ngrok = 'https://9c9a-195-249-146-100.eu.ngrok.io'
    // fetch the spacecraft from the ngrok server
    // fetch ngrok 10000 times
    for (let i = 0; i < 10000; i++) {
        fetch(`${ngrok}/api/spacecrafts/${req.params.id}`)
        .then(response => response.json())
        .then(data => res.send(data))
        .catch(err => res.status(404).send(err))
    }

   
})


export default router