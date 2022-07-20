/*
  Detecta o sistema operacional do usuário. Caso utilize um sistema
  mobile, os campos de input serão do tipo readonly, para que somente
  possam ser preenchidos com o uso do teclado virtual implementado
  via código (Ao invés de usar o teclado nativo do android/iOS,etc...)
*/

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }
  
  
userOS = getOS();


if (userOS == 'Android' || userOS == 'iOS') {

  for (word of attempts) {
    for (letter of word) {
      letter.setAttribute('readonly', true);
    }
  }
}


