import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
    apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true,
  });

export default openai;