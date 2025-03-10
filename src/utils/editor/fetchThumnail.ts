export async function fetchThumbnail(url: string): Promise<string | null> {
  try {
    console.log("🔍 썸네일 요청 URL:", url); // ✅ 요청할 URL 확인

    const response = await fetch(`https://og-image-fetcher-api.com/?url=${encodeURIComponent(url)}`);
    console.log("🔍 API 응답 상태 코드:", response.status); // ✅ HTTP 상태 코드 확인

    if (!response.ok) {
      console.error("❌ 썸네일 API 요청 실패:", response.status);
      return null;
    }

    const data = await response.json();
    console.log("🔍 API 응답 데이터:", data); // ✅ API에서 받은 데이터 확인

    if (data && data.thumbnail) {
      console.log("✅ 썸네일 URL 반환:", data.thumbnail);
      return data.thumbnail;
    }

    console.warn("⚠️ 썸네일 없음, 기본값 사용");
    return null;
  } catch (error) {
    console.error("❌ 썸네일 가져오기 실패:", error);
    return null;
  }
}
