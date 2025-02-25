export const tinyMCEFonts = {
  font_family_formats:
    "Noto Sans KR=Noto Sans KR,sans-serif; " +
    "나눔고딕 KR=Nanum Gothic,sans-serif; " +
    "맑은 고딕 KR=Malgun Gothic,sans-serif; " +
    "Apple SD 고딕 KR=Apple SD Gothic Neo,sans-serif; " +
    "Arial=Arial,helvetica,sans-serif; " +
    "Courier New=Courier New,courier; " +
    "Georgia=Georgia,palatino; " +
    "Tahoma=Tahoma,arial,helvetica,sans-serif; " +
    "Verdana=Verdana,geneva,sans-serif;",

  content_style: `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');
      body {
        font-family: 'Noto Sans KR', 'Nanum Gothic', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;
        font-size: 14px;
      }
    `,
};
