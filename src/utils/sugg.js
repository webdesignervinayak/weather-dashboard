import OpenAI from "openai";

const sugg = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true,
  });

export default sugg;