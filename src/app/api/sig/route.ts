import axios from "axios";

//get from env
const STRAPI_TOKEN = `secret`

export async function GET(request: Request) {
  const url = new URL(request.url);
  const params = url.searchParams;

  try {
    const wallet = params.get("w");
    const sig_res = await axios.get(`https://097pqpp7zh.execute-api.us-east-2.amazonaws.com/api/signed-reveal-keys?filters[wallet][$eq]=${wallet}`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        }
      })

    const tokenIds : number[] = sig_res.data.data.map((item: any) => item.attributes.token_id);

    let baseUrl = `https://097pqpp7zh.execute-api.us-east-2.amazonaws.com/api/poppet-tokens?filters[revealed][$eq]=false`;

    tokenIds.forEach((tokenId, index) => {
        baseUrl += `&filters[token_id][$in][${index}]=${tokenId}`;
    });

    const ur_res = await axios.get(baseUrl,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      }
    })
    const unrevealedTokenIds: number[] = ur_res.data.data.map((item: any) => item.attributes.token_id);

    const unrevealedSignatures = sig_res.data.data.filter((item: any) => unrevealedTokenIds.includes(item.attributes.token_id));

    return new Response(`${JSON.stringify(unrevealedSignatures)}`);
  } catch (e) {
    return new Response(`Error: ${e}`);
  }

}
