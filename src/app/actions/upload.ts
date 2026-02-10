"use server";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadToS3(formData: FormData) {
  const S3ClientInstance = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  const file = formData.get("file") as File;
  if (!file) {
    throw new Error("No file provided");
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${Date.now()}-${file.name}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: fileName,
    Body: buffer,
  });

  try {
    await S3ClientInstance.send(command);
    const imageUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    return { success: true, url: imageUrl }; // Return the file name for unit tests.
  } catch (err) {
    console.log("Error", err);
    return { success: false };
  }
}
