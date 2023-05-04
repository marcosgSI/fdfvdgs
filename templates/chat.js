document.addEventListener('DOMContentLoaded', () => {

  // Conectar ao servidor SocketIO
  const socket = io();
        socket.on('connect', function () {
            // socket.emit('teste', {data: 'I\'m connected!'});
        });

  // Enviar mensagem ao servidor ao enviar o formulário
  document.querySelector('#message-form').onsubmit = (e) => {
    e.preventDefault();
    const message = document.querySelector('#input-message').value;
    socket.emit('message', message);
    document.querySelector('#input-message').value = '';
  };

  // Exibir mensagem recebida do servidor
  socket.on('message', data => {
    const p = document.createElement('p');
    p.innerHTML = data;
    document.querySelector('#messages').append(p);
  });

});
