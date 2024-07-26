import Swal from 'sweetalert2';

document.addEventListener('DOMContentLoaded', () => {
  const userLang = navigator.language || navigator.userLanguage;
  const isChinese = userLang.startsWith('zh');

  if (isChinese) {
    Swal.fire({
      title: '语言切换',
      text: '检测到您的浏览器语言为中文，是否跳转到中文站点？',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '是',
      cancelButtonText: '否'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/zh/';
      }
    });
  }
});
