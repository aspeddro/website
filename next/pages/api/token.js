import axios from "axios";
// import { API_URL } from "../../../configs";

const API_URL="https://staging.backend.dados.rio/api/v1/graphql"
const tokenEndpoint = `https://staging.backend.dados.rio/api/token/`

async function getToken() {
  const res = await axios({
    url: baseUrl,
    method: "POST",
    data: {
      query: `
      mutation {
        tokenAuth(
            username: "staging_admin",
            password: "H612e6xHF$ph%xuk",
        ) {
            payload,
            refreshExpiresIn,
            token
        }
    }`
    }
  })
  try {
    const data = res.data.data.tokenAuth.token
    return data
  } catch (error) {
    console.error(error)
  }
}

export default getToken