import axios from "axios";
import cookies from 'js-cookie';

const token = cookies.get('token')
const API_URL= `${process.env.NEXT_PUBLIC_API_URL}/api/v1/graphql`

export default async function postDataset({
  slug,
  name,
  description,
  organization,
  themes,
  tags,
  version,
  status,
  isClosed
}) {
  try {
    const res = await axios({
      method: 'POST',
      url: API_URL,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        query:`
        mutation {
          CreateUpdateDataset (input:
            {
              slug: "${slug}"
              name: "${name}"
              description: "${description}"
              organization: "${organization}"
              themes: [${themes}]
              ${tags.length > 0 ? `tags: [${tags}]` : ""}
              version: ${version ? parseInt(version) : 0}
              status: "${status}"
              isClosed: ${isClosed}
            }
          )
          {
            dataset {
              _id
            }
            errors {
              messages
            }
          }
        }
        `
      }
    })
    const data = res.data.data.CreateUpdateDataset.dataset._id
    return data
  } catch (error) {
    console.error(error)
  }
}
