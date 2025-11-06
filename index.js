const bedrock = require('bedrock-protocol');

// ⚙️ Configurações do bot
const client = bedrock.createClient({
  host: "rei_seed1-41hV.aternos.me", // ex: 192.168.0.10 ou play.meuservidor.com
  port: 48090, // Porta padrão do Bedrock
  username: "[SERVIDOR]" // Nome do bot
});

// 🧠 Quando conectar
client.on('spawn', () => {
  console.log("✅ Bot conectado como [SERVIDOR]");
  andarPraFrenteETras();
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 🚶 Loop de movimento
async function andarPraFrenteETras() {
  while (true) {
    client.queue('move_player', {
      position: { x: 0, y: 0, z: 2 }, // anda 2 blocos pra frente
      rotation: { x: 0, y: 0 },
      mode: 0,
      onGround: true
    });
    await delay(2000);
    client.queue('move_player', {
      position: { x: 0, y: 0, z: -2 }, // anda 2 blocos pra trás
      rotation: { x: 0, y: 180 },
      mode: 0,
      onGround: true
    });
    await delay(2000);
  }
}