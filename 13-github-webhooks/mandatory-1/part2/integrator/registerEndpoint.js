// My server
const registerEndpoint = () => {
    const serverEndpoint =
      "https://webhook-server-5rp8.onrender.com/webhook"
  
    const event = "order.created";
    const callback_url = "https://9cad-217-74-223-206.ngrok-free.app/bo"
    const data = { callback_url, event }

    fetch(serverEndpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
  
 // For Michael B's server
  const registerMyEndpoint = () => {
    const serverEndpoint =
    "http://webhook-michael.westeurope.cloudapp.azure.com/register";

    const type = "payment";
    const endpoint = "https://59f2-89-23-224-111.eu.ngrok.io/bob";
    const webhookName = "bob";
    const data = {type, endpoint, webhookName};
    fetch(serverEndpoint, {
        method: "POST",
        headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((json) => console.log(json));
  }
  
  registerEndpoint();
  // registerMyEndpoint();