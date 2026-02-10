"use client";

import { uploadToS3 } from "../actions/upload";
import { useState } from "react";

export default function UploadPage() {
  const [url, setUrl] = useState<string | null>(null);

  async function handleAction(formData: FormData) {
    const result = await uploadToS3(formData);
    if (result.success) {
      setUrl(result.url || null);
      alert("upload success");
    } else {
      alert("upload failed");
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">S3画像アップロードテスト</h1>
      <form action={handleAction}>
        <label htmlFor="file" className="block mb-2">
          ファイルを選択してください
        </label>
        <input
          type="file"
          name="file"
          accept="image/*"
          className="mb-4 text-white block border border-gray-300 rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          アップロード
        </button>
      </form>

      {url && (
        <div className="mt-10">
          <p>保存された画像:</p>
          <img src={url} alt="Uploaded" className="w-64" />
        </div>
      )}
    </div>
  );
}
