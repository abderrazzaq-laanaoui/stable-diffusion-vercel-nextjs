// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Replicate from 'replicate';

const translatePrompt = async (prompt, lang) => {
  if(lang === 'en') return prompt
  if(lang !== 'dr' && lang !== 'fr' && lang !== 'ar') throw new Error("Language not supported")
   const res = await fetch('https://tajine-bensadik-net.azurewebsites.net/translate', {
      method: 'POST',
      body: JSON.stringify({ Text:prompt, From:lang, To:'en' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!res.ok) throw new Error("Translation failed");
    const data = await res.json()
    console.log("data", data)
    return data.translation
    
}

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { value, lang } = req.body;
  
  const prompt =  await translatePrompt(value, lang)//.then((data) => data).catch((err) => {throw err})

 
  try {
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

   
    const output = await replicate.run(
      "ai-forever/kandinsky-2:601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f",
     // "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
      {
        input: {
          prompt,
       //   image_dimensions: "512x512",
          num_inference_steps: 12,
          num_outputs: 1,
          guideance_scale: 7.5,
         // scheduler: "K_EULER" ,
        },
      },
    );


    res.status(200).json(output)
    //res.status(200).json([
     //   'https://replicate.delivery/pbxt/neqGIe66cYuPOUPM0JqokMfqsX9CRYgvkycUxyqlCKUjwJchA/out-0.png'
    //  ]
    //);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export default handler;