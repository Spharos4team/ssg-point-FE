type PathProps = {
  [key: string]: string;
};

//path 검사: 경로 안에 없는 경로 금지
export function pathValidate(PATH: PathProps, params: { slug: string }) {
  for (const key in PATH) {
    if (params.slug == key) {
      return PATH[key];
    }
  }
  return "/(정의되지 않은 경로)";
}

/**
 * @util 정의되지 않은 경로라면 404 replace, 정의된 경로는 해당 경로로 이동
 * @param PATH
 * @param params
 */
export function pathDistributor(PATH: PathProps, params: { slug: string }) {
  pathValidate(PATH, params);
  //TODO: 검증 후 작업
}
