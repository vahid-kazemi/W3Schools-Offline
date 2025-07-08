// WARNING! Keep in sync with the copy pasted file @ [Profile] ./src/App/Backend/Util/user-info-cookie-crypt-util.ts
// @ts-nocheck
const uicUnpack = async (cookieData, skipValidation) => {
  const rs = str => {
    return str.split("").reverse().join("");
  }

  const mts = (str, n) => {
    return str.slice(-n) + str.slice(0, -n);
  }

  const mte = (str, n) => {
    return str.substr(n) + str.substr(0, n);
  }

  const brp = (str) => {
    return str.replace(/={1,2}$/, '');
  }

  const bap = (str) => {
    return str + Array((4 - str.length % 4) % 4 + 1).join('=');
  }


  const unpack = async (cookieData, skipValidation) => {
    try {
      if (typeof skipValidation === 'undefined') {
        skipValidation = false;
      }

      let unpacked;

      try {
        unpacked = JSON.parse(decodeURIComponent(rs(atob(bap(rs(mts(cookieData, 10)))))));
      } catch (exc) {
        // console.error('v2 unpack attempt -> exc: ');
        // console.error(exc);

        // fallback to v1
        unpacked = JSON.parse(rs(atob(bap(rs(mts(cookieData, 10))))));
      }

      let nowUTS = (new Date().getTime() + new Date().getTimezoneOffset() * 60000);

      if (!skipValidation) {
        if (typeof unpacked['_exp'] === 'undefined') {
          throw Error('Cookie data is not valid');
        } else if (Math.round(nowUTS / 1000) >= unpacked['_exp']) {
          throw Error('Cookie data has expired');
        }
      }

      delete unpacked['_exp'];

      return unpacked;

    } catch (exc) {
      console.error(exc);
    }

    return null;
  }

  return await unpack(cookieData, skipValidation);
}
