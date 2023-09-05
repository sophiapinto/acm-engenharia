document.getElementById('Forms-Contato').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbwnTabExrhChBfdwlfmmrJP4iVSKaSqf_pQK11mVLhLBMKBFZkAxYQXxCvxNGqymSDFAg/exec');
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('Dados do formulário enviados com sucesso!');
      } else {
        console.error('Erro ao enviar os dados do formulário.');
      }
    };
    xhr.send(formData);
  });
  