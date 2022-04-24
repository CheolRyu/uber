import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer V4TfFyhZkYEsskZx1vVeJyoyQfLqViTjUftHRItbyiwjT1bmKLLBqHyNg-fFgffSpakeDqpDMRGuqICGyifzGy1WBdKbvqIO62uD2kD97vcTjkLC8UBBvZrl5_pVYnYx",
  },
});
