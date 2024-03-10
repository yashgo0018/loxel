import { lighthouseApiKey } from "./config";
import multer from "multer";
import lighthouse from "@lighthouse-web3/sdk";

const storage = multer.memoryStorage();

export const multerUploader = multer({ storage: storage });

export function generateNonce() {
  const options = "ABCDEDFGHIJKLMNOPQRSTUVWXYZ";
  let nonce = "";
  for (let i = 0; i < 32; i++) {
    if (i !== 0 && i % 8 === 0) {
      nonce += "-";
    }
    nonce += options.charAt(Math.floor(Math.random() * options.length));
  }
  return nonce;
}

export async function uploadToIPFS(file: Express.Multer.File) {
  const res = await lighthouse.uploadBuffer(file.buffer, lighthouseApiKey);
  return res.data;
}

export async function uploadJSONtoIPFS(obj: any) {
  const res = await lighthouse.uploadBuffer(
    Buffer.from(JSON.stringify(obj), "utf-8"),
    lighthouseApiKey
  );
  return res.data as {
    Name: string;
    Hash: string;
    Size: string;
  };
}
