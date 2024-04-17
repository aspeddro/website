import axios from "axios";

const API_URL= `${process.env.NEXT_PUBLIC_API_URL}/api/v1/graphql`

async function getUserGetSubscription(id, token) {
  try {
    const res = await axios({
      url: API_URL,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        query: `
          query {
            allAccount (id: "${id}"){
              edges {
                node {
                  email
                  proSubscriptionStatus
                }
              }
            }
          }
        `
      }
    })
    const data = res.data
    return data
  } catch (error) {
    console.error(error)
    return "err"
  }
}

export default async function handler(req, res) {
  const token = req.cookies.token

  const result = await getUserGetSubscription(atob(req.query.p), token)

  if(result.errors) return res.status(500).json({error: result.errors})
  if(result === "err") return res.status(500).json({error: "err"})

  res.status(200).json(result?.data?.allAccount?.edges[0]?.node)
}
