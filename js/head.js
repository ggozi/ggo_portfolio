(function () {
  let str = '';
  str += '<link rel="stylesheet" href="../css/font.css" />';
  str += '<link rel="stylesheet" href="../css/lib/swiper-bundle.min.css" />';
  str += '<link rel="stylesheet" href="../css/style.css" />';
  str += '<script type="text/javascript" src="../js/lib/jquery.min.js"></script>';
  str += '<script type="text/javascript" src="../js/lib/swiper-bundle.min.js"></script>';
  str += '<script type="text/javascript" src="../js/common.js"></script>';
  document.write(str);
  const $include = document.querySelector('.__include');
  if ($include) $include.remove();
})();
