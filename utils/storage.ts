import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: process.env.GCLOUD_PROJEC_ID, // Google Cloud 프로젝트 ID
  keyFilename: process.env.GCLOUD_KEY_FILE, // 서비스 계정 인증 파일 경로
});

// 이미지를 가져오는 유틸리티 함수
export async function getImage(fileName: string) {
  try {
    const bucketName = process.env.GCLOUD_BUCKET_NAME as string; // Google Cloud Storage 버킷 이름
    const file = storage.bucket(bucketName).file(fileName);
    const stream = file.createReadStream();

    return stream;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
